// Code used from Chat GPT
import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://picsum.photos/200/300' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://picsum.photos/200/300' },
    // Add more products as needed
];

const Catalog = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Catalog;
