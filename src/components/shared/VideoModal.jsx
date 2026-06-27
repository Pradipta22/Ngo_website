import React, { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/85 backdrop-blur-md transition-opacity duration-300">
      {/* Click outside to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 animate-fade-in-scale">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 text-xl font-semibold transition-all duration-200 hover:rotate-90 z-20"
          aria-label="Close modal"
        >
          ✕
        </button>
        
        <div className="w-full h-full">
          <iframe 
            src="https://www.youtube.com/embed/s7iSntfCsp8?autoplay=1"
            className="w-full h-full border-0"
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            title="NGO Story Video"
          />
        </div>
      </div>
    </div>
  );
}
