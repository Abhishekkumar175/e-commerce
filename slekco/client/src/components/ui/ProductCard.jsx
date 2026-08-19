import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingBag, Heart, Star, ImageOff, Check } from 'lucide-react';
import { addToCart } from '../../store/cartSlice';
import { toggleWishlist } from '../../store/wishlistSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist?.items || []);
  const [isAdded, setIsAdded] = useState(false);
  
  const isWishlisted = wishlistItems.some(item => item.id === product?.id);
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
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (product) dispatch(toggleWishlist(product));
          }}
          className={`absolute top-4 right-4 transition-colors z-10 bg-white/80 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 duration-300 ${isWishlisted ? 'text-red-500 opacity-100' : 'text-secondary hover:text-accent'}`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add Button Overlay */}
        <div className={`absolute bottom-4 left-4 right-4 transition-opacity duration-300 z-10 ${isAdded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (product) {
                dispatch(addToCart({ product, quantity: 1 }));
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 2000);
              }
            }}
            disabled={isAdded || product?.stock === 0}
            className={`w-full py-3 text-sm font-medium flex items-center justify-center space-x-2 rounded-button transition-colors ${
              isAdded 
                ? 'bg-green-500 text-white'
                : product?.stock === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-primary text-surface hover:bg-black'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : product?.stock === 0 ? (
              <span>Out of Stock</span>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </>
            )}
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
