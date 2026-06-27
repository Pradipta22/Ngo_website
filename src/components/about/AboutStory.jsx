import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function AboutStory() {
  return (
    <section className="section bg-white py-24" id="our-story">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column Image */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <img 
                  src="images/about/about-main.png" 
                  alt="Our Story - Community empowerment and education" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-6 font-display">
                How We Started Our Journey
              </h2>
              <div className="font-body text-base text-medium leading-relaxed flex flex-col gap-6">
                <p>
                  Founded in 2005 by a group of passionate educators and social workers, our organization was born out of a deep-seated belief that every child deserves access to quality education regardless of their socio-economic background. What started as a small community learning center in rural Maharashtra has grown into a nationwide movement for educational equity and social transformation.
                </p>
                <p>
                  Our mission has always been simple yet profound — to bridge the gap between privilege and potential. We believe that education is not just about academic achievement but about nurturing confident, compassionate, and capable individuals who can contribute meaningfully to society. Through innovative pedagogy, community engagement, and evidence-based programs, we have been able to reach the most marginalized communities across India.
                </p>
                <p>
                  Over the past two decades, we have expanded our reach to over 15 states, impacting more than 500,000 children and their families. Our growth has been fueled by the unwavering dedication of our volunteers, the trust of our donors, and the resilience of the communities we serve. Today, we stand as a testament to the power of collective action and the transformative potential of education.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
