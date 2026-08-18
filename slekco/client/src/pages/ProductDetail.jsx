import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, fetchProducts } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import { Star, ChevronRight, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { selectedProduct: product, items, status } = useSelector((state) => state.products);
  
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    dispatch(fetchProductById(id));
    // Fetch all products for 'Related Products' if not already loaded
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
    // Reset state on ID change
    setQuantity(1);
    setIsAdded(false);
    window.scrollTo(0, 0);
  }, [id, dispatch, items.length]);

  const handleQuantityChange = (type) => {
    if (type === 'dec' && quantity > 1) setQuantity(q => q - 1);
    if (type === 'inc' && quantity < product.stock) setQuantity(q => q + 1);
  };

  const handleAddToBag = () => {
    dispatch(addToCart({ product, quantity }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  if (status === 'loading' && !product) return <div className="py-32 text-center text-secondary">Loading product details...</div>;
  if (status === 'failed' && !product) return <div className="py-32 text-center text-red-500">Error loading product</div>;
  if (!product) return null;

  // Filter out the current product to get related products
  const relatedProducts = items.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-secondary mb-10">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="capitalize">{product.category}</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary font-medium">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
        
        {/* Image Gallery (Left) */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[3/4] bg-gray-100 rounded-card flex items-center justify-center text-secondary mb-4 overflow-hidden shadow-sm">
            {/* Elegant Placeholder */}
            {product.id === '3' || product.id === '1' ? (
               // If it's the hero product or related, use the image we generated earlier
               <img src="/hero_editorial_product.jpg" alt={product.name} className="w-full h-full object-cover object-center" />
            ) : (
               <div className="text-2xl font-display uppercase tracking-widest">{product.brand}</div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[1, 2, 3, 4].map(thumb => (
                <div key={thumb} className="aspect-square bg-gray-50 rounded-card flex items-center justify-center text-xs text-gray-300 border border-border cursor-pointer hover:border-primary transition-colors">
                  Thumb
                </div>
             ))}
          </div>
        </div>

        {/* Product Information (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">{product.brand}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-sm text-secondary">({product.rating} Rating)</span>
          </div>
          
          <p className="text-2xl font-medium text-primary mb-8">${product.price.toFixed(2)}</p>
          
          <p className="text-body mb-8 leading-relaxed">
            {product.description}
          </p>

          <p className="text-sm text-green-600 font-medium mb-6 flex items-center">
             <ShieldCheck className="w-4 h-4 mr-2" /> In Stock ({product.stock} available)
          </p>

          {/* Add to Bag Actions */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center border border-border h-12 rounded-button bg-surface">
              <button 
                onClick={() => handleQuantityChange('dec')}
                className="px-4 h-full text-secondary hover:text-primary transition-colors"
                disabled={quantity <= 1}
              >-</button>
              <span className="w-8 text-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('inc')}
                className="px-4 h-full text-secondary hover:text-primary transition-colors"
                disabled={quantity >= product.stock}
              >+</button>
            </div>
            
            <button 
              onClick={handleAddToBag}
              className={`flex-1 h-12 rounded-button font-medium uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center ${isAdded ? 'bg-green-600 text-white' : 'bg-primary text-surface hover:bg-black hover:shadow-premium-hover'}`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Added to your bag
                </>
              ) : (
                'Add to Bag'
              )}
            </button>
          </div>

          {/* Shipping & Returns */}
          <div className="border-t border-border pt-8 space-y-6">
            <div className="flex items-start">
              <Truck className="w-5 h-5 text-primary mt-0.5 mr-4" />
              <div>
                <h4 className="text-sm font-semibold text-primary mb-1">Free Express Shipping</h4>
                <p className="text-sm text-secondary">Complimentary shipping on all orders over $200. Delivers in 2-3 business days.</p>
              </div>
            </div>
            <div className="flex items-start">
              <RefreshCw className="w-5 h-5 text-primary mt-0.5 mr-4" />
              <div>
                <h4 className="text-sm font-semibold text-primary mb-1">30-Day Easy Returns</h4>
                <p className="text-sm text-secondary">We offer a seamless, hassle-free return policy within 30 days of purchase.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-border pt-20">
          <h2 className="text-title mb-10 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
