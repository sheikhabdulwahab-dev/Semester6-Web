import { cartcontext } from "./component/cartcontext"
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './component/firebase'
import './App.css'

import Pizzamenu from './component/pizzamenu'
import Bucket from "./component/bucket"
import Contact from "./component/contact"
import Login from "./component/login"
import OrderHistory from "./component/orderhistory"

// Separate NavBar component so it can use useLocation()
function NavBar({ user, handleSignOut, cart }) {
  const location = useLocation();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Left Side Links */}
      <div className="nav-links">
        <Link to='/pizzamenu' className={`nav-link ${location.pathname === '/' || location.pathname === '/pizzamenu' ? 'active' : ''}`}>
          🍕 Menu
        </Link>
        <Link to='/bucket' className={`nav-link ${location.pathname === '/bucket' ? 'active' : ''}`} style={{ position: 'relative' }}>
          🛒 Bucket
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
        <Link to='/contact' className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          📞 Contact
        </Link>
        {user && (
          <Link to='/orderhistory' className={`nav-link ${location.pathname === '/orderhistory' ? 'active' : ''}`}>
            📜 History
          </Link>
        )}
      </div>

      {/* Right Side: Auth status */}
      <div className="nav-auth">
        {user ? (
          <div className="nav-user-info">
            <span className="nav-user-name">
              👋 Hi, {user.name}!
            </span>
            <button onClick={handleSignOut} className="nav-btn">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to='/login' className="nav-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>🍕 Pizza Shop</h3>
          <p>Serving premium handcrafted pizzas with the freshest ingredients since 2024.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/pizzamenu">Menu</Link></li>
            <li><Link to="/bucket">My Bucket</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📧 pizzaShop@gmail.com</p>
          <p>📞 +92 300 1234567</p>
          <p>📍 Lahore, Pakistan</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Pizza Shop. All Rights Reserved.
      </div>
    </footer>
  );
}

function App(){
  const [cart, setcart] = useState([])
  const [user, setUser] = useState(null) // Initialize user as null (object) instead of ''

  // Function to sign the user out of Firebase and clear local state
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return(
    <cartcontext.Provider value={{cart , setcart, user, setUser}}>
      <BrowserRouter>  

      {/* Navigation Bar */}
      <NavBar user={user} handleSignOut={handleSignOut} cart={cart} />

      {/* Routes */}
      <Routes>
        <Route path = '/' element = {<Pizzamenu/>} />
        <Route path = '/pizzamenu' element = {<Pizzamenu/>} />
        <Route path = '/bucket' element = {<Bucket/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/orderhistory' element = {<OrderHistory />} />
      </Routes>

      {/* Footer */}
      <Footer />

      </BrowserRouter>
    </cartcontext.Provider>
  )
}
export default App