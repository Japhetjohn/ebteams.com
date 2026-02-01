// EBteam Website - Main JavaScript

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle hamburger animation
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if href is just "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Newsletter Form Validation
const newsletterForm = document.querySelector('.footer__newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = newsletterForm.querySelector('.footer__input');
    const email = emailInput.value.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert('Please enter your email address');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Success (in production, this would send to backend)
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
  });
}

// Lazy Loading for Images (if browser doesn't support native lazy loading)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Add scroll event for header shadow on scroll
const header = document.querySelector('.header');

if (header) {
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled down
    if (currentScroll > 10) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
  });
}

// Scroll animations (Fade in on scroll)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in animation to cards and sections
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(`
    .statistics__card,
    .service-section,
    .features__card,
    .testimonials__card,
    .blog__card
  `);

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
  });
});

// Console welcome message
console.log('%cWelcome to EBteam! 🌍', 'color: #2158E1; font-size: 20px; font-weight: bold;');
console.log('%cYour Global Application Without the Complexity', 'color: #828282; font-size: 14px;');

// CountUp Animation
const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    // Add 'k' or '%' suffix logic if needed, here we just show numbers
    // For '1000' we might want to show '1k+' but for now keeping it simple or matching design

    // Handle specific formatting for 1000 -> 1k+ or similar if desired, 
    // but based on design usually it's just the number.
    // Let's add simple formatting:
    let current = Math.floor(progress * (end - start) + start);

    if (end > 999) {
      obj.innerHTML = (current / 1000).toFixed(1).replace('.0', '') + 'k+';
    } else {
      obj.innerHTML = current + (obj.dataset.suffix || '');
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      // Ensure final value is accurate
      if (end > 999) {
        obj.innerHTML = (end / 1000).toFixed(1).replace('.0', '') + 'k+';
      } else {
        obj.innerHTML = end + (obj.dataset.suffix || '');
      }
    }
  };
  window.requestAnimationFrame(step);
};

// Intersection Observer for Statistics
const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      // Check for '%' in next sibling or similar if needed, 
      // but let's assume we modify HTML to include suffix data attribute if needed.
      // For now, I'll update the HTML replace to include suffixes for the % case.

      // Actually, looking at my HTML replace, I didn't add data-suffix.
      // Let's just do raw numbers for now and tweak if needed.

      // Wait, 98% is one of them.
      // Let's quick-fix the HTML replace in next step if I missed suffixes, 
      // OR handle it here.

      let suffix = '';
      const label = entry.target.nextElementSibling.textContent;
      if (label.includes('%')) suffix = '%';

      entry.target.dataset.suffix = suffix; // Store it

      animateValue(entry.target, 0, target, 2000);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.statistics__number').forEach(el => {
  statsObserver.observe(el);
});
