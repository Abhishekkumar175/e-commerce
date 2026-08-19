import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star, ImageOff } from 'lucide-react';

const ProductCard = ({ product }) => {
  // Graceful fallbacks for missing data
  const name = product?.name || 'Unknown Product';
  const brand = product?.brand || 'Slekco';
  const price = typeof product?.price === 'number' ? product.price.toFixed(2) : '0.00';
  const rating = product?.rating || 0;
  const hasImage = product?.images && product.images.length > 0;

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4 rounded-card">
        <Link to={`/product/${product?.id}`} className="block w-full h-full">
          {hasImage ? (
             <img src={product.images[0]} alt={name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
             <div className="w-full h-full bg-surface group-hover:scale-105 transition-transform duration-700 flex flex-col items-center justify-center text-secondary text-sm">
               <ImageOff className="w-8 h-8 mb-2 opacity-50" />
               <span className="opacity-50 text-xs">No Image Available</span>
             </div>
          )}
        </Link>
        
        {/* Wishlist Icon */}
        <button 
          onClick={(e) => e.preventDefault()}
          className="absolute top-4 right-4 text-secondary hover:text-accent transition-colors z-10 bg-white/80 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 duration-300"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick Add Button Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button 
            onClick={(e) => {
              e.preventDefault();
              // dispatch(addToCart(...)) could be added here
            }}
            className="w-full bg-primary text-surface py-3 text-sm font-medium flex items-center justify-center space-x-2 rounded-button hover:bg-black transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-primary line-clamp-1"><Link to={`/product/${product?.id}`}>{name}</Link></h3>
          <p className="text-xs text-secondary mt-1 uppercase tracking-wider">{brand}</p>
          <div className="flex items-center mt-2 space-x-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-xs font-medium text-primary">{rating}</span>
          </div>
        </div>
        <p className="text-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
