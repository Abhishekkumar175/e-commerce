import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold tracking-widest text-primary mb-6 inline-block">
              SLEKCO
            </Link>
            <p className="text-body text-sm">
              The premier destination for minimal, editorial, and high-end fashion and lifestyle products.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=fashion" className="text-sm text-secondary hover:text-primary transition-colors">Fashion</Link></li>
              <li><Link to="/shop?category=beauty" className="text-sm text-secondary hover:text-primary transition-colors">Beauty</Link></li>
              <li><Link to="/shop?category=accessories" className="text-sm text-secondary hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=jewelry" className="text-sm text-secondary hover:text-primary transition-colors">Jewelry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-sm text-secondary hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-secondary hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="text-sm text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-sm text-secondary hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Newsletter</h4>
            <p className="text-sm text-secondary mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col sm:flex-row gap-2 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-surface border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none"
                required
              />
              <button
                type="submit"
                className="bg-primary text-surface px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-black transition-colors rounded-none whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-secondary mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SLEKCO. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
