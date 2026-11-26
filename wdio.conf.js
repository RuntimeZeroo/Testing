const fs = require('node:fs');
const path = require('node:path');

exports.config = {
    runner: 'local',

    specs: [
        'src/specs/**/*.spec.js'
    ],
    exclude: [],

    maxInstances: 1,
    capabilities: [
        { browserName: 'chrome' },
        { browserName: 'firefox' }
    ],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://jolly-faloodeh-875fb0.netlify.app',    
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,

    framework: 'mocha',

    // Reporting: built-in spec reporter
    reporters: [
    ['spec', {
        showPreface: false,        // hides the long "[chrome 158... #0-0]" prefix on every line
        realtimeReporting: true,   // prints each test result as soon as it finishes
        addConsoleLogs: true,      // shows console.log output from your tests
        symbols: {
            passed: '✅',
            failed: '❌',
            skipped: '⏭️',
        },
    }],
],

    mochaOpts: {
        ui: 'bdd',
        timeout: 6000
    },

    //  save a screenshot for every failed test
    afterTest: async function (test, context, { passed }) {
        if (passed) return;

        const dir = path.join(process.cwd(), 'screenshots');
        fs.mkdirSync(dir, { recursive: true });

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const safeName = test.title.replace(/[^a-z0-9]+/gi, '_');
        const file = path.join(dir, `${safeName}_${timestamp}.png`);

        await browser.saveScreenshot(file);
    },
};
