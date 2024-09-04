// src/components/HampersPage.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hampers.css';
import Header from './Header'; // Import the Header component
import { useNavigate } from 'react-router-dom';
// Importing Hamper Images
import f1 from "../assets/HAMPERS/f1.jpg";
import f2 from "../assets/HAMPERS/f2.jpg";
import f3 from "../assets/HAMPERS/f3.jpg";
import f4 from "../assets/HAMPERS/f4.jpg";
import f5 from "../assets/HAMPERS/f5.jpg";
import f6 from "../assets/HAMPERS/f6.jpg";
import f7 from "../assets/HAMPERS/f7.jpg";
import f8 from "../assets/HAMPERS/f8.jpg";
import f9 from "../assets/HAMPERS/f9.jpg";

function HampersPage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); 
  const hampers = [
    { id: 1, name: 'Festive Hamper', price: 499, image: f1 }, 
    { id: 4, name: 'Premium Hamper', price: 799, image: f4 },
    { id: 3, name: 'Classic Hamper', price: 699, image: f3 },
    { id: 7, name: 'Special Hamper', price: 1099, image: f7 },
    { id: 5, name: 'Luxury Hamper', price: 899, image: f5 },
    { id: 6, name: 'Elegance Hamper', price: 999, image: f6 },
    { id: 2, name: 'Deluxe Hamper', price: 599, image: f2 },
    { id: 8, name: 'Gourmet Hamper', price: 1199, image: f8 },
    { id: 9, name: 'Exclusive Hamper', price: 1299, image: f9 },
  ];

  const filteredHampers = hampers.filter((hamper) =>
    hamper.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (hamper) => {
    const existingItem = cartItems.find((item) => item.id === hamper.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === hamper.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      navigate('/cart');
    } else {
      setCartItems([...cartItems, { ...hamper, quantity: 1 }]);
    }

    if (addToCart) {
      addToCart(hamper);
    }

    console.log('Cart Items:', cartItems);
  };

  return (
    <div className="hampers-page container my-5">
      <Header /> {/* Include the Header component */}

      <h1 className="text-center mb-4">Our Exclusive Hampers</h1>
      
      {/* Search Bar */}
      <div className="search-bar input-group mb-5 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search for hampers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
  
      {/* Hampers Grid */}
      <div className="row">
        {filteredHampers.map((hamper) => (
          <div key={hamper.id} className="col-md-4 mb-4">
            <div className="card hamper-item">
              <img
                src={hamper.image}
                className="card-img-top"
                alt={hamper.name}
              />
              <div className="card-body">
                <h5 className="card-title">{hamper.name}</h5>
                <p className="card-text">Price: ₹{hamper.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(hamper)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Cart Summary (optional) */}
      <div className="cart-summary mt-5">
        <h2>Cart Summary</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} (₹{item.price}) - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HampersPage;
