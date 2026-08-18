import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-background overflow-hidden">
      {/* Background noise/texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start pt-10 lg:pt-0">
            <h1 className="text-hero mb-6 opacity-0 animate-fade-in-up">
              DISCOVER <br /> WHAT'S NEXT.
            </h1>
            <p className="text-subtitle mb-10 max-w-md opacity-0 animate-fade-in-up-delay">
              A curated collection of products, brands and everyday essentials.
            </p>
            <div className="opacity-0 animate-fade-in-up-delay-2">
              <Link to="/shop" className="btn-primary inline-flex items-center group">
                Explore Collection
                <svg className="ml-3 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden group">
            {/* Subtle solid background block offset for editorial look */}
            <div className="absolute top-4 -left-4 w-full h-full bg-gray-100 z-0"></div>
            
            <div className="relative z-10 w-full h-full overflow-hidden shadow-premium">
              <img 
                src="/hero_editorial_product.jpg" 
                alt="Premium Perfume Bottle" 
                className="w-full h-full object-cover animate-image-zoom transition-transform duration-1000 group-hover:scale-105 object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
