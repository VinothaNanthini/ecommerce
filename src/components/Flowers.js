import React, { useState } from 'react';
import '../styles/Flowers.css';
import { useNavigate } from 'react-router-dom';
import b1 from "../assets/BOUQUET/b1.jpg";
import b2 from "../assets/BOUQUET/b2.jpg";
import b3 from "../assets/BOUQUET/b3.jpg";
import b4 from "../assets/BOUQUET/b4.jpg";
import b5 from "../assets/BOUQUET/b5.jpg";
import b6 from "../assets/BOUQUET/b6.jpg";
import b7 from "../assets/BOUQUET/b7.jpg";
import b8 from "../assets/BOUQUET/b8.jpg";
import b9 from "../assets/BOUQUET/b9.jpg";

const BouquetsPage = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); 

  const bouquets = [
    { id: 1, name: 'Bouquet 1', price: 299, image: b1 },
    { id: 2, name: 'Bouquet 2', price: 399, image: b2 },
    { id: 3, name: 'Bouquet 3', price: 499, image: b3 },
    { id: 4, name: 'Bouquet 4', price: 299, image: b4 },
    { id: 5, name: 'Bouquet 5', price: 299, image: b5 },
    { id: 6, name: 'Bouquet 6', price: 299, image: b6 },
    { id: 7, name: 'Bouquet 7', price: 299, image: b7 },
    { id: 8, name: 'Bouquet 8', price: 299, image: b8 },
    { id: 9, name: 'Bouquet 9', price: 299, image: b9 },
  ];

  const handleAddToCart = (bouquet) => {
    const existingItem = cartItems.find((item) => item.id === bouquet.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === bouquet.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      navigate('/cart');
    } else {
      setCartItems([...cartItems, { ...bouquet, quantity: 1 }]);
    }

    if (addToCart) {
      addToCart(bouquet);
    }
  };

  return (
    <div className="bouquet-page">
      <header className="header">
        <h1>Bouquets</h1>
        <p>Indulge in our beautiful bouquets</p>
      </header>

      <div className="items-grid">
        {bouquets.map((bouquet) => (
          <div className="item" key={bouquet.id}>
            <img src={bouquet.image} alt={bouquet.name} />
            <p>{bouquet.name} <span>Starting ₹{bouquet.price}</span></p>
            <button onClick={() => handleAddToCart(bouquet)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <footer className="footer">
        <h2>Order now and brighten someone's day!</h2>
        <p>#BouquetsLove</p>
      </footer>
    </div>
  );
};

export default BouquetsPage;
