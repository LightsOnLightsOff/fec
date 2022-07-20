module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['client/src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};