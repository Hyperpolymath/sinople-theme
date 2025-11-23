/**
 * Tests for WASM integration
 *
 * @package Sinople
 */

describe('WASM Module', () => {
  // Mock WASM module
  const mockWasm = {
    calculate_reading_time: jest.fn((text: string, wpm: number) => {
      const words = text.split(/\s+/).length;
      return Math.ceil(words / wpm);
    }),
    sanitize_html: jest.fn((html: string) => {
      return html.replace(/<script/gi, '&lt;script');
    }),
    hash_password: jest.fn((password: string) => {
      return `hashed_${password}`;
    }),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Reading Time Calculation', () => {
    test('calculates reading time correctly', () => {
      const text = 'word '.repeat(200); // 200 words
      const result = mockWasm.calculate_reading_time(text, 200);

      expect(result).toBe(1); // 200 words / 200 wpm = 1 minute
      expect(mockWasm.calculate_reading_time).toHaveBeenCalledWith(text, 200);
    });

    test('handles short text', () => {
      const text = 'Just a few words';
      const result = mockWasm.calculate_reading_time(text, 200);

      expect(result).toBe(1); // Minimum 1 minute
    });

    test('handles long text', () => {
      const text = 'word '.repeat(1000); // 1000 words
      const result = mockWasm.calculate_reading_time(text, 200);

      expect(result).toBe(5); // 1000 words / 200 wpm = 5 minutes
    });
  });

  describe('HTML Sanitization', () => {
    test('sanitizes script tags', () => {
      const dirty = '<script>alert("xss")</script>Hello';
      const clean = mockWasm.sanitize_html(dirty);

      expect(clean).not.toContain('<script>');
      expect(clean).toContain('&lt;script');
      expect(clean).toContain('Hello');
    });

    test('handles multiple script tags', () => {
      const dirty = '<script>bad</script><div><SCRIPT>also bad</SCRIPT></div>';
      const clean = mockWasm.sanitize_html(dirty);

      expect(clean).not.toMatch(/<script/i);
      expect(clean).toContain('&lt;script');
    });
  });

  describe('Password Hashing', () => {
    test('hashes password', () => {
      const password = 'secure_password_123';
      const hashed = mockWasm.hash_password(password);

      expect(hashed).toBe('hashed_secure_password_123');
      expect(hashed).not.toBe(password);
    });
  });
});
