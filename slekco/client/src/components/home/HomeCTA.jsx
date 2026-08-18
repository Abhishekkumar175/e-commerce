import React from 'react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
  return (
    <section className="py-32 bg-primary text-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
          Find your next favorite.
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg">
          Join the exclusive Slekco community and get early access to drops, collaborations, and curated essentials.
        </p>
        <Link to="/shop" className="bg-surface text-primary px-8 py-4 font-medium uppercase tracking-wider rounded-button hover:bg-gray-100 transition-colors inline-block">
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default HomeCTA;
