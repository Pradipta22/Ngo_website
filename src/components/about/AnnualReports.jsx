import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

const REPORTS = [
  {
    year: '2024',
    title: 'Annual Report 2023-24',
    desc: 'Impact across 15 states, reaching 120,000+ children with quality education programs.'
  },
  {
    year: '2023',
    title: 'Annual Report 2022-23',
    desc: 'Expansion to 5 new districts and launch of our digital learning platform.'
  },
  {
    year: '2022',
    title: 'Annual Report 2021-22',
    desc: 'Post-pandemic recovery and rebuilding educational access in underserved communities.'
  },
  {
    year: '2021',
    title: 'Annual Report 2020-21',
    desc: 'Navigating the pandemic — our remote learning initiatives and community support programs.'
  }
];

export default function AnnualReports() {
  const handleDownload = (e, reportTitle) => {
    e.preventDefault();
    alert(`Downloading ${reportTitle} PDF... (Mock linkage)`);
  };

  return (
    <section className="section bg-white py-24" id="annual-reports">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Archives"
            title="Annual Reports"
            subtitle="Explore our journey through the years. Each report captures our milestones, learnings, and growth."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {REPORTS.map((report, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="scale" 
              delay={idx + 1}
              className="h-full"
            >
              <div className="bg-cream border border-border shadow-sm rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Visual Cover Header */}
                <div className="h-32 bg-primary/10 flex items-center justify-center relative select-none">
                  <div className="font-display font-black text-3xl text-primary-dark">
                    {report.year}
                  </div>
                  <div className="absolute top-3 right-3 bg-white text-[9px] font-bold text-medium border border-border-light uppercase tracking-widest px-2 py-0.5 rounded-full">
                    Report
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="font-display font-bold text-base text-dark mb-2">
                      {report.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-medium leading-relaxed mb-6">
                      {report.desc}
                    </p>
                  </div>
                  <a 
                    href="#" 
                    onClick={(e) => handleDownload(e, report.title)}
                    className="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-bold text-xs uppercase tracking-widest transition-colors w-max"
                  >
                    Download Report →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
