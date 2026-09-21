'use strict';

document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.getElementById('menu');
const toggler = document.querySelector('.navbar-toggler');
const menuLinks = [...menu.querySelectorAll('a[href^="#"]')];
const closeMenu = () => {
  if (window.bootstrap && menu.classList.contains('show')) {
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  }
};
menuLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('show')) {
    closeMenu();
    toggler.focus();
  }
});
menu.addEventListener('shown.bs.collapse', () => toggler.setAttribute('aria-label', 'Fechar menu'));
menu.addEventListener('hidden.bs.collapse', () => toggler.setAttribute('aria-label', 'Abrir menu'));

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const elements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  if (!motionPreference.matches) {
    elements.forEach(element => {
      element.classList.add('is-pending');
      revealObserver.observe(element);
    });
  }
  motionPreference.addEventListener('change', () => {
    if (motionPreference.matches) {
      revealObserver.disconnect();
      elements.forEach(element => element.classList.remove('is-pending'));
    }
  });
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}
