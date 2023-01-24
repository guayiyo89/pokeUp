module.exports = {
  verbose: true,
  roots: ['src'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/src/app/shared/stubs/*',
    '<rootDir>/src/environments/environment.*',
    '<rootDir>/src/environments/global.d.ts',
    '<rootDir>/src/environments/index.ts',
    '<rootDir>/src/environments/urls.ts',
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'js'],
  transformIgnorePatterns: ['node_modules/(?!@ngrx|@bci)'],
  modulePaths: ['<rootDir>'],
  testMatch: [
    '**/__tests__/**/*.+(ts|js)?(x)',
    '**/+(*.)+(spec|test).+(ts|js)?(x)',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        '<rootDir>/node_modules/jest-preset-angular/build/InlineFilesTransformer',
      ],
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'index.ts',
    './src/jestGlobalMocks.ts',
    './src/environments/environment.*',
    './src/environments/global.d.ts',
    './src/environments/index.ts',
    './src/environments/urls.ts'
  ],
};