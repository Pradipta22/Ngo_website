import React, { useState, useEffect } from 'react';

export default function DonateBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      
      // Show banner after scrolling 600px
      if (window.scrollY > 600) {
        // Subtle delay before showing
        const timer = setTimeout(() => {
          setVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('donations') || document.getElementById('donate');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (dismissed || !visible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 transform z-[90] shadow-2xl border-t border-white/10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <span className="text-sm md:text-base font-semibold tracking-wide text-center">
        💛 Your contribution can change lives. Support our mission today!
      </span>
      <div className="flex items-center gap-4">
        <a 
          href="#donate" 
          onClick={handleDonateClick}
          className="bg-white text-primary hover:bg-cream font-bold text-xs uppercase tracking-widest px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          Donate Now
        </a>
        <button 
          onClick={handleDismiss}
          className="text-white/80 hover:text-white text-lg p-1 transition-colors"
          aria-label="Close donation banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
