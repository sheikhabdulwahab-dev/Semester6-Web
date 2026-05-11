import { useState } from 'react';
import './app.css'

 
function MainBody(){
    // This is the state we just learned about!
    const [isOpen, setIsOpen] = useState(true);

    return(
        <div id="main">
            
            {/* The className changes dynamically based on the state */}
            <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
                
                {/* The button that triggers the state change */}
                <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '◀ Collapse' : '▶'}
                </button>

                {/* Only display the menu if isOpen is true */}
                {isOpen && (
                    <div>
                        <h3>Menu</h3>
                        <ul>
                            {/* Notice the emojis added here for icons */}
                            <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>🏠 Dashboard</a></li>
                            <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>👤 Profile</a></li>
                            <li><a href="#" style={{color: 'white', textDecoration: 'none'}}>⚙️ Settings</a></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Your excellent content area remains exactly the same */}
            <div className="content">
                <h1>Welcome to My App</h1>
                <p>This is a simple React landing page layout</p>
                <button>Get Started</button>
            </div>

        </div>
    )
}
export default MainBody