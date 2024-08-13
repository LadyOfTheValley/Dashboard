import React, { useState } from 'react';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState('');

    const addClient = () => {
        setClients([...clients, newClient]);
        setNewClient('');
    };

    return (
        <div>
            <h2>Clients</h2>
            <input
                type="text"
                value={newClient}
                onChange={(e) => setNewClient(e.target.value)}
                placeholder="Add new client"
            />
            <button onClick={addClient}>Add Client</button>
            <ul>
                {clients.map((client, index) => (
                    <li key={index}>{client}</li>
                ))}
            </ul>
        </div>
    );
};

export default Clients;
