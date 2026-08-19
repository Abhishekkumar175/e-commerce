import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainLayout from '../../layouts/MainLayout.jsx';

// Lazy loaded pages
const Home = lazy(() => import('../../pages/Home.jsx'));
const Shop = lazy(() => import('../../pages/Shop.jsx'));
const ProductDetail = lazy(() => import('../../pages/ProductDetail.jsx'));
const Cart = lazy(() => import('../../pages/Cart.jsx'));
const Checkout = lazy(() => import('../../pages/Checkout.jsx'));
const FAQ = lazy(() => import('../../pages/FAQ.jsx'));
const Shipping = lazy(() => import('../../pages/Shipping.jsx'));
const Contact = lazy(() => import('../../pages/Contact.jsx'));
const Terms = lazy(() => import('../../pages/Terms.jsx'));
const Wishlist = lazy(() => import('../../pages/Wishlist.jsx'));
const Collections = lazy(() => import('../../pages/Collections.jsx'));
const Brands = lazy(() => import('../../pages/Brands.jsx'));
const About = lazy(() => import('../../pages/About.jsx'));

// Simple loading fallback
const PageLoader = () => (
  <div className="w-full h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="collections" element={<Collections />} />
            <Route path="brands" element={<Brands />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AnimatedRoutes;
