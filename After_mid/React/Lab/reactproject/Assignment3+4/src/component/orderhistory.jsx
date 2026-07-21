import React, { useState, useEffect, useContext } from 'react';
import { cartcontext } from './cartcontext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

function OrderHistory() {
  const { user } = useContext(cartcontext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(
          collection(db, "orders"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const ordersList = [];
        querySnapshot.forEach((doc) => {
          ordersList.push({ id: doc.id, ...doc.data() });
        });
        
        // Sort orders in memory: newest first
        ordersList.sort((a, b) => {
          const dateA = a.createdAt?.seconds ? a.createdAt.seconds : 0;
          const dateB = b.createdAt?.seconds ? b.createdAt.seconds : 0;
          return dateB - dateA;
        });

        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  // Protect the route
  if (!user) {
    return (
      <div style={{ padding: '40px', fontFamily: '"Poppins", "Segoe UI", sans-serif', textAlign: 'center' }}>
        <h2 style={{ color: '#E23744' }}>Access Denied 🛑</h2>
        <h3>Please log in to view your order history!</h3>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ padding: '40px', fontFamily: '"Poppins", "Segoe UI", sans-serif', textAlign: 'center' }}>
        <h3>Loading your orders... 🍕</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#F8F9FA', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h2 style={{ color: '#E23744', borderBottom: '3px solid #E23744', paddingBottom: '10px', marginBottom: '30px', display: 'inline-block' }}>📜 Your Order History</h2>

        {orders.length === 0 ? (
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h3 style={{ color: '#888' }}>You haven't placed any orders yet!</h3>
            <p style={{ color: '#aaa' }}>Head over to the menu page to make your first order.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {orders.map((order) => (
              <div key={order.id} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderLeft: '6px solid #b85d34' }}>
                {/* Order Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                  <div>
                    <span style={{ color: '#888', fontSize: '14px', display: 'block' }}>Order ID: {order.id}</span>
                    <span style={{ fontWeight: 'bold', color: '#333' }}>
                      {order.createdAt?.seconds 
                        ? new Date(order.createdAt.seconds * 1000).toLocaleString() 
                        : 'Date not available'}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#888', fontSize: '14px', display: 'block' }}>Total Paid</span>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#E23744' }}>Rs. {order.total}</span>
                  </div>
                </div>

                {/* Ordered Items List */}
                <div>
                  <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Items Ordered:</h4>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {order.items?.map((item, index) => (
                      <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', color: '#666', fontSize: '15px' }}>
                        <span>
                          <strong style={{ color: '#b85d34' }}>{item.quantity}x</strong> {item.name}
                        </span>
                        <span>Rs. {item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
