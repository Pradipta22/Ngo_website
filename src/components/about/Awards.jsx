import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function Awards() {
  return (
    <section className="section bg-white py-24" id="awards">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Recognition"
            title="Awards & Honors"
            subtitle="Our work has been recognized by national and international bodies for its impact and innovation."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Award 1 */}
          <ScrollReveal direction="up" delay={1} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-center relative group">
              <div className="text-4xl mb-4 select-none">{/* Icon wrapper */}🏅</div>
              <h3 className="font-display font-bold text-lg text-dark mb-1">
                National Excellence Award
              </h3>
              <span className="font-display font-black text-sm text-primary mb-4 block">
                2022
              </span>
              <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                Awarded by the Ministry of Education for outstanding contribution to improving literacy rates among underserved communities. Recognized for our innovative TaRL methodology and scalable program delivery.
              </p>
            </div>
          </ScrollReveal>

          {/* Award 2 */}
          <ScrollReveal direction="up" delay={2} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-center relative group">
              <div className="text-4xl mb-4 select-none">🌟</div>
              <h3 className="font-display font-bold text-lg text-dark mb-1">
                Global Impact Recognition
              </h3>
              <span className="font-display font-black text-sm text-primary mb-4 block">
                2021
              </span>
              <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                Honored at the World Education Summit for demonstrating measurable, sustainable impact across multiple states. Our data-driven approach to education was highlighted as a model for replication globally.
              </p>
            </div>
          </ScrollReveal>

          {/* Award 3 */}
          <ScrollReveal direction="up" delay={3} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-center relative group">
              <div className="text-4xl mb-4 select-none">🏆</div>
              <h3 className="font-display font-bold text-lg text-dark mb-1">
                Best NGO Award
              </h3>
              <span className="font-display font-black text-sm text-primary mb-4 block">
                2020
              </span>
              <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                Received the prestigious Best NGO Award from the National Council for Social Development for excellence in governance, transparency, and program effectiveness in rural education.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
