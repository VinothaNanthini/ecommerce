import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import CakePage from '../src/components/Cakes';
import CartPage from '../src/components/CartPage';
import BuyPage from '../src/components/BuyPage';
import ChocolatesSpecial from '../src/components/Chocolates';
import HampersSpecial from '../src/components/Hampers';
import FlowersSpecial from '../src/components/Flowers';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutUs';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.id === item.id);
      if (itemExists) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cakes" element={<CakePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/chocolates" element={<ChocolatesSpecial />} />
        <Route path="/hampers" element={<HampersSpecial />} />
        <Route path="/flowers" element={<FlowersSpecial />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        
      </Routes>
    </Router>
  );
}

export default App;