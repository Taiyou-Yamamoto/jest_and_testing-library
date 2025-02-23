/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // `node` は削除
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // 余計なオプション `{}` を削除
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/jest-css-stub.js',
  },
};
