/* =====================================================
   INDEX.JS — الأنصار للمقاولات العامة
   Vanilla JS: Navbar, Scroll Reveal, Counters, Smooth Scroll
   ===================================================== */

(() => {
  // ========== SELECTORS ==========
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const hero = document.getElementById('hero');
  const yearEl = document.getElementById('year');

  // ========== YEAR ==========
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ========== NAVBAR SCROLL EFFECT ==========
  let lastScroll = 0;
  const onScrollNavbar = () => {
    const y = window.scrollY;
    if (y > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    lastScroll = y;
  };
  window.addEventListener('scroll', onScrollNavbar, { passive: true });
  onScrollNavbar();

  // ========== MOBILE MENU ==========
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ========== SCROLL REVEAL (IntersectionObserver) ==========
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ========== COUNTER ANIMATION ==========
  const statNums = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = current.toLocaleString('ar-EG') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('ar-EG') + suffix;
    }
    requestAnimationFrame(tick);
  }

  statNums.forEach(el => counterObserver.observe(el));

  // ========== PARALLAX HERO (subtle) ==========
  const heroBg = hero?.querySelector('.hero-bg img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < hero.offsetHeight) {
        heroBg.style.transform = `translateY(${y * 0.35}px)`;
      }
    }, { passive: true });
  }

  // ========== HERO SCROLL INDICATOR CLICK ==========
  const scrollBtn = document.querySelector('.hero-scroll');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      const nextSection = document.getElementById('aboutPreview');
      if (nextSection) {
        const offset = navbar.offsetHeight;
        const pos = nextSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  }
})();