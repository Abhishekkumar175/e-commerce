import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Placeholder Pages
const Home = () => <div className="container mx-auto px-4 py-20 text-center"><h1 className="text-hero mb-4">Slekco</h1><p className="text-body">Premium E-Commerce Experience</p></div>;
const Shop = () => <div className="container mx-auto px-4 py-20"><h1 className="text-title">Shop</h1></div>;
const Cart = () => <div className="container mx-auto px-4 py-20"><h1 className="text-title">Bag</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collections" element={<Shop />} />
          <Route path="brands" element={<Shop />} />
          <Route path="about" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
