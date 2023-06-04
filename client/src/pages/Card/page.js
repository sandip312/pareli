import React from 'react';
import '../styles/cartform.css';

const Card = ({ title, description, price }) => {
  const addToCart = () => {
    // Implement your add to cart logic here
    console.log('Item added to cart');
  };
 
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
      <button className="cart-button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;







