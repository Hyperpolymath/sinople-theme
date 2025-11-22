/**
 * Sinople Theme - Main JavaScript Entry Point
 *
 * TypeScript module for progressive enhancement,
 * accessibility features, and modern browser APIs.
 *
 * @package Sinople
 * @since 0.1.0
 */

import { initAccessibility } from './modules/accessibility';
import { initViewTransitions } from './modules/view-transitions';
import { initWebComponents } from './modules/web-components';
import { loadWASM } from './modules/wasm-loader';

declare global {
  interface Window {
    sinople: {
      ajaxUrl: string;
      nonce: string;
      themeUri: string;
      homeUrl: string;
      isRTL: boolean;
      i18n: Record<string, string>;
      features: {
        wasm: boolean;
        serviceWorker: boolean;
        viewTransitions: boolean;
        prefersReducedMotion: boolean;
      };
      endpoints: {
        void: string;
        ndjson: string;
        capnproto: string;
      };
    };
  }
}

/**
 * Initialize theme functionality
 */
async function init(): Promise<void> {
  // Check if sinople object is available
  if (typeof window.sinople === 'undefined') {
    console.error('Sinople: Configuration object not found');
    return;
  }

  console.log('🌿 Sinople theme initializing...');

  // Initialize accessibility features (critical)
  initAccessibility();

  // Initialize View Transitions API if supported
  if (window.sinople.features.viewTransitions) {
    initViewTransitions();
  }

  // Load WASM module if supported
  if (window.sinople.features.wasm) {
    try {
      await loadWASM();
      console.log('✓ WASM module loaded');
    } catch (error) {
      console.warn('WASM module failed to load:', error);
    }
  }

  // Initialize web components
  initWebComponents();

  // Feature detection
  detectFeatures();

  console.log('✓ Sinople theme initialized');
}

/**
 * Detect and add feature classes to HTML element
 */
function detectFeatures(): void {
  const html = document.documentElement;
  const features: Record<string, boolean> = {};

  // Check for various modern features
  features.intersectionObserver = 'IntersectionObserver' in window;
  features.resizeObserver = 'ResizeObserver' in window;
  features.containerQueries = CSS.supports('container-type: inline-size');
  features.hasSelector = CSS.supports('selector(:has(*))');
  features.viewTransitions = 'startViewTransition' in document;
  features.webCrypto = typeof window.crypto?.subtle?.generateKey === 'function';
  features.webGPU = 'gpu' in navigator;
  features.webRTC = 'RTCPeerConnection' in window;
  features.fileSystemAccess = 'showOpenFilePicker' in window;
  features.webShare = 'share' in navigator;

  // Add classes to HTML element
  Object.entries(features).forEach(([name, supported]) => {
    if (supported) {
      html.classList.add(`has-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`);
    }
  });

  // Store in global object
  window.sinople.features = {
    ...window.sinople.features,
    ...features,
  };
}

/**
 * Initialize when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export { init };
