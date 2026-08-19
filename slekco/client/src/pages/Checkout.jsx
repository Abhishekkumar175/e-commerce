import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { clearCart } from '../store/cartSlice';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

import PageTransition from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

const Checkout = () => {
  const { items, subtotal, shipping, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (simple format check)
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone) || formData.phone.length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // Postal Code validation
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    } else if (formData.postalCode.length < 4) {
      newErrors.postalCode = 'Please enter a valid postal code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call and success
      setIsSuccess(true);
      setTimeout(() => {
        dispatch(clearCart());
        navigate('/');
      }, 4000);
    }
  };

  if (items.length === 0 && !isSuccess) {
    return (
      <PageTransition>
        <SEO title="Checkout" description="Securely complete your purchase." />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-display font-bold text-primary mb-6">Your Bag is Empty</h1>
          <Link to="/shop" className="inline-block bg-primary text-surface px-8 py-4 rounded-button font-medium uppercase tracking-wider hover:bg-black transition-colors">
            Return to Shop
          </Link>
        </div>
      </PageTransition>
    );
  }

  if (isSuccess) {
    return (
      <PageTransition>
        <SEO title="Order Confirmed" description="Thank you for your purchase." />
        <div className="container mx-auto px-4 py-32 text-center max-w-lg">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl font-display font-bold text-primary mb-4">Order Confirmed</h1>
          <p className="text-secondary mb-8 leading-relaxed">
            Thank you for your purchase, {formData.name.split(' ')[0]}. We've sent a confirmation email to {formData.email}.
          </p>
          <p className="text-sm text-gray-400">Redirecting to homepage...</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO title="Checkout" description="Securely complete your purchase." />
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 bg-background">
        
        <div className="w-full max-w-5xl bg-surface border border-border shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] max-h-[750px]">
          
          {/* Form Section (Left) */}
          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center text-secondary hover:text-primary transition-colors text-xs font-medium uppercase tracking-wider mb-6 w-max"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </button>
            <h1 className="text-2xl font-display font-bold text-primary mb-6">Checkout</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col flex-grow justify-between" noValidate>
              <div className="space-y-6">
                
                {/* Contact Information */}
                <div>
                  <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="col-span-1 md:col-span-2">
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-border'} px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors`}
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-border'} px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors`}
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className={`w-full bg-background border ${errors.phone ? 'border-red-500' : 'border-border'} px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors`}
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="pt-2">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="col-span-1 md:col-span-2">
                      <input 
                        type="text" name="address" value={formData.address} onChange={handleChange}
                        className={`w-full bg-background border ${errors.address ? 'border-red-500' : 'border-border'} px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors`}
                        placeholder="Street Address"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" name="city" value={formData.city} onChange={handleChange}
                        className={`w-full bg-background border ${errors.city ? 'border-red-500' : 'border-border'} px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors`}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <input 
                        type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}
                        className={`w-full bg-background border ${errors.postalCode ? 'border-red-500' : 'border-border'} px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors`}
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  type="submit" 
                  className="w-full bg-primary text-surface py-3 rounded-none font-medium uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Complete Order
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Section (Right) */}
          <div className="w-full md:w-2/5 bg-gray-50 p-6 md:p-8 border-l border-border flex flex-col">
            <h2 className="text-lg font-bold text-primary mb-6">In Your Bag</h2>
            
            <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 space-y-4 mb-6">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary line-clamp-1">{item.product.name}</p>
                    <p className="text-xs text-secondary mt-1">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-primary">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <div className="space-y-3 border-t border-border pt-4 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Subtotal</span>
                  <span className="font-medium text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Shipping</span>
                  <span className="font-medium text-primary">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t border-border pt-4">
                <span className="text-base font-bold text-primary uppercase tracking-wider">Total</span>
                <span className="text-xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Checkout;
