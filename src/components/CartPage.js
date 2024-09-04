import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage({ cartItems, updateQuantity }) {
  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, parseInt(newQuantity, 10));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>Price: ₹{item.price}</p>
                  <div>
                    <label>Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <h3>Total: ₹{calculateTotal()}</h3>
          </div>
          <Link to="/buy" className="btn btn-primary mt-4">
            Buy Now
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPage;