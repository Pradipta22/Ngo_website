import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function DonationTiers() {
  const handleDonateClick = (e, tier) => {
    e.preventDefault();
    // Redirect to WhatsApp chat for processing
    const message = encodeURIComponent(`Hi HopeRise, I would like to support your cause with a donation of ${tier}. Please guide me on how to contribute.`);
    window.open(`https://wa.me/917205626779?text=${message}`, '_blank');
  };

  return (
    <section className="section bg-white py-24" id="donations">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Impact Pricing"
            title="How Your Donation Changes Lives"
            subtitle="Transparent impact matching. See exactly how far your contribution goes in transforming lives."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Tier 1 */}
          <ScrollReveal direction="up" delay={1} className="flex h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-center">
              <div>
                <div className="font-display font-black text-4xl text-primary mb-4">
                  ₹500
                </div>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  Foundational School Kit
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed mb-8">
                  Sponsors books, writing materials, and a school bag for one child in rural primary education.
                </p>
              </div>
              <a 
                href="#donate" 
                onClick={(e) => handleDonateClick(e, '₹500')}
                className="w-full inline-block border border-primary text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all active:scale-95"
              >
                Donate ₹500
              </a>
            </div>
          </ScrollReveal>

          {/* Tier 2 */}
          <ScrollReveal direction="up" delay={2} className="flex h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-center">
              <div>
                <div className="font-display font-black text-4xl text-primary mb-4">
                  ₹1,500
                </div>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  Village Healthcare Support
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed mb-8">
                  Provides monthly medical screening, baseline checking, and free generic medicine for a family.
                </p>
              </div>
              <a 
                href="#donate" 
                onClick={(e) => handleDonateClick(e, '₹1,500')}
                className="w-full inline-block border border-primary text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all active:scale-95"
              >
                Donate ₹1,500
              </a>
            </div>
          </ScrollReveal>

          {/* Tier 3 */}
          <ScrollReveal direction="up" delay={3} className="flex h-full">
            <div className="bg-cream border border-primary/20 shadow-md rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-center relative overflow-hidden">
              {/* Highlight Ribbon */}
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase font-bold tracking-widest py-1 px-4 rounded-bl-xl">
                Most Popular
              </div>
              <div>
                <div className="font-display font-black text-4xl text-primary mb-4 mt-2">
                  ₹5,000
                </div>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  Sponsor One Year Schooling
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed mb-8">
                  Fully covers tuition, classroom support materials, and learning camp mentoring for one youth.
                </p>
              </div>
              <a 
                href="#donate" 
                onClick={(e) => handleDonateClick(e, '₹5,000')}
                className="w-full inline-block bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all shadow-sm active:scale-95"
              >
                Donate ₹5,000
              </a>
            </div>
          </ScrollReveal>

          {/* Tier 4 */}
          <ScrollReveal direction="up" delay={4} className="flex h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-center">
              <div>
                <div className="font-display font-black text-4xl text-primary mb-4">
                  ₹10,000
                </div>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  Village Development Drive
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed mb-8">
                  Supports a complete tree plantation campaign or water clean-up camp for an entire rural hamlet.
                </p>
              </div>
              <a 
                href="#donate" 
                onClick={(e) => handleDonateClick(e, '₹10,000')}
                className="w-full inline-block bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all shadow-sm active:scale-95"
              >
                Donate ₹10,000
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
