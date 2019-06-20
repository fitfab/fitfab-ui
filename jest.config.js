// jest.config.js
module.exports = {
    /**
     * Naming the test
     */
    displayName: 'Fitfab-UI',

    /**
     * Verbose console output per test
     */
    verbose: true,

    /**
     * The test environment that will be used for testing
     */
    testEnvironment: 'jsdom',

    /**
     * The transform config just tells jest
     * to use ts-jest for ts / tsx files.
     */
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    /**
     * The testRegex tells Jest to look for tests in any __tests__ folder
     * AND also any files anywhere that use the (.test|.spec).(ts|tsx)
     */
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

    /**
     * The moduleFileExtensions tells jest to recognize our file extensions.
     * This is needed as we add ts/tsx into the defaults (js|jsx|json|node).
     */
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    /**
     * setup snapshot support with Enzyme
     */
    // snapshotSerializers: ['enzyme-to-json/serializer'],

    /**
     * Jest setup for Enzime
     */
    // setupFilesAfterEnv: ['<rootDir>/config/enzyme.setup.ts'],

    /***
     * Setup React-testing-library
     */
    setupFilesAfterEnv: ['<rootDir>/config/rtl.setup.ts'],
}
