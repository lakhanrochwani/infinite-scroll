import React from 'react';

const Product = ({ name, price, quantity }) => {
  return (
    <div className="product">
      <p>
        <strong>{name}</strong>
      </p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Product;
