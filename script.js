// Ryu Hakone Steak House - Modern Editorial Website

const THEME_STORAGE_KEY = 'ryu-theme';
const themeToggle = document.querySelector('.theme-toggle');
const themeSensitiveLogos = document.querySelectorAll('.hero-mark, .footer-logo');
const lightLogoSrc = 'Untitled%20design.svg';
const darkLogoSrc = lightLogoSrc;

function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  themeSensitiveLogos.forEach((logo) => {
    logo.setAttribute('src', theme === 'dark' ? darkLogoSrc : lightLogoSrc);
  });

  if (themeToggle) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} mode`);

    const label = themeToggle.querySelector('.theme-toggle-label');
    if (label) {
      label.textContent = nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1);
    }
  }
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(savedTheme || getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

const scrollToggle = document.querySelector('.scroll-toggle');

// Add scroll animation to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

function updateScrollToggle(currentScroll = window.pageYOffset) {
  if (!scrollToggle) {
    return;
  }

  scrollToggle.classList.add('is-visible');

  if (currentScroll <= 80) {
    scrollToggle.setAttribute('aria-label', 'Scroll to bottom');
    scrollToggle.setAttribute('title', 'Scroll to bottom');
    scrollToggle.querySelector('.scroll-toggle-icon').textContent = '↓';
    return;
  }

  scrollToggle.setAttribute('aria-label', 'Scroll to top');
  scrollToggle.setAttribute('title', 'Scroll to top');
  scrollToggle.querySelector('.scroll-toggle-icon').textContent = '↑';
}

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    const themedShadow = getComputedStyle(document.documentElement).getPropertyValue('--shadow-nav').trim();
    navbar.style.boxShadow = `0 2px 20px ${themedShadow || 'rgba(0, 0, 0, 0.1)'}`;
    navbar.classList.add('scrolled');
  } else {
    navbar.style.boxShadow = 'none';
    navbar.classList.remove('scrolled');
  }

  updateScrollToggle(currentScroll);
  
  lastScroll = currentScroll;
});

if (scrollToggle) {
  scrollToggle.addEventListener('click', () => {
    const isAtTop = window.pageYOffset <= 80;
    const targetPosition = isAtTop ? document.documentElement.scrollHeight - window.innerHeight : 0;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: 'smooth'
    });
  });

  updateScrollToggle();
}

// Intersection Observer for fade-in animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections for animation with slight stagger
const revealTargets = document.querySelectorAll('.story-container, .story-image-large, .story-image-small, .vision-container, .vision-panel, .value-item, .menu-container, .menu-item, .drinks-menu, .menu-note, .location-container, .location-address, .location-map, .showcase-header');
revealTargets.forEach((el, index) => {
  if (prefersReducedMotion) {
    el.style.opacity = '1';
    el.style.transform = 'none';
    return;
  }

  const delay = Math.min(index * 70, 280);
  el.style.opacity = '0';
  el.style.transform = 'translateY(34px) scale(0.985)';
  el.style.transition = `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
  observer.observe(el);
});

// Hero image parallax effect (subtle)
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  window.addEventListener('scroll', () => {
    if (prefersReducedMotion) {
      return;
    }

    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.14;
    const scale = Math.max(0.78, 1 - scrolled * 0.00045);
    heroImage.style.transform = `translateY(${parallax}px) scale(${scale})`;
  });
}

console.log('Ryu Hakone Steak House - Website loaded successfully');
