import React from 'react';

const brands = ['ATELIER', 'KINTO', 'AETHEL', 'AURA', 'LUMINA', 'VOID'];

const FeaturedBrands = () => {
  return (
    <section className="py-20 border-y border-border bg-surface overflow-hidden">
      <div className="w-full">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-10 text-center">Featured Brands</h2>
        
        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          
          <div className="flex w-max animate-marquee space-x-12 md:space-x-24 px-6">
            {brands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="text-xl md:text-4xl font-display font-bold tracking-widest text-primary cursor-pointer hover:text-black">
                {brand}
              </div>
            ))}
            {brands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="text-xl md:text-4xl font-display font-bold tracking-widest text-primary cursor-pointer hover:text-black">
                {brand}
              </div>
            ))}
            {/* Third duplicate to ensure no gap on large screens before animation resets */}
            {brands.map((brand, index) => (
              <div key={`brand-3-${index}`} className="text-xl md:text-4xl font-display font-bold tracking-widest text-primary cursor-pointer hover:text-black">
                {brand}
              </div>
            ))}
            {brands.map((brand, index) => (
              <div key={`brand-4-${index}`} className="text-xl md:text-4xl font-display font-bold tracking-widest text-primary cursor-pointer hover:text-black">
                {brand}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
