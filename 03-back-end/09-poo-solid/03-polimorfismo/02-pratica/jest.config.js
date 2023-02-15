/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './__tests__',
  setupFilesAfterEnv: ['./setup.js'],
  testSequencer: './testSequencer.js',
};
