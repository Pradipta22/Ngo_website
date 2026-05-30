/* ============================================================
   COUNTERS.JS — Animated Statistics Counters
   IntersectionObserver-triggered count-up animation
   ============================================================ */

class AnimatedCounter {
  constructor(element) {
    this.element = element;
    this.target = parseInt(element.getAttribute('data-target'), 10) || 0;
    this.suffix = element.getAttribute('data-suffix') || '';
    this.prefix = element.getAttribute('data-prefix') || '';
    this.duration = parseInt(element.getAttribute('data-duration'), 10) || 2000;
    this.animated = false;
  }

  animate() {
    if (this.animated) return;
    this.animated = true;

    const start = 0;
    const end = this.target;
    const duration = this.duration;
    const startTime = performance.now();

    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = Math.floor(start + (end - start) * easedProgress);

      this.element.textContent = this.prefix + this.formatNumber(current) + this.suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }

  formatNumber(num) {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  }
}

// Initialize counters with IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const counterElements = document.querySelectorAll('[data-counter]');
  if (!counterElements.length) return;

  const counters = [...counterElements].map(el => new AnimatedCounter(el));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = counters.find(c => c.element === entry.target);
        if (counter) {
          // Add small delay based on index for stagger effect
          const index = counters.indexOf(counter);
          setTimeout(() => counter.animate(), index * 150);
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  counterElements.forEach(el => observer.observe(el));
});
