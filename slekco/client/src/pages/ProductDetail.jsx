import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, fetchProducts } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import { Star, ChevronRight, Check, ShieldCheck, Truck, RefreshCw, AlertCircle, RotateCw } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

import PageTransition from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const product = items.find(p => p.id === id);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
    // Also fetch specific product if we want to ensure full data
    dispatch(fetchProductById(id));
    // Reset state on ID change
    setSelectedImage(0);
    setIsAdded(false);
    window.scrollTo(0, 0);
  }, [id, dispatch, status]);

  const handleAddToBag = () => {
    if (product) {
      dispatch(addToCart({
        product: product,
        quantity: 1
      }));
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  if (status === 'loading' && !product) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-48 mb-10"></div>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 aspect-[3/4] bg-gray-200 rounded-card"></div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
              <div className="h-24 bg-gray-200 rounded w-full mb-8"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (status === 'failed' && !product) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center max-w-lg text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
          <h1 className="text-3xl font-display font-bold text-primary mb-4">Product Not Found</h1>
          <p className="text-secondary mb-8">The product you're looking for couldn't be loaded or doesn't exist.</p>
          <button 
            onClick={() => dispatch(fetchProductById(id))}
            className="flex items-center justify-center space-x-2 bg-primary text-surface px-8 py-4 rounded-button font-medium uppercase tracking-wider hover:bg-black transition-colors w-full"
          >
            <RotateCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      </PageTransition>
    );
  }

  if (!product) return null;

  // Filter out the current product to get related products
  const relatedProducts = items.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <PageTransition>
      <SEO 
        title={product.name} 
        description={product.description.substring(0, 150)} 
        type="product" 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-10 text-secondary">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-primary transition-colors capitalize">{product.category}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-primary truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] bg-gray-100 mb-4 rounded-card overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-gray-100 rounded-card overflow-hidden border-2 ${selectedImage === idx ? 'border-primary' : 'border-transparent'}`}
                    aria-label={`View ${product.name} image ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">{product.brand}</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'fill-primary text-primary' : 'fill-border text-border'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-secondary">({product.rating} Reviews)</span>
            </div>

            <p className="text-3xl font-medium text-primary mb-8">${product.price.toFixed(2)}</p>
            
            <p className="text-body mb-10">{product.description}</p>
            
            <p className="text-sm text-secondary mb-6 flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></span>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>

            <button 
              onClick={handleAddToBag}
              disabled={product.stock === 0}
              className={`w-full py-4 text-sm font-medium uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 rounded-button ${
                isAdded 
                  ? 'bg-green-500 text-white' 
                  : product.stock === 0 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-surface hover:bg-black hover:shadow-premium-hover'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <span>Add to Bag</span>
              )}
            </button>

            {/* Value Props */}
            <div className="mt-12 space-y-4 border-t border-border pt-8">
              <div className="flex items-center text-sm text-secondary">
                <Truck className="w-5 h-5 mr-3" />
                <span>Free worldwide shipping on orders over $200</span>
              </div>
              <div className="flex items-center text-sm text-secondary">
                <RefreshCw className="w-5 h-5 mr-3" />
                <span>Free 30-day returns</span>
              </div>
              <div className="flex items-center text-sm text-secondary">
                <ShieldCheck className="w-5 h-5 mr-3" />
                <span>2-year extended warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-16">
            <h2 className="text-2xl font-display font-bold text-primary mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default ProductDetail;
