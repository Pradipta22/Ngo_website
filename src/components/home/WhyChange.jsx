import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function WhyChange() {
  return (
    <section className="section bg-white py-24" id="why-change">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Tell the Story"
            title="Why India Still Needs Change"
            subtitle="While progress has been made, millions still face critical barriers to basic survival and dignity. Here is where we make an impact."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Education Gap */}
          <ScrollReveal direction="up" delay={1} className="flex h-full">
            <div className="flex flex-col bg-cream rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="assets/campaign_edu.jpg" 
                  alt="Rural Education" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-white border border-border shadow-md flex items-center justify-center text-xl select-none">
                  🎓
                </div>
                <h3 className="font-display font-bold text-xl text-dark mb-4 mt-2">
                  Education Gap
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed flex-grow">
                  Over 6 million children in India are still out of school. Rural education suffers from poor infrastructure and inadequate teaching support.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Healthcare Access */}
          <ScrollReveal direction="up" delay={2} className="flex h-full">
            <div className="flex flex-col bg-cream rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="assets/campaign_health.jpg" 
                  alt="Rural Healthcare" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-white border border-border shadow-md flex items-center justify-center text-xl select-none">
                  🩺
                </div>
                <h3 className="font-display font-bold text-xl text-dark mb-4 mt-2">
                  Healthcare Access
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed flex-grow">
                  More than 70% of India's population lives in rural areas, yet they only have access to 30% of the country's healthcare facilities.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Climate Change */}
          <ScrollReveal direction="up" delay={3} className="flex h-full">
            <div className="flex flex-col bg-cream rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="assets/campaign_env.jpg" 
                  alt="Climate Action" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-white border border-border shadow-md flex items-center justify-center text-xl select-none">
                  🌿
                </div>
                <h3 className="font-display font-bold text-xl text-dark mb-4 mt-2">
                  Climate Change
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed flex-grow">
                  Unpredictable rain and rising heat stress affect rural agriculture, water security, and resource systems directly.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
