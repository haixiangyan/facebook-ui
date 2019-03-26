const base = require('./jest.config')
module.exports = Object.assign({}, base, {
    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**", "!**/types/**", "!**/icons/**"],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov']
})