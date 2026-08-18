import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalQuantity } = useSelector((state) => state.cart);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Brands', path: '/brands' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu} className="text-primary hover:text-secondary transition-colors p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:relative left-0 pointer-events-none md:pointer-events-auto">
            <Link to="/" className="text-2xl font-display font-bold tracking-widest text-primary pointer-events-auto">
              SLEKCO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <Link to="/shop" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Shop</Link>
            <Link to="/collections" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Collections</Link>
            <Link to="/brands" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Brands</Link>
            <Link to="/about" className="text-sm font-medium text-secondary hover:text-primary transition-colors">About</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 z-10 bg-surface md:bg-transparent">
            <button className="text-primary hover:text-secondary transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="text-primary hover:text-secondary transition-colors flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline-block text-sm font-medium">Bag {totalQuantity > 0 ? `(${totalQuantity})` : ''}</span>
              {/* Mobile total quantity dot */}
              <span className="sm:hidden text-xs font-medium">
                {totalQuantity > 0 ? `(${totalQuantity})` : ''}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-border shadow-premium overflow-y-auto max-h-[calc(100vh-5rem)]">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-4 text-base font-medium text-primary border-b border-border hover:bg-gray-50 transition-colors uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
