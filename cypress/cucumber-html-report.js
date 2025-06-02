const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'cypress/results',          // <--- path to your results.json directory
  reportPath: 'cypress/results/html',  // <--- path for the report output
  metadata: {
    browser: {
      name: 'chrome',
      version: '114'
    },
    device: 'Local test machine',
    platform: {
      name: 'osx',
      version: 'Ventura'
    }
  }
});