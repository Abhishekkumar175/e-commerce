import React from 'react';

const brands = ['ATELIER', 'KINTO', 'AETHEL', 'AURA', 'LUMINA', 'VOID'];

const FeaturedBrands = () => {
  return (
    <section className="py-20 border-y border-border bg-surface overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-10">Featured Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70 grayscale">
          {brands.map((brand, index) => (
            <div key={index} className="text-xl md:text-3xl font-display font-bold tracking-widest text-primary hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
