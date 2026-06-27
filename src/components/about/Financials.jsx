import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import ScrollReveal from '../shared/ScrollReveal';

export default function Financials() {
  const handleDownload = (e, filename) => {
    e.preventDefault();
    alert(`Downloading ${filename}.pdf (Demonstration link)`);
  };

  return (
    <section className="section bg-white py-24" id="financials">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Transparency"
            title="Financials"
            subtitle="We believe in complete financial transparency. Download our reports to see how your contributions are making an impact."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <ScrollReveal direction="up" delay={1} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full justify-between">
              <div>
                <div className="text-4xl mb-4 select-none">📊</div>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  Annual Report 2024
                </h3>
                <p className="font-body text-xs sm:text-sm text-medium leading-relaxed mb-6">
                  Comprehensive overview of our programs, achievements, financials, and impact for the fiscal year 2023-24.
                </p>
              </div>
              <a 
                href="#" 
                onClick={(e) => handleDownload(e, 'Annual_Report_2024')}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all active:scale-95 w-full"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal direction="up" delay={2} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full justify-between">
              <div>
                <div className="text-4xl mb-4 select-none">📋</div>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  Financial Statement 2024
                </h3>
                <p className="font-body text-xs sm:text-sm text-medium leading-relaxed mb-6">
                  Detailed financial statements including balance sheet, income & expenditure, and fund utilization breakdown.
                </p>
              </div>
              <a 
                href="#" 
                onClick={(e) => handleDownload(e, 'Financial_Statement_2024')}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all active:scale-95 w-full"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal direction="up" delay={3} className="h-full">
            <div className="bg-cream border border-border shadow-sm rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full justify-between">
              <div>
                <div className="text-4xl mb-4 select-none">📑</div>
                <h3 className="font-display font-bold text-lg text-dark mb-3">
                  Audit Report 2024
                </h3>
                <p className="font-body text-xs sm:text-sm text-medium leading-relaxed mb-6">
                  Independent auditor's report certifying our financial compliance, internal controls, and statutory requirements.
                </p>
              </div>
              <a 
                href="#" 
                onClick={(e) => handleDownload(e, 'Audit_Report_2024')}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full transition-all active:scale-95 w-full"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
