import React from 'react';
import useCounter from '../../hooks/useCounter';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

function StatCard({ icon, target, label, suffix = '+' }) {
  const { ref, count } = useCounter(target, { duration: 2000 });

  // Format count with commas for readability (e.g. 500,000)
  const formattedCount = count.toLocaleString('en-IN');

  return (
    <div 
      ref={ref}
      className="bg-white border border-border shadow-sm rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-3xl mb-3 select-none">{icon}</div>
      <div className="font-display font-black text-3xl sm:text-4xl text-dark tracking-tight leading-none mb-2">
        {formattedCount}{suffix}
      </div>
      <div className="font-body text-xs sm:text-sm font-semibold text-light uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section className="section bg-white py-24 relative overflow-hidden" id="reach">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Our Impact"
            title="Our Reach"
            subtitle="Numbers that reflect our commitment to creating meaningful change across communities."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={1} className="h-full">
            <StatCard icon="❤️" target={500000} label="Lives Impacted" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={2} className="h-full">
            <StatCard icon="🏘️" target={1200} label="Villages Reached" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={3} className="h-full">
            <StatCard icon="🙋" target={5000} label="Volunteers" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={4} className="h-full">
            <StatCard icon="📋" target={300} label="Active Projects" />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={5} className="h-full">
            <StatCard icon="🗺️" target={20} label="States Covered" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
