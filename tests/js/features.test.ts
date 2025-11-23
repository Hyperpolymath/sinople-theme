/**
 * Tests for modern feature detection
 *
 * @package Sinople
 */

import { detectFeatures } from '../../assets/js/src/modules/features';

describe('Feature Detection', () => {
  test('detects View Transitions API support', () => {
    // Mock View Transitions support
    (document as any).startViewTransition = jest.fn();

    const features = detectFeatures();

    expect(features.viewTransitions).toBe(true);
  });

  test('detects lack of View Transitions API support', () => {
    delete (document as any).startViewTransition;

    const features = detectFeatures();

    expect(features.viewTransitions).toBe(false);
  });

  test('detects WebAssembly support', () => {
    (window as any).WebAssembly = {
      instantiate: jest.fn(),
    };

    const features = detectFeatures();

    expect(features.wasm).toBe(true);
  });

  test('detects Container Queries support', () => {
    // Mock CSS.supports
    (window as any).CSS = {
      supports: jest.fn((property: string, value: string) => {
        return property === 'container-type' && value === 'inline-size';
      }),
    };

    const features = detectFeatures();

    expect(features.containerQueries).toBe(true);
  });

  test('detects :has() selector support', () => {
    (window as any).CSS = {
      supports: jest.fn((selector: string) => {
        return selector === 'selector(:has(*))';
      }),
    };

    const features = detectFeatures();

    expect(features.hasSelector).toBe(true);
  });

  test('sets data attributes on documentElement', () => {
    detectFeatures();

    expect(document.documentElement.dataset.viewTransitions).toBeDefined();
    expect(document.documentElement.dataset.wasm).toBeDefined();
    expect(document.documentElement.dataset.containerQueries).toBeDefined();
  });
});
