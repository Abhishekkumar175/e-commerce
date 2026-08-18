import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import ProductCard from '../ui/ProductCard';

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // We only want to show max 4 trending products
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
        
        {status === 'loading' && <div className="text-center text-secondary py-10">Loading products...</div>}
        {status === 'failed' && <div className="text-center text-red-500 py-10">{error}</div>}
        
        {status === 'succeeded' && (
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
