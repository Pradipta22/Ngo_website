/* ============================================================
   MAIN.JS — Global JavaScript
   Sticky header, mega menu, scroll animations, mobile menu,
   help button, search overlay, back-to-top, donation banner
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initScrollReveal();
  initMobileMenu();
  initHelpFloat();
  initSearchOverlay();
  initBackToTop();
  initDonateBanner();
  setActiveNavLink();
  initVideoModal();
  initTimelineProgress();
});

/* =========================
   STICKY HEADER
   ========================= */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check initial state
}

/* =========================
   SCROLL REVEAL ANIMATIONS
   ========================= */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* =========================
   MOBILE MENU
   ========================= */
function initMobileMenu() {
  const toggle = document.querySelector('.header__mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Handle submenu toggles
  const subMenuToggles = mobileNav.querySelectorAll('.mobile-nav__link[data-submenu]');
  subMenuToggles.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const submenuId = link.getAttribute('data-submenu');
      const submenu = document.getElementById(submenuId);
      if (submenu) {
        submenu.classList.toggle('active');
        const arrow = link.querySelector('.arrow');
        if (arrow) {
          arrow.style.transform = submenu.classList.contains('active') ? 'rotate(180deg)' : '';
        }
      }
    });
  });

  // Close mobile nav on link click
  const navLinks = mobileNav.querySelectorAll('.mobile-nav__submenu-link, .mobile-nav__link:not([data-submenu])');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* =========================
   HELP FLOATING BUTTON
   ========================= */
function initHelpFloat() {
  const helpFloat = document.querySelector('.help-float');
  if (!helpFloat) return;

  const btn = helpFloat.querySelector('.help-float__btn');

  btn.addEventListener('click', () => {
    helpFloat.classList.toggle('active');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!helpFloat.contains(e.target)) {
      helpFloat.classList.remove('active');
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      helpFloat.classList.remove('active');
    }
  });
}

/* =========================
   SEARCH OVERLAY
   ========================= */
function initSearchOverlay() {
  const searchBtn = document.querySelector('.header__search-btn');
  const overlay = document.querySelector('.search-overlay');
  if (!searchBtn || !overlay) return;

  const closeBtn = overlay.querySelector('.search-overlay__close');
  const input = overlay.querySelector('.search-overlay__input');

  searchBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    setTimeout(() => input?.focus(), 300);
    document.body.style.overflow = 'hidden';
  });

  const closeSearch = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (input) input.value = '';
  };

  closeBtn?.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSearch();
    }
  });
}

/* =========================
   BACK TO TOP
   ========================= */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =========================
   DONATION BANNER
   ========================= */
function initDonateBanner() {
  const banner = document.querySelector('.donate-banner');
  if (!banner) return;

  // Show after scrolling past hero
  setTimeout(() => {
    if (window.scrollY > 600) {
      banner.classList.add('visible');
    }
  }, 3000);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      banner.classList.add('visible');
    }
  }, { passive: true });

  const closeBtn = banner.querySelector('.donate-banner__close');
  closeBtn?.addEventListener('click', () => {
    banner.classList.remove('visible');
    banner.style.display = 'none';
  });
}

/* =========================
   ACTIVE NAV LINK
   ========================= */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.header__nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* =========================
   TOAST NOTIFICATIONS
   ========================= */
function showToast(message, type = 'success') {
  // Remove existing toasts
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* =========================
   SMOOTH SCROLL (for anchor links)
   ========================= */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  }
});

/* =========================
   VIDEO POPUP MODAL
   ========================= */
function initVideoModal() {
  const watchBtns = document.querySelectorAll('#watch-story-btn, .btn--video');
  const modal = document.getElementById('video-modal');
  if (!modal) return;
  const overlay = document.getElementById('video-modal-overlay');
  const closeBtn = document.getElementById('video-modal-close');
  const iframe = document.getElementById('video-iframe');
  if (!iframe) return;
  const originalSrc = iframe.src;

  watchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      iframe.src = originalSrc + (originalSrc.includes('?') ? '&' : '?') + 'autoplay=1';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    iframe.src = originalSrc; // Reset src to stop playback
  };

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* =========================
   INTERACTIVE TIMELINE
   ========================= */
function initTimelineProgress() {
  const timeline = document.querySelector('.timeline');
  const fill = document.querySelector('.timeline__progress-fill');
  const items = document.querySelectorAll('.timeline__item');
  if (!timeline || !fill || !items.length) return;

  const handleScroll = () => {
    const timelineRect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how much of the timeline is scrolled past the center of the viewport
    const triggerPoint = windowHeight * 0.55;
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    
    let progressHeight = triggerPoint - timelineTop;
    if (progressHeight < 0) progressHeight = 0;
    if (progressHeight > timelineHeight) progressHeight = timelineHeight;
    
    const percentage = (progressHeight / timelineHeight) * 100;
    fill.style.height = `${percentage}%`;
    
    // Highlight active items
    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerPoint) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger initially
}
