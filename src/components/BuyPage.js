import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BuyPage.css';

function BuyPage() {
  return (
    <div className="buy-page container text-center">
      <h2>Purchase Successful!</h2>
      <div className="success-message">
        <span className="checkmark">✔</span>
        <p>Thank you for your purchase!</p>
      </div>
      <Link to="/" className="btn btn-success mt-4">
        Continue Shopping
      </Link>
    </div>
  );
}

export default BuyPage;