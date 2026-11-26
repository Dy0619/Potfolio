(() => {
  const intro = document.querySelector('#book-intro');
  if (typeof intro?.showModal !== 'function') return;

  const replay = document.querySelector('#intro-replay');
  const cover = intro.querySelector('.intro-book');
  const open = intro.querySelector('.intro-open');
  const skip = intro.querySelector('.intro-skip');
  const title = document.querySelector('#section-title');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sessionKey = 'geunal-book-intro-seen';
  let replaying = false;

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
    if (restoreFocus) (replaying ? replay : title).focus({ preventScroll: true });
  }

  function openBook() {
    if (intro.dataset.turning) return;
    if (reduceMotion.matches) {
      dismiss();
      return;
    }

    cover.setAttribute('aria-disabled', 'true');
    open.setAttribute('aria-disabled', 'true');
    intro.dataset.turning = 'true';
  }

  cover.addEventListener('click', openBook);
  open.addEventListener('click', openBook);
  skip.addEventListener('click', () => dismiss());
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
  replay.hidden = false;
  replay.addEventListener('click', () => {
    replaying = true;
    intro.showModal();
  });

  if ((!location.hash || location.hash === '#home') && !hasVisited()) {
    intro.showModal();
  }
})();
