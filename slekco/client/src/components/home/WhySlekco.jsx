import React from 'react';
import { Package, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const features = [
  {
    icon: <Package className="w-6 h-6 stroke-[1.5]" />,
    title: 'Curated Selection',
    description: 'Every product is hand-picked for quality, design, and durability.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
    title: 'Trusted Brands',
    description: 'We partner with the worlds most reputable designers and makers.'
  },
  {
    icon: <Truck className="w-6 h-6 stroke-[1.5]" />,
    title: 'Fast Delivery',
    description: 'Complimentary express shipping on all premium orders over $200.'
  },
  {
    icon: <RefreshCw className="w-6 h-6 stroke-[1.5]" />,
    title: 'Easy Returns',
    description: 'A seamless, hassle-free return policy within 30 days of purchase.'
  }
];

const WhySlekco = () => {
  return (
    <section className="py-24 bg-background">
      <ScrollReveal className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-title text-center mb-16">Why Slekco</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-primary mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-primary mb-3">{feature.title}</h3>
                <p className="text-body text-sm max-w-[250px] mx-auto">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default WhySlekco;
