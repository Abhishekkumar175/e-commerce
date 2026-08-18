import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';

const trendingProducts = [
  { id: '1', name: 'Minimalist Leather Tote', brand: 'Atelier', price: 295.00 },
  { id: '2', name: 'Ceramic Pour-Over Set', brand: 'Kinto', price: 65.00 },
  { id: '3', name: 'Eau de Parfum - Signature', brand: 'Aethel', price: 140.00 },
  { id: '4', name: 'Noise-Cancelling Over-Ears', brand: 'Aura', price: 350.00 },
];

const TrendingProducts = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-title">Trending Now</h2>
          <Link to="/shop" className="text-sm font-medium text-secondary hover:text-primary transition-colors underline underline-offset-4">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
