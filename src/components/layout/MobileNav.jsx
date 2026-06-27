import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MobileNav({ isOpen, onClose }) {
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (hash) => {
    onClose();
    if (hash && location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
      <div className="mobile-nav__links-container flex flex-col items-center gap-6">
        <Link 
          to="/" 
          onClick={() => handleLinkClick(null)}
          className="mobile-nav-link" 
          style={{ '--item-index': 1 }}
        >
          Home
        </Link>
        
        {/* About Us with Submenu Toggle */}
        <div className="flex flex-col items-center">
          <button 
            onClick={() => setAboutSubmenuOpen(!aboutSubmenuOpen)}
            className="mobile-nav-link flex items-center gap-2"
            style={{ '--item-index': 2 }}
          >
            About Us <span className={`text-xs transition-transform duration-300 ${aboutSubmenuOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          
          <div className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 mt-3 ${
            aboutSubmenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}>
            <Link to="/about#our-story" onClick={() => handleLinkClick(null)} className="text-medium hover:text-primary text-lg font-medium">Our Story</Link>
            <Link to="/about#board" onClick={() => handleLinkClick(null)} className="text-medium hover:text-primary text-lg font-medium">Board</Link>
            <Link to="/about#leadership" onClick={() => handleLinkClick(null)} className="text-medium hover:text-primary text-lg font-medium">Leadership</Link>
            <Link to="/about#awards" onClick={() => handleLinkClick(null)} className="text-medium hover:text-primary text-lg font-medium">Awards</Link>
            <Link to="/about#partners" onClick={() => handleLinkClick(null)} className="text-medium hover:text-primary text-lg font-medium">Partners</Link>
            <Link to="/about#careers" onClick={() => handleLinkClick(null)} className="text-medium hover:text-primary text-lg font-medium">Careers</Link>
          </div>
        </div>

        <Link 
          to="/#reach" 
          onClick={() => handleLinkClick('#reach')}
          className="mobile-nav-link" 
          style={{ '--item-index': 3 }}
        >
          Our Reach
        </Link>

        <Link 
          to="/#timeline" 
          onClick={() => handleLinkClick('#timeline')}
          className="mobile-nav-link" 
          style={{ '--item-index': 4 }}
        >
          Success Stories
        </Link>

        <Link 
          to="/contact" 
          onClick={() => handleLinkClick(null)}
          className="mobile-nav-link" 
          style={{ '--item-index': 5 }}
        >
          Contact Us
        </Link>
      </div>

      {/* Action buttons */}
      <div className="mobile-nav__actions flex flex-col items-center gap-4 mt-8 w-full max-w-xs px-6">
        <Link 
          to="/#donations" 
          onClick={() => handleLinkClick('#donations')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-center uppercase tracking-widest py-3 rounded-full shadow-md active:scale-95 transition-all"
        >
          Donate Now
        </Link>
        <Link 
          to="/contact#volunteer" 
          onClick={onClose}
          className="w-full border border-dark text-dark font-bold text-center uppercase tracking-widest py-3 rounded-full hover:bg-dark hover:text-white transition-all active:scale-95"
        >
          Volunteer
        </Link>
      </div>
    </div>
  );
}
