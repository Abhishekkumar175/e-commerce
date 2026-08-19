import React from 'react';
import SEO from '../components/ui/SEO';

const Shipping = () => {
  return (
    <main className="pt-24 pb-16 min-h-[70vh] bg-background">
      <SEO title="Shipping & Returns | SLEKCO" description="Information about our shipping rates, delivery times, and return policies." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-primary mb-12 text-center">Shipping & Returns</h1>
        
        <div className="prose prose-sm md:prose-base max-w-none text-secondary">
          <h3 className="text-xl font-medium text-primary mt-8 mb-4">Shipping Options</h3>
          <p className="mb-6">We offer standard, expedited, and overnight shipping options. Standard shipping is complimentary on all domestic orders over $200. Please allow 1-2 business days for order processing before your items are shipped.</p>
          
          <h3 className="text-xl font-medium text-primary mt-8 mb-4">International Delivery</h3>
          <p className="mb-6">We ship to over 100 countries worldwide. International shipping rates are calculated at checkout based on destination and package weight. Please note that customers are responsible for any import duties and taxes.</p>

          <h3 className="text-xl font-medium text-primary mt-8 mb-4">Returns & Exchanges</h3>
          <p className="mb-6">Items purchased directly from Slekco may be returned within 30 days of delivery. All returned items must be in their original, unworn condition with tags attached. A $10 restocking fee applies to all returns, which will be deducted from your refund.</p>
        </div>
      </div>
    </main>
  );
};

export default Shipping;
