import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function TrustPartners() {
  return (
    <section className="section bg-white py-24" id="trust">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Transparency First"
            title="Partners & Credibility"
            subtitle="We are built on absolute trust, reporting every rupee received and maintaining high regulatory compliance."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {/* Card 1: 80G */}
          <ScrollReveal direction="up" delay={1} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="inline-block bg-primary/10 text-primary font-display font-black text-lg px-4 py-1.5 rounded-full mb-4">
                80G
              </div>
              <h3 className="font-display font-bold text-base text-dark mb-3">
                80G Registration
              </h3>
              <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                All Indian donations are eligible for a 50% tax deduction under Section 80G of the Income Tax Act.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: 12A */}
          <ScrollReveal direction="up" delay={2} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="inline-block bg-primary/10 text-primary font-display font-black text-lg px-4 py-1.5 rounded-full mb-4">
                12A
              </div>
              <h3 className="font-display font-bold text-base text-dark mb-3">
                12A Certification
              </h3>
              <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                Certified tax-exempt organization demonstrating regulatory compliance and financial reporting integrity.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: FCRA */}
          <ScrollReveal direction="up" delay={3} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="inline-block bg-primary/10 text-primary font-display font-black text-lg px-4 py-1.5 rounded-full mb-4">
                FCRA
              </div>
              <h3 className="font-display font-bold text-base text-dark mb-3">
                FCRA Compliant
              </h3>
              <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                Fully registered to receive foreign contributions, strictly adhering to Ministry of Home Affairs guidelines.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 4: CSR */}
          <ScrollReveal direction="up" delay={4} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="inline-block bg-primary/10 text-primary font-display font-black text-lg px-4 py-1.5 rounded-full mb-4">
                CSR
              </div>
              <h3 className="font-display font-bold text-base text-dark mb-3">
                CSR Eligible
              </h3>
              <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                Certified to partner with corporate entities for CSR implementation under Section 135 of Company Law.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Corporate Partners Logos */}
        <ScrollReveal direction="up" className="max-w-4xl mx-auto bg-cream rounded-2xl p-8 border border-border text-center shadow-sm">
          <h3 className="font-display font-bold text-sm text-medium uppercase tracking-widest mb-6">
            Corporate Partners & Supporters
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <span className="font-display font-black text-base text-light hover:text-dark transition-colors select-none tracking-wider">
              TATA GROUP
            </span>
            <span className="font-display font-black text-base text-light hover:text-dark transition-colors select-none tracking-wider">
              INFOSYS FOUNDATION
            </span>
            <span className="font-display font-black text-base text-light hover:text-dark transition-colors select-none tracking-wider">
              WIPRO CARES
            </span>
            <span className="font-display font-black text-base text-light hover:text-dark transition-colors select-none tracking-wider">
              RELIANCE FOUNDATION
            </span>
            <span className="font-display font-black text-base text-light hover:text-dark transition-colors select-none tracking-wider">
              HDFC CSR
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
