// Code used from Chat GPT
import React from 'react';

const Product = ({ name, price, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  );
};

export default Product;
