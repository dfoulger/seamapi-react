/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest/presets/default-esm', // or other ESM presets
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^fixtures/(.*).js$': '<rootDir>/test/fixtures/$1',
    '^lib/(.*).js$': '<rootDir>/src/lib/$1',
    '^index.js$': '<rootDir>/src/lib'
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.test.json'
      }
    ]
  }
}
