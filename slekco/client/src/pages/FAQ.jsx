import React from 'react';
import SEO from '../components/ui/SEO';

const FAQ = () => {
  const faqs = [
    { q: "What is your return policy?", a: "We accept returns within 30 days of delivery for a full refund, minus a $10 processing fee." },
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Expedited options are available at checkout." },
    { q: "Do you ship internationally?", a: "Yes, we ship globally to over 100 countries. International shipping rates apply." },
    { q: "How can I track my order?", a: "Once your order is dispatched, you will receive a tracking link via email to monitor your package's journey." }
  ];

  return (
    <main className="pt-24 pb-16 min-h-[70vh] bg-surface">
      <SEO title="FAQ | SLEKCO" description="Frequently asked questions about Slekco orders, shipping, and returns." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-primary mb-12 text-center">Frequently Asked Questions</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-6">
              <h3 className="text-lg font-medium text-primary mb-2">{faq.q}</h3>
              <p className="text-secondary leading-relaxed text-sm md:text-base">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
