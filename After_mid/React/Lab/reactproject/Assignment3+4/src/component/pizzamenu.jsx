import { cartcontext } from "./cartcontext";
import { useContext, useEffect } from 'react';

function Pizzamenu(){
    // We grab our new user from the context!
    const { cart, setcart, user } = useContext(cartcontext);
    
    const handelAddToCart = (pizaname, pizaprice) => {
        const existingpizza = cart.find((item) => item.name === pizaname)

        if(existingpizza){
            const updatedcart = cart.map((item) =>
                item.name === pizaname ? 
                { ...item, quantity: item.quantity + 1 }
                : item
            )
            setcart(updatedcart)
        }
        else{
            const newpizza = { name: pizaname, price: pizaprice, quantity: 1 }
            setcart([...cart, newpizza])
        }
    } 

    const totalprice = cart.reduce((total, item) => {
       return total + (item.price * item.quantity)
    }, 0);

    const clearCart = () => {
        setcart([]); 
    }

    // --- FEATURE 5 LOGIC: useEffect Hook ---
    useEffect(() => {
        document.title = `🍕 Pizza Shop | Total: Rs. ${totalprice}`;
    }, [totalprice]);

    return(
        <div style={{ 
            display: 'flex', 
            gap: '30px', 
            padding: '40px', 
            fontFamily: '"Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif', 
            backgroundColor: '#F8F9FA', 
            minHeight: '70vh',
            flexWrap: 'wrap'
        }}> 
            
            {/* ================= LEFT SIDE: PIZZA MENU ================= */}
            <div style={{ flex: '2', minWidth: '0' }}>
                <h2 style={{ color: '#E23744', borderBottom: '3px solid #E23744', paddingBottom: '10px', marginBottom: '30px', display: 'inline-block', fontSize: 'clamp(20px, 5vw, 28px)' }}>Premium Pizzas</h2>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                    gap: '20px' 
                }}>
                    
                    {/* Pizza 1 */}
                    <div style={{ 
                        backgroundColor: 'white', borderRadius: '15px', padding: '15px', 
                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                         onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.12)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'; }}
                    >
                        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300" alt="BBQ Pizza" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
                        <h3 style={{ margin: '0 0 10px', color: '#333', fontSize: '16px' }}>BBQ Pizza</h3>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#E23744', marginTop: 'auto' }}>Rs. 1000</p>
                        <button style={{ backgroundColor: '#E23744', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '10px', fontSize: '14px', fontFamily: 'inherit' }} onClick={()=> handelAddToCart('BBQ', 1000)}>
                            Add to Cart 🛒
                        </button>
                    </div>

                    {/* Pizza 2 */}
                    <div style={{ 
                        backgroundColor: 'white', borderRadius: '15px', padding: '15px', 
                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                         onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.12)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'; }}
                    >
                        <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=300" alt="Veg Pizza" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
                        <h3 style={{ margin: '0 0 10px', color: '#333', fontSize: '16px' }}>Veg Pizza</h3>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#E23744', marginTop: 'auto' }}>Rs. 800</p>
                        <button style={{ backgroundColor: '#E23744', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '10px', fontSize: '14px', fontFamily: 'inherit' }} onClick={() => handelAddToCart('Veg', 800)}>
                            Add to Cart 🛒
                        </button>
                    </div>

                    {/* Pizza 3 */}
                    <div style={{ 
                        backgroundColor: 'white', borderRadius: '15px', padding: '15px', 
                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                         onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.12)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'; }}
                    >
                        <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300" alt="Pepperoni Pizza" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
                        <h3 style={{ margin: '0 0 10px', color: '#333', fontSize: '16px' }}>Pepperoni Pizza</h3>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#E23744', marginTop: 'auto' }}>Rs. 1200</p>
                        <button style={{ backgroundColor: '#E23744', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '10px', fontSize: '14px', fontFamily: 'inherit' }} onClick={() => handelAddToCart('Pepperoni', 1200)}>
                            Add to Cart 🛒
                        </button>
                    </div>

                    {/* Pizza 4 */}
                    <div style={{ 
                        backgroundColor: 'white', borderRadius: '15px', padding: '15px', 
                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                         onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.12)'; }}
                         onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'; }}
                    >
                        <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300" alt="Margherita Pizza" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} />
                        <h3 style={{ margin: '0 0 10px', color: '#333', fontSize: '16px' }}>Margherita Pizza</h3>
                        <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#E23744', marginTop: 'auto' }}>Rs. 900</p>
                        <button style={{ backgroundColor: '#E23744', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '10px', fontSize: '14px', fontFamily: 'inherit' }} onClick={() => handelAddToCart('Margherita', 900)}>
                            Add to Cart 🛒
                        </button>
                    </div>

                </div>
            </div>

            {/* ================= RIGHT SIDE: SIDEBAR ================= */}
            <div style={{ 
                flex: '1', 
                minWidth: '280px',
                backgroundColor: 'white', 
                padding: '25px', 
                borderRadius: '15px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
                height: 'fit-content', 
                position: 'sticky', 
                top: '85px' 
            }}>
                
                {/* --- ORDER TOTAL --- */}
                <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '15px', color: '#333', marginTop: '0', fontSize: '20px' }}>Order Summary</h2>
                
                {/* Show items in sidebar */}
                {cart.length > 0 && (
                    <div style={{ marginBottom: '15px' }}>
                        {cart.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontSize: '14px' }}>
                                <span style={{ color: '#555' }}>{item.quantity}x {item.name}</span>
                                <span style={{ color: '#333', fontWeight: '600' }}>Rs. {item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
                    <span style={{ fontSize: '16px', color: '#666', fontWeight: 'bold' }}>{!user ? "Total:" : `${user.name}'s Total:`}</span>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#E23744' }}>Rs. {totalprice}</span>
                </div>
                
                <button onClick={clearCart} style={{ backgroundColor: 'white', color: '#E23744', border: '2px solid #E23744', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%', fontSize: '15px', fontFamily: 'inherit' }}>
                    Clear Cart 🗑️
                </button>
            </div>
        </div>
    )
}
export default Pizzamenu;
