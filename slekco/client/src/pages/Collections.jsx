import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

const collections = [
  {
    id: 'home',
    title: 'The Minimalist Home',
    description: 'Elevate your living space with our curated selection of wabi-sabi inspired home goods. Designed for tranquility and balance.',
    image: '/images/collection_home.jpg',
    category: 'home'
  },
  {
    id: 'wellness',
    title: 'Quiet Wellness',
    description: 'Self-care rituals re-imagined. Pure materials, calming scents, and tools to help you disconnect and recharge.',
    image: '/images/collection_wellness.jpg',
    category: 'wellness'
  },
  {
    id: 'accessories',
    title: 'Everyday Essentials',
    description: 'Sleek, functional accessories crafted from premium materials. The perfect companions for your daily journey.',
    image: '/images/collection_accessories.jpg',
    category: 'accessories'
  }
];

const Collections = () => {
  return (
    <PageTransition>
      <SEO title="Collections" description="Explore our curated lifestyle collections." />
      
      {/* Header */}
      <div className="bg-surface py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 uppercase tracking-widest">
            Curated Collections
          </h1>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Discover our carefully curated selections designed to bring harmony, luxury, and functionality into every aspect of your life.
          </p>
        </div>
      </div>

      {/* Collections List */}
      <div className="container mx-auto px-4 pb-24 space-y-24 lg:space-y-32">
        {collections.map((collection, index) => (
          <div 
            key={collection.id} 
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-premium group">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-4">0{index + 1}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                {collection.title}
              </h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                {collection.description}
              </p>
              <div>
                <Link 
                  to={`/shop?category=${collection.category}`}
                  className="inline-flex items-center space-x-2 text-primary font-medium border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors uppercase tracking-wider text-sm"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Collections;
