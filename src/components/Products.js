import React, { useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('');

    const addProduct = () => {
        setProducts([...products, newProduct]);
        setNewProduct('');
    };

    return (
        <div>
            <h2>Products</h2>
            <input
                type="text"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                placeholder="Add new product"
            />
            <button onClick={addProduct}>Add Product</button>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
