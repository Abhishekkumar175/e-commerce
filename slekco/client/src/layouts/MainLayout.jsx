import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/checkout' || location.pathname === '/cart' || location.pathname.startsWith('/product/');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
