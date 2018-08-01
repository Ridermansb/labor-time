module.exports = {
    verbose: true,
    testEnvironment: 'node',
    setupFiles: ["jest-localstorage-mock"],
    testPathIgnorePatterns: [
      '/node_modules/',
      'eslintrc',
    ],
    collectCoverageFrom: [
      '**/src/**/*.{js}',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      'eslintrc',
      '/node_modules/',
      '/coverage/',
      '/lib/',
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    coverageReporters: ['lcov', 'text'],
    moduleFileExtensions: ['js'],
  };