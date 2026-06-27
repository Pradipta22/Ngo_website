import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function MediaSection() {
  return (
    <section className="section bg-cream py-24" id="media">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="In The News"
            title="Media & Publications"
            subtitle="Our work and impact have been featured in leading national and international media outlets."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Press Coverage */}
          <ScrollReveal direction="left">
            <h3 className="font-display font-black text-2xl text-dark mb-6">
              Press Coverage
            </h3>
            <div className="font-body text-base text-medium leading-relaxed flex flex-col gap-6">
              <p>
                Our innovative programs and impact stories have been covered by The Times of India, The Hindu, NDTV, BBC, and numerous other media outlets. From our grassroots education initiatives to our large-scale community health programs, the media has consistently highlighted our organization as a changemaker in the social sector.
              </p>
              <p>
                We regularly publish research papers, impact assessments, and policy briefs that contribute to the broader discourse on education and development. Our annual State of Education Report has become a key reference document for policymakers and practitioners across South Asia.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column - Publications */}
          <ScrollReveal direction="right">
            <h3 className="font-display font-black text-2xl text-dark mb-6">
              Publications
            </h3>
            <p className="font-body text-base text-medium leading-relaxed mb-6">
              Our research team publishes extensively on topics ranging from early childhood education to digital literacy in rural areas. These publications are peer-reviewed and have been cited in numerous academic journals and policy documents worldwide.
            </p>
            <ul className="flex flex-col gap-4 font-body text-sm font-semibold text-dark">
              <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm hover:translate-x-1 transition-all duration-300">
                <span className="text-primary mt-0.5 select-none">🗂️</span>
                <span>Annual State of Education Report (ASER)</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm hover:translate-x-1 transition-all duration-300">
                <span className="text-primary mt-0.5 select-none">📘</span>
                <span>Teaching at the Right Level: A Practitioner's Guide</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm hover:translate-x-1 transition-all duration-300">
                <span className="text-primary mt-0.5 select-none">📗</span>
                <span>Community-Led Development: Lessons from the Field</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm hover:translate-x-1 transition-all duration-300">
                <span className="text-primary mt-0.5 select-none">📙</span>
                <span>Digital Literacy in Rural India: Challenges & Opportunities</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border-light shadow-sm hover:translate-x-1 transition-all duration-300">
                <span className="text-primary mt-0.5 select-none">📔</span>
                <span>Impact Assessment Methodology Handbook</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
