import React from 'react';

interface QuoteSectionProps {
  quote: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote }) => {
  return (
    <section className="py-24 bg-[#1F2937]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-gray-300 mb-6">SQUARE WAY</p>
          <blockquote className="text-xl md:text-2xl text-white leading-relaxed">
            « {quote} »
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;