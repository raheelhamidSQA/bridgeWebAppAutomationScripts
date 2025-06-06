// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
require('cypress-xpath');
import './commands/01-command-login';
import './commands/02-command-channel';
import './commands/03-command-generic';







Cypress.on('uncaught:exception', (err) => {
    // Only ignore the specific error by message
    if (err.message && err.message.includes('Invalid user [error-invalid-user]')) {
      return false; // Prevents Cypress from failing the test
    }
    // Let any other errors fail the test
    return true;
  });

  Cypress.on('uncaught:exception', (err) => {
    // Only ignore the error-invalid-subscription exception
    if (err.message && err.message.includes('error-invalid-subscription')) {
      return false; // prevents Cypress from failing the test
    }
    // Allow other exceptions to fail the test
    return true;
  });