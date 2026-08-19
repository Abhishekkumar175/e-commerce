import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import PageTransition from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  return (
    <PageTransition>
      <SEO title="Wishlist" description="Your saved items" />
      <div className="container mx-auto px-4 py-12 lg:py-20 min-h-[60vh]">
        <h1 className="text-4xl font-display font-bold text-primary mb-10 text-center uppercase tracking-widest">
          Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-secondary mb-8">You haven't saved any items yet.</p>
            <Link 
              to="/shop"
              className="bg-primary text-surface px-8 py-4 rounded-button font-medium uppercase tracking-wider hover:bg-black transition-colors"
            >
              Explore Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Wishlist;
