import React from 'react';
import SEO from '../components/ui/SEO';

const Terms = () => {
  return (
    <main className="pt-24 pb-16 min-h-[70vh] bg-background">
      <SEO title="Terms of Service | SLEKCO" description="Terms of service and conditions of use for Slekco." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-primary mb-12 text-center">Terms of Service</h1>
        
        <div className="prose prose-sm md:prose-base max-w-none text-secondary space-y-6">
          <p>By accessing or using the Slekco website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          
          <h3 className="text-xl font-medium text-primary mt-8 mb-4">1. Intellectual Property</h3>
          <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of Slekco or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of Slekco.</p>
          
          <h3 className="text-xl font-medium text-primary mt-8 mb-4">2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Slekco's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          
          <h3 className="text-xl font-medium text-primary mt-8 mb-4">3. Disclaimer</h3>
          <p>The materials on Slekco's website are provided on an 'as is' basis. Slekco makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>
      </div>
    </main>
  );
};

export default Terms;
