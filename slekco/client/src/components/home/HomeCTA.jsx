import React from 'react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490168013280-77983679c13b?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Lifestyle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 text-white" style={{ color: 'white' }}>
          Find your next favorite.
        </h2>
        <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg font-light">
          Join the exclusive Slekco community and get early access to drops, collaborations, and curated essentials.
        </p>
        
        <div className="flex justify-center mt-8">
          <Link to="/shop" className="bg-white text-primary px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gray-200 transition-colors">
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
