/* =====================================================
   CAREERS.JS — الأنصار للمقاولات العامة
   Form handling + shared navbar + reveal
   ===================================================== */

(() => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const yearEl = document.getElementById('year');
  const appForm = document.getElementById('appForm');
  const formSuccess = document.getElementById('formSuccess');
  const resetFormBtn = document.getElementById('resetForm');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  // Mobile menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
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

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight;
        const pos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });

  // Scroll reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // APPLICATION FORM
  if (appForm) {
    appForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = appForm.querySelector('.form-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'جاري الإرسال...';
      submitBtn.disabled = true;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success
      appForm.classList.add('hidden');
      formSuccess.classList.remove('hidden');

      // Scroll to success
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      appForm.reset();
      formSuccess.classList.add('hidden');
      appForm.classList.remove('hidden');
    });
  }
})();