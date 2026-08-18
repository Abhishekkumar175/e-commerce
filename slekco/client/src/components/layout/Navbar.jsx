import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Brands', path: '/brands' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="text-primary hover:text-secondary focus:outline-none transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start lg:flex-none">
            <Link to="/" className="text-2xl font-display font-bold tracking-widest text-primary">
              SLEKCO
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-primary hover:text-secondary transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center justify-end space-x-6 lg:flex-none">
            <button className="text-primary hover:text-secondary transition-colors hidden sm:flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider hidden lg:block">Search</span>
            </button>
            <button className="text-primary hover:text-secondary transition-colors sm:hidden">
               <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="group flex items-center p-2 -m-2">
              <ShoppingBag className="flex-shrink-0 h-5 w-5 text-primary group-hover:text-secondary transition-colors" aria-hidden="true" />
              <span className="ml-2 text-sm font-medium text-primary group-hover:text-secondary transition-colors hidden sm:block uppercase tracking-wider">Bag (0)</span>
              {/* Mobile cart badge indicator if items exist */}
              <span className="absolute top-4 right-4 sm:hidden bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
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
