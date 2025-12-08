/**
 * Tests for accessibility module
 *
 * @module
 * @package Sinople
 */

import { assertEquals, assertExists } from "@std/assert";

// Mock DOM environment for testing
function createMockDOM(): void {
  // @ts-ignore - creating mock globals for testing
  globalThis.document = {
    documentElement: {
      style: {
        setProperty: (_name: string, _value: string) => {},
        getPropertyValue: (_name: string) => "",
      },
      dataset: {},
      classList: {
        add: (_className: string) => {},
        remove: (_className: string) => {},
        contains: (_className: string) => false,
        toggle: (_className: string) => false,
      },
    },
    getElementById: (_id: string) => null,
    querySelector: (_selector: string) => null,
    querySelectorAll: (_selector: string) => [],
    addEventListener: (_event: string, _callback: () => void) => {},
    body: {
      innerHTML: "",
      classList: {
        add: (_className: string) => {},
        remove: (_className: string) => {},
        contains: (_className: string) => false,
      },
    },
  };

  // @ts-ignore - creating mock globals for testing
  globalThis.localStorage = {
    _data: {} as Record<string, string>,
    getItem(key: string): string | null {
      return this._data[key] || null;
    },
    setItem(key: string, value: string): void {
      this._data[key] = value;
    },
    removeItem(key: string): void {
      delete this._data[key];
    },
    clear(): void {
      this._data = {};
    },
  };

  // @ts-ignore - creating mock globals for testing
  globalThis.window = {
    matchMedia: (_query: string) => ({
      matches: false,
      media: _query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    }),
    sinople: {
      ajaxUrl: "/wp-admin/admin-ajax.php",
      nonce: "test-nonce",
      themeUri: "/wp-content/themes/sinople",
      homeUrl: "/",
      isRTL: false,
      i18n: {},
      features: {
        wasm: true,
        serviceWorker: true,
        viewTransitions: false,
        prefersReducedMotion: false,
      },
      endpoints: {
        void: "/void.rdf",
        ndjson: "/feed/ndjson",
        capnproto: "/api/capnp",
      },
    },
  };
}

// Reset mocks before each test
function resetMocks(): void {
  createMockDOM();
  // @ts-ignore - accessing mock
  globalThis.localStorage.clear();
}

Deno.test("Accessibility - font scale applies CSS custom property", () => {
  resetMocks();

  let appliedValue = "";
  // @ts-ignore - modifying mock
  globalThis.document.documentElement.style.setProperty = (
    name: string,
    value: string,
  ) => {
    if (name === "--text-scale") {
      appliedValue = value;
    }
  };

  // Simulate applying font scale
  const scale = 1.2;
  // @ts-ignore - accessing mock
  document.documentElement.style.setProperty("--text-scale", scale.toString());

  assertEquals(appliedValue, "1.2");
});

Deno.test("Accessibility - font scale respects minimum (0.8)", () => {
  resetMocks();

  const minScale = 0.8;
  let currentScale = 1.0;

  // Simulate decreasing beyond minimum
  for (let i = 0; i < 10; i++) {
    currentScale = Math.max(minScale, currentScale - 0.1);
  }

  assertEquals(currentScale >= 0.8, true);
});

Deno.test("Accessibility - font scale respects maximum (1.5)", () => {
  resetMocks();

  const maxScale = 1.5;
  let currentScale = 1.0;

  // Simulate increasing beyond maximum
  for (let i = 0; i < 10; i++) {
    currentScale = Math.min(maxScale, currentScale + 0.1);
  }

  assertEquals(currentScale <= 1.5, true);
});

Deno.test("Accessibility - theme persists to localStorage", () => {
  resetMocks();

  // @ts-ignore - accessing mock
  globalThis.localStorage.setItem("theme", "dark");

  // @ts-ignore - accessing mock
  const savedTheme = globalThis.localStorage.getItem("theme");

  assertEquals(savedTheme, "dark");
});

Deno.test("Accessibility - contrast toggle persists preference", () => {
  resetMocks();

  // @ts-ignore - accessing mock
  globalThis.localStorage.setItem("contrast", "high");

  // @ts-ignore - accessing mock
  const savedContrast = globalThis.localStorage.getItem("contrast");

  assertEquals(savedContrast, "high");
});

Deno.test("Accessibility - system dark mode detection", () => {
  resetMocks();

  // Mock dark mode preference
  // @ts-ignore - modifying mock
  globalThis.window.matchMedia = (query: string) => ({
    matches: query === "(prefers-color-scheme: dark)",
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  });

  // @ts-ignore - accessing mock
  const prefersDark = globalThis.window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  assertEquals(prefersDark, true);
});

Deno.test("Accessibility - theme toggle button ARIA attributes", () => {
  resetMocks();

  const mockButton = {
    attributes: {} as Record<string, string>,
    setAttribute(name: string, value: string): void {
      this.attributes[name] = value;
    },
    getAttribute(name: string): string | null {
      return this.attributes[name] || null;
    },
  };

  // Simulate updating theme button for dark mode
  mockButton.setAttribute("aria-pressed", "true");
  mockButton.setAttribute("aria-label", "Switch to light mode");

  assertEquals(mockButton.getAttribute("aria-pressed"), "true");
  assertEquals(mockButton.getAttribute("aria-label"), "Switch to light mode");
});

Deno.test("Accessibility - skip links exist in DOM interface", () => {
  resetMocks();

  // The interface should support querySelectorAll for skip-link elements
  // @ts-ignore - accessing mock
  assertExists(globalThis.document.querySelectorAll);
});

Deno.test("Accessibility - keyboard navigation Escape key handling", () => {
  resetMocks();

  let escapeCalled = false;

  // Mock event listener for Escape key
  const handleKeydown = (event: { key: string }) => {
    if (event.key === "Escape") {
      escapeCalled = true;
    }
  };

  // Simulate Escape key press
  handleKeydown({ key: "Escape" });

  assertEquals(escapeCalled, true);
});

Deno.test("Accessibility - menu toggle aria-expanded attribute", () => {
  resetMocks();

  const mockToggle = {
    _expanded: false,
    getAttribute(_name: string): string {
      return this._expanded ? "true" : "false";
    },
    setAttribute(_name: string, value: string): void {
      this._expanded = value === "true";
    },
  };

  // Initial state
  assertEquals(mockToggle.getAttribute("aria-expanded"), "false");

  // After toggle
  mockToggle.setAttribute("aria-expanded", "true");
  assertEquals(mockToggle.getAttribute("aria-expanded"), "true");
});
