import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import cakes from '../assets/home/cake.jpg';
import Chocolates from '../assets/home/c.jpg';
import Flowers from '../assets/home/bouquet.jpg';
import Hampers from '../assets/home/ham1.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-logo">
          <h1><center>SURPRISES</center></h1>
        </div>
        <div className="app-bar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/buy">Buy</Link>
        </div>
      </header>

      <div className="carousel">
        <img src={cakes} alt="1" />
        <img src={Chocolates} alt="2" />
        <img src={Hampers} alt="3" />
        <img src={Flowers} alt="4" />
      </div>

      <section className="offers-section">
        <h2>FRESH SURPRISES</h2>
        <p>For Precious Moments</p>
      </section>

      <section className="categories">
        <div className="category-item">
          <Link to="/cakes">
            <img src={cakes} alt="Cake " />
            <p>Cakes</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/chocolates">
            <img src={Chocolates} alt="Chocolates" />
            <p>Chocolates</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/hampers">
            <img src={Hampers} alt="Hampers" />
            <p>Hampers</p>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/flowers">
            <img src={Flowers} alt="Flowers" />
            <p>Bouquet</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;