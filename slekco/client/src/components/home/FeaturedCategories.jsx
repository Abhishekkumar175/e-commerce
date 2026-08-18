import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const categories = [
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Home', slug: 'home' },
  { name: 'Beauty', slug: 'beauty' },
  { name: 'Accessories', slug: 'accessories' },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-surface border-b border-border">
      <ScrollReveal className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-title mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={category.slug} delay={index * 0.1}>
              <Link 
                to={`/shop?category=${category.slug}`}
                className="group block relative aspect-square bg-gray-50 overflow-hidden rounded-card hover:shadow-premium transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary group-hover:scale-110 transition-transform duration-500">
                    {category.name}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FeaturedCategories;
