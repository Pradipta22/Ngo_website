import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function TaRL() {
  return (
    <section className="section bg-cream py-24" id="tarl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column Content */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left">
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary mb-3">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-6 font-display">
                Teaching at the Right Level
              </h2>
              <div className="font-body text-base text-medium leading-relaxed flex flex-col gap-6">
                <p>
                  Teaching at the Right Level (TaRL) is our evidence-based approach to education that focuses on meeting children where they are academically, rather than where the curriculum says they should be. Developed in partnership with leading educational researchers, TaRL has proven to dramatically improve learning outcomes for children who have fallen behind.
                </p>
                <p>
                  Our TaRL methodology groups children by their actual learning level rather than age or grade, enabling targeted instruction that addresses specific gaps. This approach has been validated through rigorous randomized control trials and adopted by government education programs across multiple states.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Card 1 */}
            <ScrollReveal direction="right" delay={1}>
              <div className="flex gap-4 bg-white border border-border shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl select-none mt-1">📊</span>
                <div>
                  <h3 className="font-display font-bold text-base text-dark mb-2">
                    Assessment-Based Grouping
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                    Children are assessed using simple, effective tools to determine their current learning level, then grouped accordingly for targeted instruction that addresses specific knowledge gaps.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal direction="right" delay={2}>
              <div className="flex gap-4 bg-white border border-border shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl select-none mt-1">🎯</span>
                <div>
                  <h3 className="font-display font-bold text-base text-dark mb-2">
                    Targeted Activities
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                    Each group receives carefully designed learning activities that match their level — from foundational literacy and numeracy to grade-appropriate content — ensuring every child progresses at their own pace.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal direction="right" delay={3}>
              <div className="flex gap-4 bg-white border border-border shadow-sm rounded-2xl p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl select-none mt-1">📈</span>
                <div>
                  <h3 className="font-display font-bold text-base text-dark mb-2">
                    Progress Tracking
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-medium leading-relaxed">
                    Regular assessments track each child's progress, allowing facilitators to adjust groupings and activities dynamically. Data-driven insights ensure continuous improvement in learning outcomes.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
