import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const categories = [
  { name: 'Fashion', slug: 'fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop' },
  { name: 'Beauty', slug: 'beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { name: 'Accessories', slug: 'accessories', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Home', slug: 'home', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Fragrance', slug: 'fragrance', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop' },
  { name: 'Wellness', slug: 'wellness', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop' },
  { name: 'Jewelry', slug: 'jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
];

import { ArrowRight } from 'lucide-react';

const FeaturedCategories = () => {
  // Show only first 5 to make room for the "View More" circle, keeping it at 6 total items for 1 row on laptop
  const displayCategories = categories.slice(0, 5);

  return (
    <section className="py-16 bg-surface border-b border-border">
      <ScrollReveal className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-medium mb-12 text-center text-primary">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {displayCategories.map((category, index) => (
            <ScrollReveal key={category.slug} delay={index * 0.1}>
              <Link 
                to={`/shop?category=${category.slug}`}
                className="group flex flex-col items-center"
              >
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 shadow-sm group-hover:shadow-premium transition-all duration-500">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors duration-300">
                  {category.name}
                </span>
              </Link>
            </ScrollReveal>
          ))}
          
          {/* View More Circle */}
          <ScrollReveal delay={0.5}>
            <Link 
              to="/collections" 
              className="group flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 shadow-sm group-hover:shadow-premium transition-all duration-500 bg-primary flex items-center justify-center">
                 <ArrowRight className="text-white w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors duration-300">
                View More
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FeaturedCategories;
