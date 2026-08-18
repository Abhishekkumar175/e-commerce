import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const categories = [
  { name: 'Fashion', slug: 'fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop' },
  { name: 'Beauty', slug: 'beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop' },
  { name: 'Accessories', slug: 'accessories', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Home', slug: 'home', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a013?q=80&w=800&auto=format&fit=crop' },
];

const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-surface border-b border-border">
      <ScrollReveal className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-medium mb-16 text-center text-primary">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {categories.map((category, index) => (
            <ScrollReveal key={category.slug} delay={index * 0.1}>
              <Link 
                to={`/shop?category=${category.slug}`}
                className="group flex flex-col items-center"
              >
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 shadow-sm group-hover:shadow-premium transition-all duration-500">
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
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FeaturedCategories;
