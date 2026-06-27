import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import MobileNav from './MobileNav';
import Footer from './Footer';
import BackToTop from '../shared/BackToTop';
import WhatsAppFloat from '../shared/WhatsAppFloat';
import DonateBanner from '../shared/DonateBanner';

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on standard page change, or to hash if present
  useEffect(() => {
    setMobileOpen(false); // Close mobile menu on route change
    
    const { hash } = location;
    if (hash) {
      // Small delay to allow component mounting
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const handleMobileToggle = () => {
    setMobileOpen(prev => !prev);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      {/* Navbar Header */}
      <Header 
        mobileOpen={mobileOpen} 
        onMobileToggle={handleMobileToggle} 
      />
      
      {/* Mobile Drawer Menu */}
      <MobileNav 
        isOpen={mobileOpen} 
        onClose={handleMobileClose} 
      />
      
      {/* Router Outlet for rendering page content */}
      <main className="flex-grow pt-[84px] md:pt-[92px]">
        <Outlet />
      </main>
      
      {/* Global Footer */}
      <Footer />
      
      {/* Overlay Utilities */}
      <BackToTop />
      <WhatsAppFloat />
      <DonateBanner />
    </div>
  );
}
