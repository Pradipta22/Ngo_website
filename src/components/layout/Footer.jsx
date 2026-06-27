import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const handleHashScroll = (hash) => {
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer bg-cream border-t border-border mt-auto pt-16 pb-8" id="footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 select-none group">
              <span className="text-2xl transform transition-transform group-hover:rotate-12 duration-300">🌱</span>
              <div className="font-display font-black text-xl text-dark tracking-wide">
                HopeRise Foundation
              </div>
            </Link>
            <p className="text-sm text-medium leading-relaxed font-body">
              Empowering communities through education, health, and sustainable development. Together, we create lasting change for a better tomorrow.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all" aria-label="Facebook">📘</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all" aria-label="Instagram">📸</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all" aria-label="LinkedIn">💼</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all" aria-label="YouTube">▶️</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-sm shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all" aria-label="X">✖️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base text-dark uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm text-medium">
              <Link to="/" className="hover:text-primary hover:translate-x-1 transition-all">→ Home</Link>
              <Link to="/about" className="hover:text-primary hover:translate-x-1 transition-all">→ About Us</Link>
              <Link to="/#reach" onClick={() => handleHashScroll('#reach')} className="hover:text-primary hover:translate-x-1 transition-all">→ Our Reach</Link>
              <Link to="/#timeline" onClick={() => handleHashScroll('#timeline')} className="hover:text-primary hover:translate-x-1 transition-all">→ Stories</Link>
              <Link to="/contact" className="hover:text-primary hover:translate-x-1 transition-all">→ Contact</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-base text-dark uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4 font-body text-sm text-medium">
              <div className="flex gap-3">
                <span className="text-lg">📞</span>
                <div>
                  <div className="font-semibold text-xs text-light uppercase tracking-wider">Phone</div>
                  <a href="tel:+1XXXXXXXXXX" className="hover:text-primary transition-colors">+1 XXX XXX XXXX</a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">📧</span>
                <div>
                  <div className="font-semibold text-xs text-light uppercase tracking-wider">Email</div>
                  <a href="mailto:info@ngo.org" className="hover:text-primary transition-colors">info@ngo.org</a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">🛟</span>
                <div>
                  <div className="font-semibold text-xs text-light uppercase tracking-wider">Support</div>
                  <a href="mailto:support@ngo.org" className="hover:text-primary transition-colors">support@ngo.org</a>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address & Map */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-base text-dark uppercase tracking-widest mb-2">
              Address
            </h4>
            <div className="flex gap-3 font-body text-sm text-medium leading-relaxed">
              <span className="text-lg">📍</span>
              <div>
                123 NGO Street<br />
                City, State<br />
                Country
              </div>
            </div>
            <div className="w-full h-32 rounded-xl overflow-hidden border border-border mt-2 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.123456!2d72.877!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzcuMiJF!5e0!3m2!1sen!2sin!4v1" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Office Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-light font-body">
          <p>© 2025 HopeRise Foundation. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
