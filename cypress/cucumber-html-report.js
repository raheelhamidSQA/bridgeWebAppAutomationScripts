const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber.json',
    reportPath: './reports/cucumber-htmlreport.html',
    metadata:{
        browser:{
            name: 'chrome'
        },
        device: 'Local Test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    }
})