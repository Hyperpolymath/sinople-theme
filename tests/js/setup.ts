/**
 * Jest setup file
 *
 * @package Sinople
 */

// Mock window.sinople global
declare global {
  interface Window {
    sinople: {
      features: {
        viewTransitions: boolean;
        wasm: boolean;
        containerQueries: boolean;
        hasSelector: boolean;
        scrollTimeline: boolean;
      };
      ajaxurl: string;
      nonce: string;
    };
  }
}

window.sinople = {
  features: {
    viewTransitions: true,
    wasm: true,
    containerQueries: true,
    hasSelector: true,
    scrollTimeline: false,
  },
  ajaxurl: '/wp-admin/admin-ajax.php',
  nonce: 'test-nonce-123',
};

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as any;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any;
