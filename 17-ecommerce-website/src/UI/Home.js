import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartOverlay from './components/CartOverlay';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <CartOverlay />
    </>
  );
};

export default Home;
