import { cartcontext } from "./component/cartcontext"
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './component/firebase'
 
import Pizzamenu from './component/pizzamenu'
import Bucket from "./component/bucket"
import Contact from "./component/contact"
import Login from "./component/login" // Import the Login component!
import OrderHistory from "./component/orderhistory" // Import the OrderHistory component!
  
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
      <nav style={{ 
        backgroundColor: '#E23744', 
        padding: '20px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', // Push links to left, user status to right
        alignItems: 'center',
        boxShadow: '0 4px 15px rgba(226, 55, 68, 0.4)',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
      }}>
        {/* Left Side Links */}
        <div style={{ display: 'flex', gap: '50px' }}>
          <Link to='/Pizzamenu' style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>🍕 Menu</Link>
          <Link to='/Bucket' style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>🛒 Bucket</Link>
          <Link to='/Contact' style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>📞 Contact</Link>
          {user && (
            <Link to='/orderhistory' style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px' }}>📜 History</Link>
          )}
        </div>

        {/* Right Side: Auth status */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
                Hi! {user.name}
              </span>
              <button 
                onClick={handleSignOut} 
                style={{ 
                  backgroundColor: 'white', 
                  color: '#E23744', 
                  border: 'none', 
                  padding: '8px 18px', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold',
                  fontSize: '15px' 
                }}
              >
                Signout
              </button>
            </div>
          ) : (
            <Link 
              to='/login' 
              style={{ 
                backgroundColor: 'white', 
                color: '#E23744', 
                textDecoration: 'none', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                padding: '8px 18px', 
                borderRadius: '8px' 
              }}
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path = '/' element = {<Pizzamenu/>} />
        <Route path = '/pizzamenu' element = {<Pizzamenu/>} />
        <Route path = '/bucket' element = {<Bucket/>} />
        <Route path = '/Contact' element = {<Contact/>} />
        <Route path = '/login' element = {<Login />} /> {/* Add the Login route */}
        <Route path = '/orderhistory' element = {<OrderHistory />} /> {/* Add the Order History route */}
      </Routes>

      </BrowserRouter>
    </cartcontext.Provider>
  )
}
export default App