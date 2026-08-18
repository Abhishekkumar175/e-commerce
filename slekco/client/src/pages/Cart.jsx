import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../store/cartSlice';
import { Trash2, ChevronRight, ArrowRight } from 'lucide-react';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, subtotal, shipping, total, totalQuantity } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-display font-bold text-primary mb-6">Your Bag is Empty</h1>
        <p className="text-secondary mb-10">Looks like you haven't added anything to your bag yet.</p>
        <Link to="/shop" className="inline-block bg-primary text-surface px-8 py-4 rounded-button font-medium uppercase tracking-wider hover:bg-black transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary mb-12">Your Bag ({totalQuantity})</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="w-full lg:w-2/3">
          <div className="border-t border-border">
            {items.map((item) => (
              <div key={item.product.id} className="py-8 border-b border-border flex flex-row gap-4 sm:gap-6">
                
                {/* Product Image */}
                <div className="w-24 sm:w-32 aspect-square bg-gray-100 rounded-card flex items-center justify-center text-secondary font-display uppercase flex-shrink-0">
                  {item.product.images && item.product.images.length > 0 ? (
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover rounded-card" />
                  ) : (
                    item.product.brand.charAt(0)
                  )}
                </div>
                
                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">{item.product.brand}</p>
                      <h3 className="text-lg font-medium text-primary"><Link to={`/product/${item.product.id}`}>{item.product.name}</Link></h3>
                    </div>
                    <p className="text-lg font-medium text-primary">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between items-end mt-6">
                    <div className="flex items-center border border-border h-10 rounded-button bg-surface">
                      <button 
                        onClick={() => dispatch(decreaseQuantity(item.product.id))}
                        className="px-3 h-full text-secondary hover:text-primary transition-colors"
                      >-</button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(increaseQuantity(item.product.id))}
                        className="px-3 h-full text-secondary hover:text-primary transition-colors"
                      >+</button>
                    </div>
                    
                    <button 
                      onClick={() => dispatch(removeFromCart(item.product.id))}
                      className="text-secondary hover:text-red-500 transition-colors flex items-center text-sm"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => dispatch(clearCart())}
              className="text-sm font-medium text-secondary hover:text-red-500 underline underline-offset-4"
            >
              Clear Bag
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-surface border border-border rounded-card p-6 md:p-8 sticky top-28">
            <h2 className="text-lg font-bold text-primary mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 border-b border-border pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-secondary">Subtotal</span>
                <span className="font-medium text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-secondary">Estimated Shipping</span>
                <span className="font-medium text-primary">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-primary">Total</span>
              <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
            
            <Link 
              to="/checkout" 
              className="w-full bg-primary text-surface py-4 rounded-button font-medium uppercase tracking-wider flex items-center justify-center hover:bg-black hover:shadow-premium-hover transition-all"
            >
              Checkout <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            {shipping > 0 && (
              <p className="text-xs text-secondary text-center mt-4">
                Spend ${(200 - subtotal).toFixed(2)} more to get free shipping.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
