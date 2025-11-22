/**
 * Lenis Smooth Scrolling Initialization
 * Provides butter-smooth scrolling experience with momentum
 */

import Lenis from 'lenis';

// Global Lenis instance
let lenis: Lenis | null = null;

// Initialize Lenis
const initLenis = () => {
  // Destroy existing instance if any
  if (lenis) {
    lenis.destroy();
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    autoRaf: true,
    anchors: true, // Enable smooth scrolling to anchor links
  });

  // Expose lenis instance globally for other scripts
  (window as any).lenis = lenis;

  // Listen for scroll events (useful for debugging or syncing with other animations)
  lenis.on('scroll', () => {
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('lenis-scroll', {
      detail: {
        scroll: lenis?.scroll,
        velocity: lenis?.velocity,
        progress: lenis?.progress,
      }
    }));
  });

  // Add scroll velocity class to body for CSS-based effects
  lenis.on('scroll', () => {
    const velocity = Math.abs(lenis?.velocity || 0);
    document.body.classList.toggle('is-scrolling', velocity > 0.1);
    document.body.classList.toggle('is-scrolling-fast', velocity > 2);
  });
};

// Handle anchor links with smooth scroll
const setupAnchorLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#' && lenis) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target as HTMLElement, {
            offset: -80, // Account for fixed header
            duration: 1.5,
          });
        }
      }
    });
  });
};

// Scroll to top function
export const scrollToTop = () => {
  lenis?.scrollTo(0, { duration: 1.5 });
};

// Scroll to element function
export const scrollToElement = (selector: string, offset = -80) => {
  const element = document.querySelector(selector);
  if (element && lenis) {
    lenis.scrollTo(element as HTMLElement, { offset, duration: 1.5 });
  }
};

// Stop scrolling (useful for modals)
export const stopScroll = () => {
  lenis?.stop();
};

// Resume scrolling
export const startScroll = () => {
  lenis?.start();
};

// Get Lenis instance
export const getLenis = () => lenis;

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    setupAnchorLinks();
  });
} else {
  initLenis();
  setupAnchorLinks();
}

// Re-initialize on Astro page navigation
document.addEventListener('astro:page-load', () => {
  initLenis();
  setupAnchorLinks();
});

// Handle Astro view transitions
document.addEventListener('astro:after-swap', () => {
  if (lenis) {
    lenis.resize();
  }
});
