import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-background overflow-hidden">
      {/* Background noise/texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Content (Text) */}
          <div className="lg:col-span-5 flex flex-col items-start pt-10 lg:pt-0 z-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-6 opacity-0 animate-fade-in-up text-primary">
              Live <br className="hidden md:block" />
              Beautifully. <br className="hidden md:block" />
              Shop <i className="text-secondary font-serif italic">Effortlessly.</i>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-10 max-w-md opacity-0 animate-fade-in-up-delay font-light">
              A curated collection of premium fashion, beauty, and everyday luxury essentials.
            </p>
            <div className="opacity-0 animate-fade-in-up-delay-2 flex space-x-4">
              <Link to="/shop" className="bg-primary text-surface px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all hover:bg-black hover:shadow-premium">
                Shop Collection
              </Link>
            </div>
          </div>

          {/* Right Content (Image + Floating Card) */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-[85vh] w-full mt-8 lg:mt-0 opacity-0 animate-fade-in-up-delay">
            {/* Main Editorial Image */}
            <div className="w-full h-full relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" 
                alt="Fashion Editorial" 
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000"></div>
            </div>

            {/* Floating Product Card */}
            <div className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-surface p-4 shadow-premium max-w-[220px] animate-fade-in-up-delay-2 hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=400&auto=format&fit=crop" 
                alt="Leather Tote" 
                className="w-full h-auto aspect-square object-cover mb-3"
              />
              <p className="text-xs text-secondary uppercase tracking-widest mb-1">Atelier</p>
              <h4 className="font-display text-sm font-medium mb-2">Minimalist Leather Tote</h4>
              <p className="text-sm font-semibold">$295.00</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
