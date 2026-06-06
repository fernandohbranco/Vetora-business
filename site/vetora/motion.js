/* VETORA — Motion System */
(function () {
  'use strict';

  // ── Scroll progress bar ──────────────────────────────────
  var bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  // ── Nav ──────────────────────────────────────────────────
  var nav = document.querySelector('nav');

  // ── Hamburger ────────────────────────────────────────────
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // ── Scroll handler ───────────────────────────────────────
  function onScroll() {
    var scrollY = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? (scrollY / max * 100) + '%' : '0%';
    if (nav) nav.classList.toggle('scrolled', scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── IntersectionObserver: scroll reveals ─────────────────
  // Hero entrance is handled by CSS animations — skip .hero descendants
  var revealEls = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-fade, .reveal-stagger'
  );
  if (revealEls.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      if (!el.closest('.hero')) obs.observe(el);
    });
  }

  // ── Method connecting-line draw animation ────────────────
  var metodSteps = document.querySelector('.metodo-steps');
  if (metodSteps) {
    var lineObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('line-visible');
          lineObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    lineObs.observe(metodSteps);
  }

  // ── Count-up animation ───────────────────────────────────
  var countEls = document.querySelectorAll('.count-up');
  if (countEls.length) {
    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          runCount(e.target);
          countObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    countEls.forEach(function (el) {
      el.dataset.target = el.textContent.trim();
      countObs.observe(el);
    });
  }

  function runCount(el) {
    var target   = parseFloat(el.dataset.target);
    if (isNaN(target)) return;
    var duration = 1400;
    var suffix   = el.dataset.suffix || '';
    var prefix   = el.dataset.prefix || '';
    var isInt    = Number.isInteger(target);
    var start    = performance.now();
    function step(now) {
      var p     = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val   = eased * target;
      el.textContent = prefix + (isInt ? Math.round(val) : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

})();
