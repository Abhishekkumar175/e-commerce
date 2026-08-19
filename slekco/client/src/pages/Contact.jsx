import React from 'react';
import SEO from '../components/ui/SEO';

const Contact = () => {
  return (
    <main className="pt-24 pb-16 min-h-[70vh] bg-surface">
      <SEO title="Contact Us | SLEKCO" description="Get in touch with the Slekco customer service team." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-primary mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium text-primary mb-4">Get in Touch</h3>
            <p className="text-secondary mb-8">Our client advisors are available to assist you with any inquiries regarding our collections, sizing, or styling advice.</p>
            
            <div className="space-y-4 text-sm text-secondary">
              <p><strong className="text-primary font-medium block">Email:</strong> clientservices@slekco.com</p>
              <p><strong className="text-primary font-medium block">Phone:</strong> +1 (800) 123-4567</p>
              <p><strong className="text-primary font-medium block">Hours:</strong> Monday - Friday, 9am - 6pm EST</p>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary mb-2">Name</label>
                <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary mb-2">Email</label>
                <input type="email" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-secondary mb-2">Message</label>
                <textarea rows="4" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>
              <button className="bg-primary text-surface px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-black transition-colors w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
