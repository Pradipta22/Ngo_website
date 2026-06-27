import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: 'images/hero/slide1.png',
    label: '🌱 Making a Difference',
    title: <>Transforming Lives<br />Through Education</>,
    text: 'Together we create opportunities for underserved communities to learn, grow, and build brighter futures.',
    primaryBtn: { text: 'Donate Now →', href: '#donations' },
    secondaryBtn: { text: 'Learn More', href: '/about' },
    stats: [
      { number: '500,000+', label: 'Lives Impacted' },
      { number: '1,200+', label: 'Villages Reached' },
      { number: '5,000+', label: 'Volunteers' }
    ]
  },
  {
    image: 'images/hero/slide2.png',
    label: '🤝 Stronger Together',
    title: <>Empowering<br />Communities</>,
    text: 'Creating sustainable impact through education, health, and livelihood programs that uplift entire communities.',
    primaryBtn: { text: 'Donate Now →', href: '#donations' },
    secondaryBtn: { text: 'Volunteer', href: '/contact#volunteer' },
    stats: [
      { number: '500,000+', label: 'Lives Impacted' },
      { number: '300+', label: 'Active Projects' },
      { number: '1,200+', label: 'Villages Reached' }
    ]
  },
  {
    image: 'images/hero/slide3.png',
    label: '❤️ Your Support Matters',
    title: <>Every Contribution<br />Matters</>,
    text: 'Your support helps us reach more children and families, creating lasting change in their lives.',
    primaryBtn: { text: 'Donate Today →', href: '#donations' },
    secondaryBtn: { text: 'Success Stories', href: '#timeline' },
    stats: [
      { number: '500,000+', label: 'Lives Impacted' },
      { number: '5,000+', label: 'Volunteers' },
      { number: '300+', label: 'Active Projects' }
    ]
  }
];

export default function HeroCarousel({ onWatchVideo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance slides every 5 seconds (5000ms)
  useEffect(() => {
    setProgress(0);
    const intervalTime = 50; // increment step in ms
    const totalDuration = 5000;
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIdx) => (prevIdx + 1) % SLIDES.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handleDotClick = (idx) => {
    setCurrentIndex(idx);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('why-change');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBtnScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="carousel" id="hero" aria-label="Hero Carousel">
      <div className="relative w-full h-full min-h-[100vh] max-h-[900px] overflow-hidden">
        {SLIDES.map((slide, idx) => (
          <div 
            key={idx} 
            className={`carousel__slide absolute inset-0 ${idx === currentIndex ? 'active' : ''}`}
          >
            {/* Ken Burns zoom background */}
            <div 
              className="carousel__slide-bg absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Soft gradient overlay */}
            <div className="carousel__slide-overlay absolute inset-0" />
            
            {/* Slide content container */}
            <div className="carousel__slide-content relative z-10 container mx-auto px-6 h-full flex flex-col justify-center max-w-4xl text-white">
              <div className="carousel__slide-label inline-block text-sm font-semibold tracking-wider text-primary mb-4 bg-black/30 border border-white/10 px-3 py-1 rounded-full w-max">
                {slide.label}
              </div>
              <h1 className="carousel__slide-title text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 font-display">
                {slide.title}
              </h1>
              <p className="carousel__slide-text text-base sm:text-lg md:text-xl text-white/80 font-light mb-8 max-w-2xl font-body leading-relaxed">
                {slide.text}
              </p>
              
              {/* Buttons */}
              <div className="carousel__slide-buttons flex flex-wrap gap-4 items-center mb-10">
                <a 
                  href={slide.primaryBtn.href} 
                  onClick={(e) => handleBtnScroll(e, slide.primaryBtn.href)}
                  className="bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                  {slide.primaryBtn.text}
                </a>
                
                {slide.secondaryBtn.href.startsWith('#') ? (
                  <a 
                    href={slide.secondaryBtn.href}
                    onClick={(e) => handleBtnScroll(e, slide.secondaryBtn.href)}
                    className="border border-white/30 bg-white/5 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm active:scale-95"
                  >
                    {slide.secondaryBtn.text}
                  </a>
                ) : (
                  <Link 
                    to={slide.secondaryBtn.href}
                    className="border border-white/30 bg-white/5 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm active:scale-95"
                  >
                    {slide.secondaryBtn.text}
                  </Link>
                )}

                <button 
                  onClick={onWatchVideo}
                  className="flex items-center gap-2 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest py-3.5 px-4 active:scale-95 group"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-dark group-hover:bg-primary group-hover:text-white transition-colors">▶</span> 
                  Watch Our Story
                </button>
              </div>

              {/* Floating Stat badges */}
              <div className="hero-stats grid grid-cols-3 gap-4 md:gap-8 max-w-xl border-t border-white/10 pt-6">
                {slide.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-none font-display">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-white/60 font-body font-medium mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Arrows */}
      <button 
        className="carousel__arrow carousel__arrow--prev flex items-center justify-center" 
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button 
        className="carousel__arrow carousel__arrow--next flex items-center justify-center" 
        onClick={handleNext}
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-10 flex gap-2 z-20">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`carousel__dot ${idx === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="carousel__progress absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div 
          className="carousel__progress-fill h-full bg-primary transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mouse scroll down indicator */}
      <button 
        onClick={handleScrollDown}
        className="carousel__scroll-indicator flex flex-col items-center gap-2 cursor-pointer outline-none border-none text-white/70 hover:text-white transition-colors"
      >
        <div className="carousel__scroll-mouse"></div>
        <span className="text-xs uppercase tracking-widest font-semibold font-body">Scroll Down</span>
      </button>
    </section>
  );
}
