import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4 rounded-card">
        {/* Placeholder image block */}
        <div className="w-full h-full bg-surface group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-secondary text-sm">
           {product.name.charAt(0)}
        </div>
        
        {/* Wishlist Icon */}
        <button className="absolute top-4 right-4 text-secondary hover:text-accent transition-colors z-10 bg-white/80 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 duration-300">
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick Add Button Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="w-full bg-primary text-surface py-3 text-sm font-medium flex items-center justify-center space-x-2 rounded-button hover:bg-black transition-colors">
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-primary"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
          <p className="text-xs text-secondary mt-1 uppercase tracking-wider">{product.brand}</p>
          <div className="flex items-center mt-2 space-x-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-xs font-medium text-primary">{product.rating}</span>
          </div>
        </div>
        <p className="text-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
