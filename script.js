const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainnav');
menuButton?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));
const form = document.querySelector('#waitlistForm');
const result = document.querySelector('#formResult');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  result.textContent = `Thank you, ${data.get('firstName')}. Your demo form is complete. No information has been sent or stored by a server.`;
  result.classList.add('visible');
});


// Accessible scroll-reveal motion (content remains visible when reduced motion is preferred).
const revealTargets = document.querySelectorAll('.section, .disclosure, .asset-card, .passport-card, .framework-grid article, .waitlist-form, .principle-row, .final-cta, .media-world-top, .media-tile, .media-note');
revealTargets.forEach(element => element.classList.add('reveal-ready'));
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}


// Client-supplied reference screen lightbox.
const lightbox = document.querySelector('#imageLightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('p');
  const closeLightbox = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; };
  document.querySelectorAll('.reference-screen').forEach(button => button.addEventListener('click', () => {
    lightboxImg.src = button.dataset.image;
    lightboxImg.alt = button.querySelector('b')?.textContent || 'Reference image';
    lightboxCaption.textContent = button.dataset.title || '';
    lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false');
  }));
  lightbox.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
}
