import React from 'react';
import PageHero from '../components/shared/PageHero';
import AboutStory from '../components/about/AboutStory';
import DividerWave from '../components/shared/DividerWave';
import TeamSection from '../components/about/TeamSection';
import TaRL from '../components/about/TaRL';
import Awards from '../components/about/Awards';
import MediaSection from '../components/about/MediaSection';
import Financials from '../components/about/Financials';
import Partners from '../components/about/Partners';
import AnnualReports from '../components/about/AnnualReports';
import CareersCTA from '../components/about/CareersCTA';

const BOARD_MEMBERS = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Chairperson',
    bio: 'A visionary leader with over 30 years of experience in education policy and social reform. Dr. Sharma has been instrumental in shaping our strategic direction and building partnerships with government bodies and international organizations.',
    gradient: 'linear-gradient(135deg, #F5A623, #D4891C)'
  },
  {
    name: 'Rajesh Verma',
    role: 'Vice Chairman',
    bio: 'A seasoned corporate leader and philanthropist, Rajesh brings decades of management expertise to our governance. His commitment to corporate social responsibility has helped forge key partnerships that amplify our impact.',
    gradient: 'linear-gradient(135deg, #4A90D9, #2C5F8A)'
  },
  {
    name: 'Priya Nair',
    role: 'Secretary',
    bio: 'With a background in public administration and nonprofit management, Priya ensures operational excellence across all our programs. Her meticulous attention to compliance and governance strengthens organizational integrity.',
    gradient: 'linear-gradient(135deg, #7B68EE, #5A4FCF)'
  },
  {
    name: 'Amit Khanna',
    role: 'Treasurer',
    bio: 'A chartered accountant with extensive experience in financial management for nonprofits, Amit oversees fiscal responsibility and transparency. His expertise ensures every rupee is maximized for community impact.',
    gradient: 'linear-gradient(135deg, #50C878, #3A9D5E)'
  }
];

const LEADERSHIP_MEMBERS = [
  {
    name: 'Kavita Desai',
    role: 'Chief Executive Officer',
    bio: "Kavita leads our organization with a passion for social justice and a proven track record in scaling grassroots initiatives. Under her leadership, we've expanded to 15 states and multiplied our impact tenfold.",
    gradient: 'linear-gradient(135deg, #E74C3C, #C0392B)'
  },
  {
    name: 'Suresh Iyer',
    role: 'Chief Operating Officer',
    bio: 'Suresh brings operational rigor and process excellence to every aspect of our work. His systems-thinking approach has streamlined our program delivery, enabling us to serve more communities efficiently.',
    gradient: 'linear-gradient(135deg, #3498DB, #2471A3)'
  },
  {
    name: 'Meera Patel',
    role: 'Director of Programs',
    bio: 'Meera designs and oversees all educational and community development programs. Her innovative curriculum design and evidence-based approach have set new standards in the nonprofit education space.',
    gradient: 'linear-gradient(135deg, #9B59B6, #7D3C98)'
  },
  {
    name: 'Arjun Singh',
    role: 'Director of Operations',
    bio: 'Arjun manages field operations, logistics, and volunteer coordination across all project sites. His deep understanding of rural communities ensures our programs are culturally sensitive and locally relevant.',
    gradient: 'linear-gradient(135deg, #E67E22, #CA6F1E)'
  }
];

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'About Us' }
  ];

  return (
    <div className="about-page-wrapper">
      {/* Page Hero */}
      <PageHero 
        title="About Us" 
        backgroundImage="images/hero/slide1.png" 
        breadcrumbs={breadcrumbs}
      />
      
      {/* 1. Our Story */}
      <AboutStory />
      
      {/* Wavy Transition */}
      <DividerWave type="white-cream" />
      
      {/* 2. Board Members (bg-cream) */}
      <TeamSection 
        id="board"
        label="Governance"
        title="Board Members"
        subtitle="Our board provides strategic direction and ensures our mission remains at the forefront of everything we do."
        members={BOARD_MEMBERS}
        bgClass="bg-cream"
      />
      
      {/* Wavy Transition */}
      <DividerWave type="cream-white" />
      
      {/* 3. Leadership Team (bg-white) */}
      <TeamSection 
        id="leadership"
        label="Our Leaders"
        title="Leadership Team"
        subtitle="Our leadership team drives innovation and excellence, turning our vision into impactful programs across the nation."
        members={LEADERSHIP_MEMBERS}
        bgClass="bg-white"
      />
      
      {/* Wavy Transition */}
      <DividerWave type="white-cream" />
      
      {/* 4. Teaching at the Right Level (bg-cream) */}
      <TaRL />
      
      {/* Wavy Transition */}
      <DividerWave type="cream-white" />
      
      {/* 5. Awards & Honors (bg-white) */}
      <Awards />
      
      {/* Wavy Transition */}
      <DividerWave type="white-cream" />
      
      {/* 6. Media & Publications (bg-cream) */}
      <MediaSection />
      
      {/* Wavy Transition */}
      <DividerWave type="cream-white" />
      
      {/* 7. Financials (bg-white) */}
      <Financials />
      
      {/* Wavy Transition */}
      <DividerWave type="white-cream" />
      
      {/* 8. Partners (bg-cream) */}
      <Partners />
      
      {/* Wavy Transition */}
      <DividerWave type="cream-white" />
      
      {/* 9. Annual Reports Archive (bg-white) */}
      <AnnualReports />
      
      {/* Wavy Transition */}
      <DividerWave type="white-cream" />
      
      {/* 10. Careers (bg-cream) */}
      <CareersCTA />
    </div>
  );
}
