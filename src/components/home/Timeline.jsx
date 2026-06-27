import React, { useEffect, useRef } from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const MILESTONES = [
  {
    year: '2015',
    title: 'Organization Founded',
    desc: 'HopeRise Foundation was established with a mission to transform lives through quality education and community empowerment.'
  },
  {
    year: '2017',
    title: '10,000 Beneficiaries',
    desc: 'Reached our first milestone of 10,000 direct beneficiaries across education and health programs in rural communities.'
  },
  {
    year: '2019',
    title: 'Multi-State Expansion',
    desc: 'Expanded operations to multiple states, establishing regional offices and partnering with local organizations.'
  },
  {
    year: '2021',
    title: 'Digital Education Launch',
    desc: 'Launched digital education initiatives, bringing technology-enabled learning to remote and underserved areas.'
  },
  {
    year: '2023',
    title: '500,000+ Lives Impacted',
    desc: 'Crossed the milestone of impacting over half a million lives through our comprehensive community programs.'
  },
  {
    year: '2025',
    title: 'International Partnerships',
    desc: 'Expanded international partnerships, collaborating with global organizations to scale our proven impact models.'
  }
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateTimelineProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateTimelineProgress = () => {
      const timeline = timelineRef.current;
      const progressFill = fillRef.current;
      const items = itemsRef.current;
      
      if (!timeline || !progressFill) return;

      const rect = timeline.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate scroll progress percentage through the timeline container
      const startTrigger = rect.top - viewHeight / 2;
      const totalHeight = rect.height;
      const scrolled = -startTrigger;
      
      let percent = 0;
      if (scrolled > 0) {
        percent = Math.min((scrolled / totalHeight) * 100, 100);
      }
      
      progressFill.style.height = `${percent}%`;
      
      // Highlight active timeline items as scroll passes them
      items.forEach((item) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        if (itemCenter < viewHeight / 2 + 100) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once initially after render
    setTimeout(updateTimelineProgress, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section bg-white py-24" id="timeline">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Our Journey"
            title="Impact Timeline"
            subtitle="Key milestones that mark our journey of creating lasting impact in communities."
          />
        </ScrollReveal>

        {/* Timeline Container */}
        <div ref={timelineRef} className="timeline max-w-4xl mx-auto relative pt-8 pb-8">
          <div className="timeline__progress-bar" />
          <div ref={fillRef} className="timeline__progress-fill" />

          {MILESTONES.map((milestone, idx) => (
            <div 
              key={idx}
              ref={el => itemsRef.current[idx] = el}
              className="timeline__item"
            >
              <div className="timeline__dot" />
              <div className="timeline__content bg-cream border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="font-display font-black text-2xl text-primary leading-none block mb-2 select-none">
                  {milestone.year}
                </span>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  {milestone.title}
                </h3>
                <p className="font-body text-sm text-medium leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
