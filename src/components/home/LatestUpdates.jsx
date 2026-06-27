import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function LatestUpdates() {
  return (
    <section className="section bg-cream py-24" id="updates">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="What's Happening"
            title="Latest Updates & Campaigns"
            subtitle="Stay connected with our real-time community stories, events, and volunteer spotlights."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Update 1 */}
          <ScrollReveal direction="up" delay={1} className="flex h-full">
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="assets/campaign_edu.jpg" 
                  alt="Smart Classrooms" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Campaign
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-body text-xs text-light font-semibold uppercase tracking-wider mb-2">
                  June 25, 2026
                </span>
                <h3 className="font-display font-bold text-lg text-dark mb-3 group-hover:text-primary transition-colors">
                  Launching 50 Smart Classrooms in Rural Odisha
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed flex-grow">
                  Bringing digital smart screens, tablet-based learning apps, and customized video books to primary schools.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Update 2 */}
          <ScrollReveal direction="up" delay={2} className="flex h-full">
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="assets/campaign_health.jpg" 
                  alt="Health Camp" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Health Drive
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-body text-xs text-light font-semibold uppercase tracking-wider mb-2">
                  June 18, 2026
                </span>
                <h3 className="font-display font-bold text-lg text-dark mb-3 group-hover:text-primary transition-colors">
                  Free Diagnostic Camp Reaches 1,500 Villagers
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed flex-grow">
                  Providing dental, vision, general health assessments, and distributing baseline nutrition kits in Kalahandi.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Update 3 */}
          <ScrollReveal direction="up" delay={3} className="flex h-full">
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="assets/campaign_env.jpg" 
                  alt="Tree Plantation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Climate
                </span>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-body text-xs text-light font-semibold uppercase tracking-wider mb-2">
                  June 10, 2026
                </span>
                <h3 className="font-display font-bold text-lg text-dark mb-3 group-hover:text-primary transition-colors">
                  Monsoon Tree Plantation Campaign Begins
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed flex-grow">
                  Our goal is to plant 20,000 native saplings in degraded forest tracts across Western Ghats with village help.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
