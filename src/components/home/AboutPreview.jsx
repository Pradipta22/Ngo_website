import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';

export default function AboutPreview() {
  return (
    <section className="section bg-cream py-24" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Image with Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ScrollReveal direction="left" className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/85">
                <img 
                  src="images/about/about-main.png" 
                  alt="Children learning with volunteers" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border border-border shadow-xl rounded-2xl p-4 flex flex-col items-center justify-center min-w-[120px] select-none">
                <div className="font-display font-black text-3xl text-primary leading-none">
                  10+
                </div>
                <div className="font-body text-xs font-semibold text-medium text-center uppercase tracking-wider mt-1">
                  Years of<br />Impact
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Text & Features */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-3">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-6 font-display">
                Creating Lasting Change in Communities
              </h2>
              <p className="font-body text-base text-medium leading-relaxed mb-8">
                We believe every individual deserves the opportunity to learn, grow, and thrive. Through community-driven initiatives, quality education, health programs, and sustainable development efforts, we work to create lasting change in the lives of children, families, and communities.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm">
                  <span className="text-xl">📚</span>
                  <span className="font-body text-sm font-semibold text-dark">Quality Education</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm">
                  <span className="text-xl">❤️</span>
                  <span className="font-body text-sm font-semibold text-dark">Health Programs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm">
                  <span className="text-xl">💪</span>
                  <span className="font-body text-sm font-semibold text-dark">Women Empowerment</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm">
                  <span className="text-xl">🌱</span>
                  <span className="font-body text-sm font-semibold text-dark">Sustainability</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link 
                  to="/about" 
                  className="bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 shadow-md active:scale-95"
                >
                  Read More →
                </Link>
                <Link 
                  to="/contact#volunteer" 
                  className="border border-dark text-dark font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-dark hover:text-white transition-all active:scale-95"
                >
                  Join Us
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
