import React from 'react';

import './App.css';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/navBar/navBar';
import { ProductCard } from './components/productCard/productCard';
import { ProductCardAuction } from './components/productCardAuction/productCardAuction';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ProductCardAuction />
      <ProductCard />
      <Footer />
      
    </div>
  );
}

export default App;
