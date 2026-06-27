import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function Stories() {
  return (
    <section className="section bg-cream py-24" id="stories">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Humanity"
            title="Stories That Changed Lives"
            subtitle="Real stories of hope, resilience, and transformation from the field."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Story 1 */}
          <ScrollReveal direction="up" delay={1} className="flex h-full">
            <div className="bg-white border border-border shadow-sm rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-6 right-8 text-primary/10 text-6xl font-serif select-none pointer-events-none group-hover:text-primary/20 transition-colors">
                ”
              </div>
              <div>
                <div className="text-4xl mb-6 select-none">👦</div>
                <p className="font-body text-base text-medium italic leading-relaxed mb-6">
                  "I wanted to learn, but my school had closed. HopeRise gave me a teacher who made reading a game."
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold text-base text-dark">
                  Aarav Kumar
                </div>
                <div className="font-body text-xs text-light font-medium mt-0.5">
                  Barmer, Rajasthan
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Story 2 */}
          <ScrollReveal direction="up" delay={2} className="flex h-full">
            <div className="bg-white border border-border shadow-sm rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-6 right-8 text-primary/10 text-6xl font-serif select-none pointer-events-none group-hover:text-primary/20 transition-colors">
                ”
              </div>
              <div>
                <div className="text-4xl mb-6 select-none">👩</div>
                <p className="font-body text-base text-medium italic leading-relaxed mb-6">
                  "Through the Self-Help Group training, I started my sewing shop. Now I pay for my daughter's education."
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold text-base text-dark">
                  Priya Das
                </div>
                <div className="font-body text-xs text-light font-medium mt-0.5">
                  Koraput, Odisha
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Story 3 */}
          <ScrollReveal direction="up" delay={3} className="flex h-full">
            <div className="bg-white border border-border shadow-sm rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <div className="absolute top-6 right-8 text-primary/10 text-6xl font-serif select-none pointer-events-none group-hover:text-primary/20 transition-colors">
                ”
              </div>
              <div>
                <div className="text-4xl mb-6 select-none">👴</div>
                <p className="font-body text-base text-medium italic leading-relaxed mb-6">
                  "At the mobile health clinic, they diagnosed my chronic condition and gave me free medicine. I can walk again."
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="font-display font-bold text-base text-dark">
                  Ramesh Gowda
                </div>
                <div className="font-body text-xs text-light font-medium mt-0.5">
                  Chamarajanagar, Karnataka
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
