/**
 * Accessibility Module
 *
 * Font sizing, theme toggle, high contrast mode,
 * and keyboard navigation enhancements.
 */

/**
 * Initialize accessibility features
 */
export function initAccessibility(): void {
  initFontSizeControls();
  initThemeToggle();
  initContrastToggle();
  initKeyboardNavigation();
  initSkipLinks();
}

/**
 * Font size controls (WCAG AAA)
 */
function initFontSizeControls(): void {
  const decreaseBtn = document.getElementById('font-size-decrease');
  const increaseBtn = document.getElementById('font-size-increase');

  if (!decreaseBtn || !increaseBtn) return;

  let currentScale = parseFloat(localStorage.getItem('font-scale') || '1');
  applyFontScale(currentScale);

  decreaseBtn.addEventListener('click', () => {
    currentScale = Math.max(0.8, currentScale - 0.1);
    applyFontScale(currentScale);
    localStorage.setItem('font-scale', currentScale.toString());
  });

  increaseBtn.addEventListener('click', () => {
    currentScale = Math.min(1.5, currentScale + 0.1);
    applyFontScale(currentScale);
    localStorage.setItem('font-scale', currentScale.toString());
  });
}

/**
 * Apply font scale to document
 */
function applyFontScale(scale: number): void {
  document.documentElement.style.setProperty('--text-scale', scale.toString());
}

/**
 * Theme toggle (dark/light mode)
 */
function initThemeToggle(): void {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Get initial theme
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (systemDark ? 'dark' : 'light');

  applyTheme(currentTheme);
  updateThemeButton(toggleBtn, currentTheme);

  // Toggle on click
  toggleBtn.addEventListener('click', () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    updateThemeButton(toggleBtn, newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/**
 * Apply theme to document
 */
function applyTheme(theme: string): void {
  document.documentElement.dataset.theme = theme;
}

/**
 * Update theme toggle button state
 */
function updateThemeButton(button: HTMLElement, theme: string): void {
  button.setAttribute('aria-pressed', (theme === 'dark').toString());
  button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

/**
 * High contrast toggle
 */
function initContrastToggle(): void {
  const toggleBtn = document.getElementById('contrast-toggle');
  if (!toggleBtn) return;

  const savedContrast = localStorage.getItem('contrast');
  if (savedContrast === 'high') {
    document.documentElement.dataset.contrast = 'high';
    toggleBtn.setAttribute('aria-pressed', 'true');
  }

  toggleBtn.addEventListener('click', () => {
    const isHigh = document.documentElement.dataset.contrast === 'high';
    if (isHigh) {
      delete document.documentElement.dataset.contrast;
      toggleBtn.setAttribute('aria-pressed', 'false');
      localStorage.removeItem('contrast');
    } else {
      document.documentElement.dataset.contrast = 'high';
      toggleBtn.setAttribute('aria-pressed', 'true');
      localStorage.setItem('contrast', 'high');
    }
  });
}

/**
 * Enhanced keyboard navigation
 */
function initKeyboardNavigation(): void {
  // Trap focus in modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
      if (openModal) {
        closeModal(openModal as HTMLElement);
      }
    }
  });

  // Focus management for menu toggle
  const menuToggle = document.querySelector('.menu-toggle') as HTMLButtonElement;
  const menu = document.getElementById('primary-menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', (!isExpanded).toString());
      menu.classList.toggle('is-open');

      if (!isExpanded) {
        const firstLink = menu.querySelector('a') as HTMLAnchorElement;
        firstLink?.focus();
      }
    });
  }
}

/**
 * Skip links visibility
 */
function initSkipLinks(): void {
  const skipLinks = document.querySelectorAll('.skip-link');

  skipLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href') || '');
      if (target) {
        (target as HTMLElement).focus();
        (target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Close modal helper
 */
function closeModal(modal: HTMLElement): void {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('is-open');

  const trigger = document.querySelector(`[aria-controls="${modal.id}"]`) as HTMLElement;
  trigger?.focus();
}
