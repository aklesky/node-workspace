/**
 * @file Jest configuration for the vscode jest runner.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defineConfig = require('./packages/jest-config/dist/config')

module.exports = {
    ...defineConfig,
    testTimeout: 30000,
}
