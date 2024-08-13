import React, { useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState('');

    const addOrder = () => {
        setOrders([...orders, newOrder]);
        setNewOrder('');
    };

    return (
        <div>
            <h2>Orders</h2>
            <input
                type="text"
                value={newOrder}
                onChange={(e) => setNewOrder(e.target.value)}
                placeholder="Add new order"
            />
            <button onClick={addOrder}>Add Order</button>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>{order}</li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
