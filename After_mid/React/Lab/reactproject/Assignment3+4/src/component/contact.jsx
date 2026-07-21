
function Contact(){
    return(
        <div style={{ 
            padding: '60px 40px', 
            fontFamily: '"Poppins", "Segoe UI", sans-serif', 
            backgroundColor: '#F8F9FA', 
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <div style={{ width: '100%', maxWidth: '900px' }}>
                <h2 style={{ 
                    color: '#E23744', 
                    borderBottom: '3px solid #E23744', 
                    paddingBottom: '10px', 
                    marginBottom: '40px', 
                    display: 'inline-block',
                    fontSize: '28px'
                }}>
                    📞 Contact Us
                </h2>

                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    
                    {/* Contact Info Cards */}
                    <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        
                        {/* Email Card */}
                        <div style={{ 
                            backgroundColor: 'white', 
                            padding: '25px', 
                            borderRadius: '15px', 
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            borderLeft: '5px solid #E23744',
                            transition: 'transform 0.2s ease'
                        }}>
                            <h3 style={{ margin: '0 0 8px', color: '#333', fontSize: '18px' }}>📧 Email</h3>
                            <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>pizzaShop@gmail.com</p>
                        </div>

                        {/* Phone Card */}
                        <div style={{ 
                            backgroundColor: 'white', 
                            padding: '25px', 
                            borderRadius: '15px', 
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            borderLeft: '5px solid #E23744'
                        }}>
                            <h3 style={{ margin: '0 0 8px', color: '#333', fontSize: '18px' }}>📱 Phone</h3>
                            <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>+92 300 1234567</p>
                        </div>

                        {/* Address Card */}
                        <div style={{ 
                            backgroundColor: 'white', 
                            padding: '25px', 
                            borderRadius: '15px', 
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            borderLeft: '5px solid #E23744'
                        }}>
                            <h3 style={{ margin: '0 0 8px', color: '#333', fontSize: '18px' }}>📍 Address</h3>
                            <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>Main Boulevard, Lahore, Pakistan</p>
                        </div>

                        {/* Hours Card */}
                        <div style={{ 
                            backgroundColor: 'white', 
                            padding: '25px', 
                            borderRadius: '15px', 
                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                            borderLeft: '5px solid #E23744'
                        }}>
                            <h3 style={{ margin: '0 0 8px', color: '#333', fontSize: '18px' }}>🕐 Hours</h3>
                            <p style={{ margin: '0 0 4px', color: '#666', fontSize: '15px' }}>Mon - Fri: 11:00 AM - 11:00 PM</p>
                            <p style={{ margin: 0, color: '#666', fontSize: '15px' }}>Sat - Sun: 12:00 PM - 12:00 AM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ 
                        flex: '1', 
                        minWidth: '280px',
                        backgroundColor: 'white', 
                        padding: '30px', 
                        borderRadius: '15px', 
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ margin: '0 0 20px', color: '#333', fontSize: '20px' }}>Send us a Message</h3>
                        
                        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you soon. 🍕'); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                required
                                style={{ 
                                    padding: '12px 15px', 
                                    borderRadius: '8px', 
                                    border: '1px solid #ddd', 
                                    fontSize: '15px',
                                    fontFamily: 'inherit',
                                    outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                required
                                style={{ 
                                    padding: '12px 15px', 
                                    borderRadius: '8px', 
                                    border: '1px solid #ddd', 
                                    fontSize: '15px',
                                    fontFamily: 'inherit',
                                    outline: 'none'
                                }}
                            />
                            <textarea 
                                placeholder="Your Message" 
                                rows="5"
                                required
                                style={{ 
                                    padding: '12px 15px', 
                                    borderRadius: '8px', 
                                    border: '1px solid #ddd', 
                                    fontSize: '15px',
                                    fontFamily: 'inherit',
                                    outline: 'none',
                                    resize: 'vertical'
                                }}
                            />
                            <button 
                                type="submit"
                                style={{ 
                                    backgroundColor: '#E23744', 
                                    color: 'white', 
                                    border: 'none', 
                                    padding: '14px', 
                                    borderRadius: '8px', 
                                    cursor: 'pointer', 
                                    fontWeight: 'bold', 
                                    fontSize: '16px',
                                    fontFamily: 'inherit'
                                }}
                            >
                                Send Message ✉️
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact