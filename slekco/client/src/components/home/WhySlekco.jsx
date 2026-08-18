import React from 'react';
import { Truck, Shield, RefreshCw } from 'lucide-react';

const WhySlekco = () => {
  return (
    <section className="border-b border-border bg-surface py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <Truck className="w-5 h-5 text-primary mb-3" />
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Complimentary Shipping</h3>
            <p className="text-xs text-secondary">On all orders over $150</p>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <Shield className="w-5 h-5 text-primary mb-3" />
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Secure Checkout</h3>
            <p className="text-xs text-secondary">Encrypted payment processing</p>
          </div>
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <RefreshCw className="w-5 h-5 text-primary mb-3" />
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Easy Returns</h3>
            <p className="text-xs text-secondary">30-day return policy</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySlekco;
