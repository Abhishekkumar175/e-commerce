import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const floatingProducts = [
  {
    brand: "Atelier",
    name: "Minimalist Leather Tote",
    price: "$295.00",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=400&auto=format&fit=crop",
  },
  {
    brand: "Aura",
    name: "Purifying Clay Mask",
    price: "$45.00",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop",
  },
  {
    brand: "Lumina",
    name: "Tortoiseshell Sunglasses",
    price: "$165.00",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop",
  },
];

const Hero = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % floatingProducts.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentProduct = floatingProducts[currentProductIndex];

  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-background overflow-hidden py-12 lg:py-0">
      {/* Background noise/texture for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          {/* Left Content (Text) */}
          <div className="lg:col-span-5 flex flex-col items-start z-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-6 opacity-0 animate-fade-in-up text-primary">
              Live <br className="hidden md:block" />
              Beautifully. <br className="hidden md:block" />
              Shop{" "}
              <i className="text-secondary font-serif italic">Effortlessly.</i>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-10 max-w-md opacity-0 animate-fade-in-up-delay font-light">
              A curated collection of premium fashion, beauty, and everyday
              luxury essentials.
            </p>
            <div className="opacity-0 animate-fade-in-up-delay-2 flex space-x-4">
              <Link
                to="/shop"
                className="bg-primary text-surface px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all hover:bg-black hover:shadow-premium"
              >
                Shop Collection
              </Link>
            </div>
          </div>

          {/* Right Content (Image + Floating Card) */}
          <div className="lg:col-span-7 relative h-[50vh] lg:h-[70vh] w-full mt-8 lg:mt-0 opacity-0 animate-fade-in-up-delay">
            {/* Main Editorial Image */}
            <div className="w-full h-full relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
                alt="Fashion Shopping"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000"></div>
            </div>

            {/* Floating Product Card */}
            <div className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-surface p-4 shadow-premium max-w-[220px] animate-fade-in-up-delay-2 hidden sm:block">
              <div key={currentProduct.name} className="animate-fade-in-up">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-auto aspect-square object-cover mb-3"
                />
                <p className="text-xs text-secondary uppercase tracking-widest mb-1">
                  {currentProduct.brand}
                </p>
                <h4 className="font-display text-sm font-medium mb-2">
                  {currentProduct.name}
                </h4>
                <p className="text-sm font-semibold">{currentProduct.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
