/**
 * Tests for accessibility module
 *
 * @package Sinople
 */

import {
  initFontSizeControls,
  initThemeToggle,
  initContrastToggle,
  initKeyboardNavigation,
} from '../../assets/js/src/modules/accessibility';

describe('Accessibility Module', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="font-increase">A+</button>
      <button id="font-decrease">A-</button>
      <button id="font-reset">A</button>
      <button id="theme-toggle">Toggle Theme</button>
      <button id="contrast-toggle">High Contrast</button>
      <nav id="primary-navigation">
        <a href="/page1">Page 1</a>
        <a href="/page2">Page 2</a>
      </nav>
    `;
    localStorage.clear();
  });

  describe('Font Size Controls', () => {
    test('increases font scale when increase button clicked', () => {
      initFontSizeControls();

      const increaseBtn = document.getElementById('font-increase') as HTMLButtonElement;
      increaseBtn.click();

      const scale = document.documentElement.style.getPropertyValue('--text-scale');
      expect(parseFloat(scale)).toBeGreaterThan(1);
    });

    test('decreases font scale when decrease button clicked', () => {
      // First increase, then decrease
      initFontSizeControls();

      const increaseBtn = document.getElementById('font-increase') as HTMLButtonElement;
      const decreaseBtn = document.getElementById('font-decrease') as HTMLButtonElement;

      increaseBtn.click();
      increaseBtn.click();
      decreaseBtn.click();

      const scale = document.documentElement.style.getPropertyValue('--text-scale');
      expect(parseFloat(scale)).toBeLessThan(1.2);
    });

    test('resets font scale when reset button clicked', () => {
      initFontSizeControls();

      const increaseBtn = document.getElementById('font-increase') as HTMLButtonElement;
      const resetBtn = document.getElementById('font-reset') as HTMLButtonElement;

      increaseBtn.click();
      increaseBtn.click();
      resetBtn.click();

      const scale = document.documentElement.style.getPropertyValue('--text-scale');
      expect(scale).toBe('1');
    });

    test('persists font scale to localStorage', () => {
      initFontSizeControls();

      const increaseBtn = document.getElementById('font-increase') as HTMLButtonElement;
      increaseBtn.click();

      expect(localStorage.getItem('sinople_font_scale')).toBeTruthy();
    });

    test('respects minimum font scale (0.8)', () => {
      initFontSizeControls();

      const decreaseBtn = document.getElementById('font-decrease') as HTMLButtonElement;

      // Click many times
      for (let i = 0; i < 10; i++) {
        decreaseBtn.click();
      }

      const scale = parseFloat(document.documentElement.style.getPropertyValue('--text-scale'));
      expect(scale).toBeGreaterThanOrEqual(0.8);
    });

    test('respects maximum font scale (1.5)', () => {
      initFontSizeControls();

      const increaseBtn = document.getElementById('font-increase') as HTMLButtonElement;

      // Click many times
      for (let i = 0; i < 10; i++) {
        increaseBtn.click();
      }

      const scale = parseFloat(document.documentElement.style.getPropertyValue('--text-scale'));
      expect(scale).toBeLessThanOrEqual(1.5);
    });
  });

  describe('Theme Toggle', () => {
    test('toggles theme when button clicked', () => {
      initThemeToggle();

      const toggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement;
      const initialTheme = document.documentElement.dataset.theme || 'light';

      toggleBtn.click();

      const newTheme = document.documentElement.dataset.theme;
      expect(newTheme).not.toBe(initialTheme);
    });

    test('persists theme preference to localStorage', () => {
      initThemeToggle();

      const toggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement;
      toggleBtn.click();

      expect(localStorage.getItem('sinople_theme')).toBeTruthy();
    });

    test('respects system preference if no saved preference', () => {
      // Mock prefers-color-scheme: dark
      window.matchMedia = jest.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      initThemeToggle();

      expect(document.documentElement.dataset.theme).toBe('dark');
    });
  });

  describe('Contrast Toggle', () => {
    test('toggles high contrast mode', () => {
      initContrastToggle();

      const toggleBtn = document.getElementById('contrast-toggle') as HTMLButtonElement;
      toggleBtn.click();

      expect(document.documentElement.dataset.contrast).toBe('high');
    });

    test('persists contrast preference', () => {
      initContrastToggle();

      const toggleBtn = document.getElementById('contrast-toggle') as HTMLButtonElement;
      toggleBtn.click();

      expect(localStorage.getItem('sinople_contrast')).toBe('high');
    });
  });

  describe('Keyboard Navigation', () => {
    test('highlights focusable elements on tab', () => {
      initKeyboardNavigation();

      const link = document.querySelector('nav a') as HTMLAnchorElement;
      link.focus();

      // Simulate tab key
      const event = new KeyboardEvent('keydown', { key: 'Tab' });
      document.dispatchEvent(event);

      expect(document.body.classList.contains('keyboard-nav-active')).toBe(true);
    });

    test('removes keyboard nav class on mouse click', () => {
      initKeyboardNavigation();

      // Activate keyboard nav
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      document.dispatchEvent(tabEvent);

      expect(document.body.classList.contains('keyboard-nav-active')).toBe(true);

      // Click mouse
      const clickEvent = new MouseEvent('mousedown');
      document.dispatchEvent(clickEvent);

      expect(document.body.classList.contains('keyboard-nav-active')).toBe(false);
    });
  });
});
