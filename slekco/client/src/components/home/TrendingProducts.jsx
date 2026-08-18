import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import ProductCard from '../ui/ProductCard';
import ProductSkeleton from '../ui/ProductSkeleton';
import { AlertCircle, RotateCw } from 'lucide-react';

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleRetry = () => {
    dispatch(fetchProducts());
  };

  const trendingProducts = items.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-title">Trending Now</h2>
          <Link to="/shop" className="text-sm font-medium text-secondary hover:text-primary transition-colors underline underline-offset-4">
            View All
          </Link>
        </div>
        
        {status === 'loading' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(n => <ProductSkeleton key={n} />)}
          </div>
        )}

        {status === 'failed' && (
          <div className="flex flex-col items-center justify-center py-20 bg-surface border border-border rounded-card">
            <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-lg font-medium text-primary mb-2">Something went wrong</h3>
            <p className="text-sm text-secondary mb-6">{error || 'Failed to load trending products.'}</p>
            <button onClick={handleRetry} className="flex items-center space-x-2 bg-primary text-surface px-6 py-3 rounded-button hover:bg-black transition-colors text-sm font-medium">
              <RotateCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        )}
        
        {status === 'succeeded' && trendingProducts.length === 0 && (
          <div className="text-center py-20 bg-surface border border-border rounded-card">
            <h3 className="text-lg font-medium text-primary mb-2">No products found</h3>
            <p className="text-sm text-secondary">Check back soon for new arrivals.</p>
          </div>
        )}

        {status === 'succeeded' && trendingProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
