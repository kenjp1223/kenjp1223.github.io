/* Theme toggle, abstract toggles, mobile nav. No dependencies. */
(function () {
  'use strict';

  // ---- theme -------------------------------------------------------------
  var root = document.documentElement;
  var btn = document.querySelector('.theme');

  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    });
  }

  // ---- abstract toggles --------------------------------------------------
  document.querySelectorAll('.btn-abs').forEach(function (b) {
    b.addEventListener('click', function () {
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      if (!panel) return;
      var open = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });

  // ---- mobile nav --------------------------------------------------------
  var nt = document.querySelector('.navtoggle');
  var nav = document.querySelector('.nav');
  if (nt && nav) {
    nt.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      nt.setAttribute('aria-expanded', String(open));
    });
  }
})();
