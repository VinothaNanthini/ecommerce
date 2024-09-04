import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Chocolates.css';
import { useNavigate } from 'react-router-dom';

import ch1 from "../assets/Chocolate/ch (1).jpg";
import ch2 from "../assets/Chocolate/ch (2).jpg";
import ch3 from "../assets/Chocolate/ch (3).jpg";
import ch4 from "../assets/Chocolate/ch (4).jpg";
import ch5 from "../assets/Chocolate/ch (5).jpg";
import ch6 from "../assets/Chocolate/ch (6).jpg";
import ch7 from "../assets/Chocolate/ch (7).jpg";
import ch8 from "../assets/Chocolate/ch (8).jpg";
import ch9 from "../assets/Chocolate/ch (9).jpg";

function ChocolatePage({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); 
  const chocolates = [
    { id: 1, name: 'Dairy Milk', price: 299, image: ch1 },
    { id: 2, name: 'Kitkat', price: 399, image: ch2 },
    { id: 3, name: 'Ferro Rocher', price: 499, image: ch3 },
    { id: 4, name: 'Kinder Joy', price: 299, image: ch4 },
    { id: 5, name: '5 Star', price: 299, image: ch5 },
    { id: 6, name: 'Munch', price: 299, image: ch6 },
    { id: 7, name: 'Toblerone', price: 299, image: ch7 },
    { id: 8, name: 'Kisses', price: 299, image: ch8 },
    { id: 9, name: 'Galaxy', price: 299, image: ch9 },
  ];

  const filteredChocolates = chocolates.filter((chocolate) =>
    chocolate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (chocolate) => {
    const existingItem = cartItems.find((item) => item.id === chocolate.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === chocolate.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      navigate('/cart');
    } else {
      setCartItems([...cartItems, { ...chocolate, quantity: 1 }]);
    }

    console.log(cartItems);
  };

  return (
    <div className="chocolate-page container">
      {/* Search Bar */}
      <div className="search-bar input-group my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for chocolates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Chocolate Items Grid */}
      <div className="row">
        {filteredChocolates.map((chocolate) => (
          <div key={chocolate.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={chocolate.image}
                className="card-img-top"
                alt={chocolate.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{chocolate.name}</h5>
                <p className="card-text">Price: ₹{chocolate.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(chocolate)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChocolatePage;
