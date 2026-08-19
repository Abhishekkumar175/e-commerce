import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

const brands = [
  {
    id: 'atelier',
    name: 'Atelier',
    tagline: 'Timeless Leather Goods',
    description: 'Atelier represents the pinnacle of modern leather craftsmanship. Each piece is hand-stitched using sustainably sourced materials to ensure it ages beautifully over time.',
  },
  {
    id: 'lumina',
    name: 'Lumina',
    tagline: 'Refined Wardrobe Essentials',
    description: 'Lumina strips back the unnecessary to focus on pure form and superior fabrics. Their garments are designed to be the foundation of a sophisticated, minimalist wardrobe.',
  },
  {
    id: 'aethel',
    name: 'Aethel',
    tagline: 'Modern Fine Jewelry',
    description: 'Combining classic techniques with architectural forms, Aethel creates delicate yet striking jewelry pieces that make a quiet statement.',
  },
  {
    id: 'kinto',
    name: 'Kinto',
    tagline: 'Balance in the Home',
    description: 'Drawing inspiration from Japanese design philosophies, Kinto creates home goods that foster a sense of presence and tranquility in everyday routines.',
  },
  {
    id: 'void',
    name: 'Void',
    tagline: 'Minimalist Tech Accessories',
    description: 'Void believes that technology should blend seamlessly into your environment. Their accessories are characterized by matte finishes, clean lines, and intuitive functionality.',
  },
  {
    id: 'aura',
    name: 'Aura',
    tagline: 'Elevated Botanical Care',
    description: 'Aura harnesses the power of pure botanicals to create skincare and fragrances that elevate your daily self-care rituals.',
  }
];

const Brands = () => {
  return (
    <PageTransition>
      <SEO title="Brands" description="Discover our premium partner brands." />
      
      {/* Header */}
      <div className="bg-surface py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 uppercase tracking-widest">
            Our Brands
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            We partner with independent designers and established houses who share our uncompromising commitment to minimalism, quality, and sustainable craftsmanship.
          </p>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {brands.map((brand) => (
            <div key={brand.id} className="group bg-white p-8 lg:p-12 rounded-2xl shadow-sm hover:shadow-premium transition-shadow duration-300 border border-border">
              <h2 className="text-2xl font-display font-bold text-primary uppercase tracking-widest mb-2">
                {brand.name}
              </h2>
              <p className="text-accent text-sm font-medium uppercase tracking-wider mb-6">
                {brand.tagline}
              </p>
              <p className="text-secondary mb-8 leading-relaxed">
                {brand.description}
              </p>
              <Link 
                to={`/shop?brand=${brand.name}`}
                className="inline-flex items-center space-x-2 text-primary font-medium hover:text-accent transition-colors uppercase tracking-wider text-sm group-hover:translate-x-2 duration-300"
              >
                <span>Shop {brand.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Brands;
