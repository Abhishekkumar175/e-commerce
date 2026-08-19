import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

const About = () => {
  return (
    <PageTransition>
      <SEO title="About Us" description="The story behind Slekco's minimalist philosophy." />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] lg:h-[80vh] w-full">
        <img 
          src="/images/about_hero.jpg" 
          alt="Minimalist architectural interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-widest text-center px-4">
            The Art of<br/>Less
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-24 lg:py-32 max-w-4xl">
        <div className="space-y-20">
          
          {/* Section 1 */}
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-primary mb-8 uppercase tracking-widest">Our Philosophy</h2>
            <p className="text-lg text-secondary leading-relaxed md:text-xl">
              At Slekco, we believe that true luxury lies in simplicity. In a world of constant noise and excess, we strip away the non-essential to focus on what truly matters: pure form, exceptional materials, and purposeful design.
            </p>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-widest">Wabi-Sabi</h3>
              <p className="text-secondary leading-relaxed">
                We draw deep inspiration from the Japanese philosophy of Wabi-Sabi—finding beauty in imperfection and profound appreciation for the natural lifecycle of materials. Our products are designed not just to be used, but to age gracefully alongside you.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-widest">Sustainability</h3>
              <p className="text-secondary leading-relaxed">
                Minimalism is inherently sustainable. By encouraging you to buy less but buy better, we aim to reduce waste. We partner exclusively with brands and artisans who share our commitment to ethical sourcing and environmentally conscious production methods.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="text-center bg-surface p-12 lg:p-20 rounded-2xl border border-border">
            <h2 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-widest">Join the Journey</h2>
            <p className="text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              Curate a life of intention. Explore our collections of minimalist home goods, quiet wellness essentials, and refined accessories.
            </p>
            <Link 
              to="/shop"
              className="inline-flex items-center justify-center bg-primary text-surface px-10 py-4 rounded-button font-medium uppercase tracking-wider hover:bg-black hover:shadow-premium-hover transition-all duration-300"
            >
              Explore The Shop
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;
