module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
};