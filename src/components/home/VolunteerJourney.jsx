import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const STEPS = [
  {
    icon: '📝',
    title: '1. Register',
    desc: 'Submit your profile and share your area of skills (teaching, healthcare, digital support).'
  },
  {
    icon: '🎓',
    title: '2. Training',
    desc: 'Undergo a thorough onboarding and skill matching session led by seasoned coordinators.'
  },
  {
    icon: '🏘️',
    title: '3. Visit Community',
    desc: 'Spend time in rural villages directly connecting with children and local self-help groups.'
  },
  {
    icon: '🤝',
    title: '4. Volunteer',
    desc: 'Actively lead teaching camps, health drives, tree plantations, or remote skill campaigns.'
  },
  {
    icon: '❤️',
    title: '5. Become Family',
    desc: 'Build lifelong bonds with our field workers and communities, becoming part of the HopeRise network.'
  }
];

export default function VolunteerJourney() {
  return (
    <section className="section bg-cream py-24 overflow-hidden" id="volunteer">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Be a Catalyst"
            title="Your Volunteer Journey"
            subtitle="Follow our seamless, structured path to becoming an integral part of our community family."
          />
        </ScrollReveal>

        {/* Timeline Connecting line container */}
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="journey-track grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle with Icon */}
                <div className="w-16 h-16 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-2xl mb-6 relative z-10 group-hover:scale-110 group-hover:shadow-primary/10 group-hover:border-primary transition-all duration-300 select-none">
                  {step.icon}
                </div>
                
                {/* Text Details */}
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-medium leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
