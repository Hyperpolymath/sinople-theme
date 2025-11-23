/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests/js'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
      },
    }],
  },
  collectCoverageFrom: [
    'assets/js/src/**/*.{ts,tsx}',
    '!assets/js/src/**/*.d.ts',
    '!assets/js/src/**/*.test.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageDirectory: 'coverage/js',
  coverageReporters: ['html', 'text', 'lcov', 'clover'],
  setupFilesAfterEnv: ['<rootDir>/tests/js/setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testTimeout: 10000,
  verbose: true,
};
