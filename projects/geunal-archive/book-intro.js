(() => {
  const intro = document.querySelector('#book-intro');
  if (typeof intro?.showModal !== 'function') return;

  const cover = intro.querySelector('.intro-book');
  const open = intro.querySelector('.intro-open');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sessionKey = 'geunal-book-intro-seen';

  function hasVisited() {
    try {
      return sessionStorage.getItem(sessionKey) === '1';
    } catch {
      return false;
    }
  }

  function dismiss(restoreFocus = true) {
    if (!intro.open) return;
    try {
      sessionStorage.setItem(sessionKey, '1');
    } catch {
      // The intro still works when session storage is disabled.
    }

    intro.close();
    delete intro.dataset.turning;
    cover.removeAttribute('aria-disabled');
    open.removeAttribute('aria-disabled');
    if (restoreFocus) document.querySelector('#section-title')?.focus({ preventScroll: true });
  }

  function openBook() {
    if (intro.dataset.turning) return;
    if (reduceMotion.matches) {
      dismiss();
      return;
    }

    const book = cover.getBoundingClientRect();
    const viewport = intro.getBoundingClientRect();
    const centerX = viewport.left + (viewport.width - book.width) / 2 - book.left;
    const centerY = viewport.top + (viewport.height - book.height) / 2 - book.top;
    const zoom = Math.max(viewport.width / book.width, viewport.height / book.height) * 1.08;
    cover.style.setProperty('--intro-center-x', centerX + 'px');
    cover.style.setProperty('--intro-center-y', centerY + 'px');
    cover.style.setProperty('--intro-zoom', zoom);

    cover.setAttribute('aria-disabled', 'true');
    open.setAttribute('aria-disabled', 'true');
    intro.dataset.turning = 'true';
  }

  cover.addEventListener('click', openBook);
  open.addEventListener('click', openBook);
  intro.addEventListener('cancel', event => {
    event.preventDefault();
    dismiss();
  });
  for (const type of ['animationend', 'animationcancel']) {
    intro.addEventListener(type, event => {
      if (intro.dataset.turning && event.target === intro && event.animationName === 'intro-dissolve') dismiss();
    });
  }

  window.addEventListener('hashchange', () => dismiss(false));

  if ((!location.hash || location.hash === '#home') && !hasVisited()) {
    intro.showModal();
  }
})();
