const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 40000,
    responseTimeout: 30000,
    experimentalSessionAndOrigin: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
    video: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // implement node event listeners here
    },
    env: {
      username: 'testingpro.raheel.m4ps.assoc',
      password: 'R@heelH@mid1@#',
      nonPSusername: 'testingnonps.raheel.m4ps.assoc',
      nonPSpassword: 'R@heelH@mid1@#',
      COGNITO_USER_POOL_ID: 'us-west-2_abcXYZ',
      COGNITO_CLIENT_ID: '1dhri7u2m7l2tqqs4mda0inh8e',
      cognitoDomain: 'bridge2ps.auth.us-west-2.amazoncognito.com'
    },
    specPattern: "cypress/e2e/**/*.feature"

  },

  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
    toConsole: true
  }
});