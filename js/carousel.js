/* ============================================================
   CAROUSEL.JS — Hero Image Carousel
   Auto-slide, manual arrows, pagination dots, touch/swipe
   ============================================================ */

class HeroCarousel {
  constructor(element) {
    this.carousel = element;
    this.track = element.querySelector('.carousel__track');
    this.slides = [...element.querySelectorAll('.carousel__slide')];
    this.prevBtn = element.querySelector('.carousel__arrow--prev');
    this.nextBtn = element.querySelector('.carousel__arrow--next');
    this.dotsContainer = element.querySelector('.carousel__dots');

    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.autoplayInterval = null;
    this.autoplayDelay = 3000;
    this.isTransitioning = false;

    // Touch
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.minSwipeDistance = 50;

    this.init();
  }

  init() {
    this.createDots();
    this.bindEvents();
    this.goToSlide(0);
    this.startAutoplay();
  }

  createDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';

    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }

    this.dots = [...this.dotsContainer.querySelectorAll('.carousel__dot')];
  }

  bindEvents() {
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // Pause on hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoplay());

    // Touch events
    this.carousel.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.stopAutoplay();
    }, { passive: true });

    this.carousel.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
      this.startAutoplay();
    }, { passive: true });

    // Keyboard
    this.carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Pause when tab is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopAutoplay();
      } else {
        this.startAutoplay();
      }
    });
  }

  goToSlide(index) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    // Remove active from current
    this.slides[this.currentIndex]?.classList.remove('active');
    this.dots?.[this.currentIndex]?.classList.remove('active');

    // Update index
    this.currentIndex = ((index % this.totalSlides) + this.totalSlides) % this.totalSlides;

    // Add active to new slide
    this.slides[this.currentIndex]?.classList.add('active');
    this.dots?.[this.currentIndex]?.classList.add('active');

    // Update progress bar if exists
    const progress = this.carousel.querySelector('.carousel__progress-fill');
    if (progress) {
      progress.style.width = `${((this.currentIndex + 1) / this.totalSlides) * 100}%`;
    }

    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);
  }

  next() {
    this.goToSlide(this.currentIndex + 1);
  }

  prev() {
    this.goToSlide(this.currentIndex - 1);
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > this.minSwipeDistance) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => this.next(), this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(el => {
    new HeroCarousel(el);
  });
});
