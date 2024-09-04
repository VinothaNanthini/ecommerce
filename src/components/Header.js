// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="home-link">
        <i className="fas fa-home"></i> Home
      </Link>
      <p className="page-note">Explore our exclusive hampers for every occasion!</p>
    </header>
  );
};

export default Header;
