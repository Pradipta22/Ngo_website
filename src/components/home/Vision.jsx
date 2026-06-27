import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function Vision() {
  return (
    <section className="section bg-white py-24 relative overflow-hidden" id="vision">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <ScrollReveal direction="scale">
          <div className="text-4xl mb-4 select-none">🔭</div>
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-3">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-8 font-display">
            What We Aspire To
          </h2>
          <blockquote className="font-display font-medium text-xl md:text-2xl lg:text-3xl text-dark leading-relaxed italic max-w-3xl mx-auto border-l-4 md:border-l-0 border-primary pl-4 md:pl-0">
            "A world where every child has access to education, every family has opportunities, and every community can thrive with dignity and hope."
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
