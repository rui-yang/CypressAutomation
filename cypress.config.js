const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: 'xrrgci',
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: 'cypress/integration/examples/*.js',
    },
    retries: {
        runMode: 1,
    },
});
