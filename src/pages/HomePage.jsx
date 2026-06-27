import React, { useState } from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import WhyChange from '../components/home/WhyChange';
import DividerWave from '../components/shared/DividerWave';
import AboutPreview from '../components/home/AboutPreview';
import Vision from '../components/home/Vision';
import Programs from '../components/home/Programs';
import ImpactStats from '../components/home/ImpactStats';
import Stories from '../components/home/Stories';
import DonationTiers from '../components/home/DonationTiers';
import VolunteerJourney from '../components/home/VolunteerJourney';
import TrustPartners from '../components/home/TrustPartners';
import LatestUpdates from '../components/home/LatestUpdates';
import Timeline from '../components/home/Timeline';
import FinalCTA from '../components/home/FinalCTA';
import VideoModal from '../components/shared/VideoModal';

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="homepage-wrapper">
      {/* 1. Hero Carousel */}
      <HeroCarousel onWatchVideo={() => setVideoOpen(true)} />
      
      {/* 2. Why India Needs Change */}
      <WhyChange />
      
      {/* Wave Transition */}
      <DividerWave type="white-cream" />
      
      {/* 3. About Preview (bg-cream) */}
      <AboutPreview />
      
      {/* Wave Transition */}
      <DividerWave type="cream-white" />
      
      {/* 4. Vision Blockquote */}
      <Vision />
      
      {/* Wave Transition */}
      <DividerWave type="white-cream" />
      
      {/* 5. Programs (bg-cream) */}
      <Programs />
      
      {/* Wave Transition */}
      <DividerWave type="cream-white" />
      
      {/* 6. Impact Stats (reach) */}
      <ImpactStats />
      
      {/* Wave Transition */}
      <DividerWave type="white-cream" />
      
      {/* 7. Real Stories (bg-cream) */}
      <Stories />
      
      {/* Wave Transition */}
      <DividerWave type="cream-white" />
      
      {/* 8. Donation Pricing Tiers */}
      <DonationTiers />
      
      {/* Wave Transition */}
      <DividerWave type="white-cream" />
      
      {/* 9. Volunteer Journey (bg-cream) */}
      <VolunteerJourney />
      
      {/* Wave Transition */}
      <DividerWave type="cream-white" />
      
      {/* 10. Partners & Trust Compliance */}
      <TrustPartners />
      
      {/* Wave Transition */}
      <DividerWave type="white-cream" />
      
      {/* 11. Latest Updates (bg-cream) */}
      <LatestUpdates />
      
      {/* Wave Transition */}
      <DividerWave type="cream-white" />
      
      {/* 12. Milestones Timeline */}
      <Timeline />
      
      {/* 13. Final CTA */}
      <FinalCTA />
      
      {/* Fullscreen Video Player Modal */}
      <VideoModal 
        isOpen={videoOpen} 
        onClose={() => setVideoOpen(false)} 
      />
    </div>
  );
}
