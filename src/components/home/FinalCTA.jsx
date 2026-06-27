import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';

export default function FinalCTA() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section py-24 bg-cream relative overflow-hidden" id="final-cta">
      {/* Curved background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <ScrollReveal direction="scale">
          <div className="bg-white border border-border p-12 md:p-16 rounded-3xl shadow-xl">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-3">
              Inspire Change
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tight mb-6 font-display leading-tight">
              Be the Hope India Needs Today
            </h2>
            <p className="font-body text-base md:text-lg text-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              Your support can bring a child to school, provide baseline medicine to a family, or build sustainable forests. Together, we are the catalyst for transformation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="#donations" 
                onClick={(e) => handleScroll(e, '#donations')}
                className="bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-md active:scale-95"
              >
                Donate Now
              </a>
              <a 
                href="#volunteer" 
                onClick={(e) => handleScroll(e, '#volunteer')}
                className="border border-dark text-dark font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-dark hover:text-white transition-all active:scale-95"
              >
                Become a Volunteer
              </a>
              <Link 
                to="/contact" 
                className="bg-cream-deep hover:bg-border text-medium font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all active:scale-95"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
