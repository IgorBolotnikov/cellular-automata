module.exports = {
  preset: 'jest-preset-preact',
  'setupFiles': ['jest-canvas-mock'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
