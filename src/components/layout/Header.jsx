import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStickyHeader from '../../hooks/useStickyHeader';

export default function Header({ mobileOpen, onMobileToggle }) {
  const scrolled = useStickyHeader();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/contact';

  const handleHashLink = (hash) => {
    if (isHome) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="flex items-center justify-between mx-auto w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 select-none group">
            <span className="text-2xl transform transition-transform group-hover:rotate-12 duration-300">🌱</span>
            <div>
              <div className="header-logo-text font-black text-xl leading-none font-display uppercase tracking-wider">
                HopeRise
              </div>
              <div className="header-logo-tagline font-bold text-xs leading-none tracking-widest text-primary">
                Foundation
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative">
              <Link 
                to="/" 
                className={`header-nav-link ${isHome ? 'active' : ''}`}
              >
                Home
              </Link>
            </div>
            
            {/* About Us Nav Item with Mega Menu */}
            <div className="relative nav-item-has-mega py-2">
              <Link 
                to="/about" 
                className={`header-nav-link flex items-center gap-1 ${isAbout ? 'active' : ''}`}
              >
                About Us
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              
              {/* Mega Menu Dropdown */}
              <div className="mega-menu">
                <div className="grid grid-cols-3 gap-6">
                  <Link to="/about#our-story" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">📖</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Our Story</div>
                      <div className="text-xs text-medium">How we started our journey</div>
                    </div>
                  </Link>
                  <Link to="/about#board" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">👥</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Board</div>
                      <div className="text-xs text-medium">Our governing board members</div>
                    </div>
                  </Link>
                  <Link to="/about#leadership" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">🏆</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Leadership</div>
                      <div className="text-xs text-medium">Meet our leadership team</div>
                    </div>
                  </Link>
                  <Link to="/about#tarl" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">🎓</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Teaching at the Right Level</div>
                      <div className="text-xs text-medium">Our proven methodology</div>
                    </div>
                  </Link>
                  <Link to="/about#awards" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">🏅</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Awards & Recognition</div>
                      <div className="text-xs text-medium">Milestones & achievements</div>
                    </div>
                  </Link>
                  <Link to="/about#media" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">📰</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Media & Publications</div>
                      <div className="text-xs text-medium">Press & news coverage</div>
                    </div>
                  </Link>
                  <Link to="/about#financials" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">📊</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Financials</div>
                      <div className="text-xs text-medium">Transparency & reports</div>
                    </div>
                  </Link>
                  <Link to="/about#partners" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">🤝</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Partners</div>
                      <div className="text-xs text-medium">Our valued collaborations</div>
                    </div>
                  </Link>
                  <Link to="/about#careers" className="flex gap-3 p-3 rounded-lg hover:bg-cream-deep transition-all">
                    <span className="text-xl">💼</span>
                    <div>
                      <div className="font-bold text-sm text-dark">Careers</div>
                      <div className="text-xs text-medium">Join our team</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/#reach" 
              onClick={() => handleHashLink('#reach')}
              className="header-nav-link"
            >
              Our Reach
            </Link>

            <Link 
              to="/#timeline" 
              onClick={() => handleHashLink('#timeline')}
              className="header-nav-link"
            >
              Success Stories
            </Link>

            <Link 
              to="/contact" 
              className={`header-nav-link ${isContact ? 'active' : ''}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button 
              onClick={() => setSearchOpen(true)}
              className="header-search-btn text-base p-2 hover:scale-110 active:scale-95 transition-transform" 
              aria-label="Search"
            >
              🔍
            </button>

            {/* Volunteer Button */}
            <Link 
              to="/contact#volunteer" 
              className="hidden sm:inline-block border font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95 header-volunteer-btn"
            >
              Volunteer
            </Link>

            {/* Donate Button */}
            <Link 
              to="/#donations"
              onClick={() => handleHashLink('#donations')}
              className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Donate Now
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              className={`header-mobile-toggle flex lg:hidden ${mobileOpen ? 'active' : ''}`} 
              onClick={onMobileToggle}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-dark/95 backdrop-blur-md flex items-center justify-center z-[9999] animate-fade-in">
          <button 
            onClick={() => setSearchOpen(false)}
            className="absolute top-8 right-8 text-white/70 hover:text-white text-3xl font-light transition-colors"
          >
            ✕
          </button>
          <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl px-6">
            <input 
              type="text" 
              className="w-full bg-transparent border-b-2 border-white/20 focus:border-primary text-white text-2xl md:text-3xl font-light py-4 px-2 outline-none transition-colors placeholder-white/30"
              placeholder="Type to search..." 
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      )}
    </>
  );
}
