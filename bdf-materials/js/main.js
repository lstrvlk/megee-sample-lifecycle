/**
 * bdf 贝多芬新材料 — Dynamic Effects v2.0
 * Hero parallax + mouse tracking + scroll fade-in + counter + nav highlight
 */
(function () {
  'use strict';

  /* ═══════════════════════════════════════
     1. Hero — Parallax + Mouse Tracking
     ═══════════════════════════════════════ */
  var hero = document.querySelector('.hero');
  var glow1 = hero && hero.querySelector('.hero-glow-1');
  var glow2 = hero && hero.querySelector('.hero-glow-2');
  var mouseX = 0, mouseY = 0, ticking = false;

  /* Random flowing color field. The original hero remains the fallback. */
  var fluidCanvas = document.getElementById('heroFluid');
  var fluidContext = fluidCanvas && fluidCanvas.getContext('2d', { alpha: false });
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fluidPalettes = [
    ['#102B52', '#F05A4F', '#F2B84B', '#25B8A7', '#6757D9'],
    ['#102B52', '#E65396', '#F37A43', '#3D75DB', '#35BDA5'],
    ['#102B52', '#8B52D4', '#ED5B51', '#DEB94B', '#2FA4C2'],
    ['#102B52', '#26B59F', '#4A68D5', '#E45386', '#ED974B']
  ];
  var fluidPalette = fluidPalettes[Math.floor(Math.random() * fluidPalettes.length)];
  var fluidBlobs = fluidPalette.slice(1).map(function (color, index) {
    return {
      color: color,
      x: 0.18 + Math.random() * 0.64,
      y: 0.16 + Math.random() * 0.68,
      radius: 0.3 + Math.random() * 0.2,
      speed: 0.00009 + Math.random() * 0.00007,
      phase: Math.random() * Math.PI * 2,
      orbit: 0.06 + index * 0.018
    };
  });

  function resizeFluid() {
    if (!fluidCanvas || !fluidContext) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    fluidCanvas.width = Math.round(fluidCanvas.clientWidth * dpr);
    fluidCanvas.height = Math.round(fluidCanvas.clientHeight * dpr);
    fluidContext.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFluid(time) {
    if (!fluidCanvas || !fluidContext) return;
    var width = fluidCanvas.clientWidth;
    var height = fluidCanvas.clientHeight;
    fluidContext.fillStyle = fluidPalette[0];
    fluidContext.fillRect(0, 0, width, height);
    fluidContext.globalCompositeOperation = 'screen';

    fluidBlobs.forEach(function (blob, index) {
      var movement = reduceMotion ? 0 : time * blob.speed;
      var x = (blob.x + Math.sin(movement + blob.phase) * blob.orbit) * width;
      var y = (blob.y + Math.cos(movement * 0.78 + blob.phase) * blob.orbit) * height;
      var pulse = 1 + Math.sin(movement * 1.3 + index) * 0.08;
      var radius = blob.radius * Math.max(width, height) * pulse;
      var gradient = fluidContext.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, blob.color + 'E6');
      gradient.addColorStop(0.38, blob.color + '9C');
      gradient.addColorStop(1, blob.color + '00');
      fluidContext.fillStyle = gradient;
      fluidContext.beginPath();
      fluidContext.arc(x, y, radius, 0, Math.PI * 2);
      fluidContext.fill();
    });

    fluidContext.globalCompositeOperation = 'source-over';
    if (!reduceMotion) requestAnimationFrame(drawFluid);
  }

  if (fluidCanvas && fluidContext) {
    resizeFluid();
    drawFluid(0);
    window.addEventListener('resize', resizeFluid, { passive: true });
  }

  function updateGlow() {
    if (!glow1 || !glow2) return;
    var scrollOffset = window.scrollY * 0.04;
    glow1.style.transform = 'translate(' + (mouseX * 30) + 'px, ' + (mouseY * 30 + scrollOffset) + 'px)';
    glow2.style.transform = 'translate(' + (-mouseX * 20) + 'px, ' + (-mouseY * 20 - scrollOffset * 0.6) + 'px)';
    ticking = false;
  }

  function onMouseMove(e) {
    if (!hero) return;
    var rect = hero.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    if (!ticking) { ticking = true; requestAnimationFrame(updateGlow); }
  }

  function onScrollGlow() {
    if (!ticking) { ticking = true; requestAnimationFrame(updateGlow); }
  }

  if (hero) {
    hero.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScrollGlow, { passive: true });
  }

  /* ═══════════════════════════════════════
     2. Nav — Scroll Effect + Mobile Toggle
     ═══════════════════════════════════════ */
  var nav = document.getElementById('nav');

  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  var toggle = document.getElementById('navToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      if (nav) nav.classList.toggle('open');
    });
  }

  var navLinkEls = document.querySelectorAll('.nav-links a');
  navLinkEls.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav) nav.classList.remove('open');
    });
  });

  /* ═══════════════════════════════════════
     3. Scroll Fade-In — Intersection Observer
     ═══════════════════════════════════════ */
  var fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  // Observe all .anim-fade elements
  document.querySelectorAll('.anim-fade').forEach(function (el) {
    fadeObserver.observe(el);
  });

  // Observe grid children — auto-add anim-fade with staggered delays
  document.querySelectorAll('.anim-grid').forEach(function (grid) {
    var children = grid.children;
    for (var i = 0; i < children.length; i++) {
      children[i].classList.add('anim-fade');
      children[i].style.setProperty('--stagger', (i * 0.08) + 's');
      fadeObserver.observe(children[i]);
    }
  });

  /* ═══════════════════════════════════════
     4. Number Counter — easeOutExpo
     ═══════════════════════════════════════ */
  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var card = entry.target;
      var counterSpan = card.querySelector('.cap-counter');
      var target = parseInt(card.getAttribute('data-count'), 10);
      if (!counterSpan || isNaN(target)) return;

      var duration = 1600;
      var startTime = performance.now();

      function tick(now) {
        var elapsed = now - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var eased = easeOutExpo(progress);
        counterSpan.textContent = Math.round(target * eased);
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(card);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.cap-number[data-count]').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* ═══════════════════════════════════════
     5. Navigation Active Highlight
     ═══════════════════════════════════════ */
  var sections = document.querySelectorAll('section[id], footer[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  var navObserver = new IntersectionObserver(function (entries) {
    // Find the entry with the highest intersection ratio
    var best = null;
    entries.forEach(function (e) {
      if (!best || e.intersectionRatio > best.intersectionRatio) {
        best = e;
      }
    });
    if (!best || best.intersectionRatio < 0.15) return;

    var id = best.target.id;
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      link.classList.toggle('nav-active', href === '#' + id);
    });
  }, { threshold: [0, 0.15, 0.3, 0.5, 0.7] });

  sections.forEach(function (section) {
    navObserver.observe(section);
  });

})();
