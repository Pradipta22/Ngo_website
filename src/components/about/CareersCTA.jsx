import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';

export default function CareersCTA() {
  return (
    <section className="section bg-cream py-24 text-center" id="careers">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal direction="scale">
          <div className="bg-white border border-border p-12 md:p-16 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-6 font-display">
              Join Our Team
            </h2>
            <p className="font-body text-base text-medium leading-relaxed mb-8 max-w-2xl mx-auto">
              We're always looking for passionate, driven individuals who want to make a difference. Whether you're an experienced professional or a fresh graduate, there's a place for you in our mission. Join us and be part of a team that is transforming lives through education, empowerment, and community development.
            </p>
            <Link 
              to="/contact#careers-apply" 
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-md active:scale-95"
            >
              View Open Positions
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
