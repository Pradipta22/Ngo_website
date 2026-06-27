import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function Programs() {
  return (
    <section className="section bg-cream py-24" id="programs">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="What We Do"
            title="Our Programs"
            subtitle="We design sustainable, community-first solutions to tackle multi-dimensional poverty in rural India."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Program 1: Quality Education */}
          <ScrollReveal direction="up" delay={1} className="flex h-full">
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="assets/campaign_edu.jpg" 
                  alt="Quality Education" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg select-none">
                  📚
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-dark mb-3">
                  Quality Education
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed mb-6 flex-grow">
                  Providing remedial education support using the Teaching at the Right Level (TaRL) methodology to ensure foundational learning.
                </p>
                <Link 
                  to="/about#tarl" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-bold text-sm transition-colors mt-auto w-max"
                >
                  Learn More <span className="transform transition-transform group-hover:translate-x-1 duration-200">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Program 2: Health & Nutrition */}
          <ScrollReveal direction="up" delay={2} className="flex h-full">
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="assets/campaign_health.jpg" 
                  alt="Health & Nutrition" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg select-none">
                  🩺
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-dark mb-3">
                  Health & Nutrition
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed mb-6 flex-grow">
                  Running mobile health clinics, medical screening camps, and community nutrition centers in remote tribal villages.
                </p>
                <Link 
                  to="/about#financials" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-bold text-sm transition-colors mt-auto w-max"
                >
                  Learn More <span className="transform transition-transform group-hover:translate-x-1 duration-200">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Program 3: Sustainable Livelihoods */}
          <ScrollReveal direction="up" delay={3} className="flex h-full">
            <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src="assets/campaign_env.jpg" 
                  alt="Sustainable Livelihoods" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg select-none">
                  🌱
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-dark mb-3">
                  Sustainable Livelihoods
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed mb-6 flex-grow">
                  Empowering self-help groups (SHGs), organic farming cooperatives, and skill development for rural youths.
                </p>
                <Link 
                  to="/about#partners" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-bold text-sm transition-colors mt-auto w-max"
                >
                  Learn More <span className="transform transition-transform group-hover:translate-x-1 duration-200">→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
