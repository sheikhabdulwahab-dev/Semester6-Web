import { useContext } from 'react';
import { cartcontext } from './cartcontext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function Bucket(){
    const { cart, setcart, user } = useContext(cartcontext);

    const totalprice = cart.reduce((total, item) => {
       return total + (item.price * item.quantity);
    }, 0);

    // --- Protect the Bucket ---
    if (!user) {
        return (
            <div style={{ padding: '60px 20px', fontFamily: '"Poppins", "Segoe UI", sans-serif', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>🔒</div>
                <h2 style={{ color: '#E23744', marginBottom: '10px' }}>Access Denied</h2>
                <p style={{ color: '#888', fontSize: '16px', maxWidth: '400px' }}>Please log in first using the navigation bar to view your bucket!</p>
            </div>
        );
    }
    
    // --- Place Order handler ---
    const handlePlaceOrder = async () => {
        if (cart.length === 0) {
            alert("Your bucket is empty!");
            return;
        }

        try {
            // Store the order in Firestore 'orders' collection
            await addDoc(collection(db, "orders"), {
                userId: user.uid,
                userName: user.name,
                items: cart,
                total: totalprice,
                createdAt: new Date()
            });

            alert("Order placed successfully! 🎉");
            setcart([]); // Clear the cart after placing order
        } catch (error) {
            console.error("Error saving order: ", error);
            alert("Failed to place order. Please try again.");
        }
    };
    
    // --- PREMIUM BUCKET LAYOUT ---
    return(
        <div style={{ padding: '30px 15px', fontFamily: '"Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#F8F9FA', minHeight: '70vh', display: 'flex', justifyContent: 'center' }}>
            
            <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '100%', maxWidth: '600px', height: 'fit-content' }}>
                
                <h2 style={{ color: '#E23744', borderBottom: '3px solid #eee', paddingBottom: '15px', marginTop: '0', fontSize: 'clamp(18px, 4vw, 24px)' }}>🛒 Hi, {user.name}!</h2>
                
                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <div style={{ fontSize: '50px', marginBottom: '15px' }}>🛒</div>
                        <h3 style={{ color: '#888' }}>Your bucket is totally empty!</h3>
                        <p style={{ color: '#aaa' }}>Go back to the menu and add some delicious pizza.</p>
                    </div>
                ) : (
                    <div>
                        {/* Table Header */}
                        <div style={{ display: 'flex', padding: '12px 10px', backgroundColor: '#FFF5F6', borderRadius: '10px', fontWeight: 'bold', color: '#E23744', marginBottom: '15px', fontSize: '14px' }}>
                            <div style={{ flex: '1', textAlign: 'center' }}>Qty</div>
                            <div style={{ flex: '2', paddingLeft: '10px' }}>Item</div>
                            <div style={{ flex: '1', textAlign: 'right' }}>Price</div>
                        </div>
                        
                        {/* Cart Items */}
                        {cart.map((item, index) => (
                            <div key={index} style={{ display: 'flex', padding: '12px 10px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
                                
                                {/* Quantity Column */}
                                <div style={{ flex: '1', textAlign: 'center' }}>
                                    <span style={{ fontWeight: 'bold', color: '#555', backgroundColor: '#f5f5f5', padding: '4px 10px', borderRadius: '5px', fontSize: '14px' }}>
                                        {item.quantity}
                                    </span>
                                </div>
                                
                                {/* Name Column */}
                                <div style={{ flex: '2', paddingLeft: '10px' }}>
                                    <span style={{ fontWeight: 'bold', color: '#333', fontSize: '16px' }}>{item.name}</span>
                                </div>
                                
                                {/* Price Column */}
                                <div style={{ flex: '1', textAlign: 'right' }}>
                                    <span style={{ fontWeight: 'bold', color: '#666', fontSize: '14px' }}>Rs. {item.price * item.quantity}</span>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                )}
                
                <div style={{ marginTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <button 
                        onClick={() => setcart([])} 
                        style={{ backgroundColor: 'white', color: '#E23744', border: '2px solid #E23744', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', fontFamily: 'inherit' }}
                    >
                        Clear Cart 🗑️
                    </button>

                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '14px', color: '#666' }}>Grand Total</span>
                        <h2 style={{ margin: '5px 0 0 0', color: '#E23744', fontSize: 'clamp(24px, 5vw, 32px)' }}>Rs. {totalprice}</h2>
                    </div>
                </div>

                {/* --- ORDER BUTTON --- */}
                {cart.length > 0 && (
                    <button 
                        onClick={handlePlaceOrder}
                        style={{ 
                            backgroundColor: '#b85d34',
                            color: 'white', 
                            border: 'none', 
                            padding: '15px', 
                            borderRadius: '8px', 
                            cursor: 'pointer', 
                            fontWeight: 'bold', 
                            width: '100%', 
                            fontSize: '16px', 
                            marginTop: '20px',
                            boxShadow: '0 4px 10px rgba(184, 93, 52, 0.3)',
                            fontFamily: 'inherit'
                        }}
                    >
                        Order Now 🍕
                    </button>
                )}

            </div>
        </div>
    );
}

export default Bucket;
