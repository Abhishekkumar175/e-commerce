import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MessageCircle, Share2 } from 'lucide-react';

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
              <li><Link to="/shop?category=new" className="text-sm text-secondary hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?category=clothing" className="text-sm text-secondary hover:text-primary transition-colors">Clothing</Link></li>
              <li><Link to="/shop?category=accessories" className="text-sm text-secondary hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=sale" className="text-sm text-secondary hover:text-primary transition-colors">Sale</Link></li>
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
              <Camera className="h-5 w-5" />
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
