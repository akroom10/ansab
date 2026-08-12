/* =====================================================
   NEWS.JS — الأنصار للمقاولات العامة
   Load more + newsletter + shared navbar + reveal
   ===================================================== */

(() => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const yearEl = document.getElementById('year');
  const loadMoreBtn = document.getElementById('loadMore');
  const newsletterForm = document.getElementById('newsletterForm');

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

  // LOAD MORE (demo)
  let loadCount = 0;
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadCount++;
      loadMoreBtn.textContent = 'جاري التحميل...';
      loadMoreBtn.disabled = true;

      setTimeout(() => {
        if (loadCount >= 2) {
          loadMoreBtn.textContent = 'لا توجد أخبار إضافية (تجريبي)';
          loadMoreBtn.classList.remove('btn-primary');
          loadMoreBtn.classList.add('btn-ghost');
          loadMoreBtn.disabled = true;
        } else {
          loadMoreBtn.textContent = 'تحميل المزيد';
          loadMoreBtn.disabled = false;
        }
      }, 1000);
    });
  }

  // NEWSLETTER FORM
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      const input = newsletterForm.querySelector('input');
      const originalText = btn.textContent;
      btn.textContent = 'جاري الاشتراك...';
      btn.disabled = true;
      input.disabled = true;

      await new Promise(resolve => setTimeout(resolve, 1000));

      btn.textContent = 'تم الاشتراك ✓';
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-ghost');
      input.value = '';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('btn-ghost');
        btn.classList.add('btn-primary');
        btn.disabled = false;
        input.disabled = false;
      }, 3000);
    });
  }
})();