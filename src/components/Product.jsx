import React from 'react';

const Product = ({ index, name, price, quantity }) => {
  return (
    <div className="product">
      <p>
        <strong>{name} - {index}</strong>
      </p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Product;
