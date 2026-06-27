import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const COLLABORATORS = [
  { name: 'UNICEF India', label: 'UNICEF' },
  { name: 'World Bank', label: 'World Bank' },
  { name: 'UNESCO', label: 'UNESCO' },
  { name: 'USAID', label: 'USAID' },
  { name: 'Bill & Melinda Gates Foundation', label: 'Gates Foundation' }
];

export default function Partners() {
  return (
    <section className="section bg-cream py-24" id="partners">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Collaborations"
            title="Our Partners"
            subtitle="We work alongside leading organizations to amplify our impact and create sustainable change."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {COLLABORATORS.map((partner, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="scale" 
              delay={idx + 1}
              className="h-full"
            >
              <div className="bg-white border border-border shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300 h-full min-h-[140px]">
                <div className="w-full h-12 bg-cream rounded-xl flex items-center justify-center font-display font-black text-xs sm:text-sm text-light uppercase tracking-widest mb-4 select-none px-2">
                  {partner.label}
                </div>
                <h4 className="font-display font-bold text-xs sm:text-sm text-dark">
                  {partner.name}
                </h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
