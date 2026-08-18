import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { clearCart } from '../store/cartSlice';
import { CheckCircle, AlertCircle } from 'lucide-react';

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
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-display font-bold text-primary mb-6">Your Bag is Empty</h1>
        <Link to="/shop" className="inline-block bg-primary text-surface px-8 py-4 rounded-button font-medium uppercase tracking-wider hover:bg-black transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-32 text-center max-w-lg">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
        <h1 className="text-4xl font-display font-bold text-primary mb-4">Order Confirmed</h1>
        <p className="text-secondary mb-8 leading-relaxed">
          Thank you for your purchase, {formData.name.split(' ')[0]}. We've sent a confirmation email to {formData.email}.
        </p>
        <p className="text-sm text-gray-400">Redirecting to homepage...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-primary mb-12">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Form Section */}
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            
            <div>
              <h2 className="text-lg font-bold text-primary mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-surface border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} px-4 py-3 text-sm focus:outline-none transition-colors`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <div className="flex items-center text-red-500 text-xs mt-2 font-medium">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-surface border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} px-4 py-3 text-sm focus:outline-none transition-colors`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center text-red-500 text-xs mt-2 font-medium">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-surface border ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} px-4 py-3 text-sm focus:outline-none transition-colors`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <div className="flex items-center text-red-500 text-xs mt-2 font-medium">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                    </div>
                  )}
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="text-lg font-bold text-primary mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Address */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">Street Address</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full bg-surface border ${errors.address ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} px-4 py-3 text-sm focus:outline-none transition-colors`}
                    placeholder="123 Slekco Ave, Suite 100"
                  />
                  {errors.address && (
                    <div className="flex items-center text-red-500 text-xs mt-2 font-medium">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.address}
                    </div>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">City</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full bg-surface border ${errors.city ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} px-4 py-3 text-sm focus:outline-none transition-colors`}
                    placeholder="New York"
                  />
                  {errors.city && (
                    <div className="flex items-center text-red-500 text-xs mt-2 font-medium">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.city}
                    </div>
                  )}
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">Postal Code</label>
                  <input 
                    type="text" 
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={`w-full bg-surface border ${errors.postalCode ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'} px-4 py-3 text-sm focus:outline-none transition-colors`}
                    placeholder="10001"
                  />
                  {errors.postalCode && (
                    <div className="flex items-center text-red-500 text-xs mt-2 font-medium">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.postalCode}
                    </div>
                  )}
                </div>

              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary text-surface py-4 rounded-button font-medium uppercase tracking-wider hover:bg-black hover:shadow-premium-hover transition-all mt-8"
            >
              Complete Order
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-2/5">
          <div className="bg-gray-50 rounded-card p-6 md:p-8 sticky top-28 border border-border">
            <h2 className="text-lg font-bold text-primary mb-6">In Your Bag</h2>
            
            <div className="space-y-4 mb-8">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary line-clamp-1">{item.product.name}</p>
                    <p className="text-xs text-secondary mt-1">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium text-primary">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-border pt-6 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-secondary">Subtotal</span>
                <span className="font-medium text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-secondary">Shipping</span>
                <span className="font-medium text-primary">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-border pt-6">
              <span className="text-lg font-bold text-primary">Total</span>
              <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
