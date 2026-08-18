import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import TrendingProducts from '../components/home/TrendingProducts';
import FeaturedBrands from '../components/home/FeaturedBrands';
import WhySlekco from '../components/home/WhySlekco';
import HomeCTA from '../components/home/HomeCTA';
import PageTransition from '../components/ui/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="w-full">
        <Hero />
        <FeaturedCategories />
        <TrendingProducts />
        <FeaturedBrands />
        <WhySlekco />
        <HomeCTA />
      </div>
    </PageTransition>
  );
};

export default Home;
