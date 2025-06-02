let userData; // This variable is in the scope of your describe block

beforeEach(() => {
  // Load the fixture data before each test
  cy.fixture('example.json').then((data) => {
    userData = data; // Assign the loaded data to the variable

  });
});


Given('the pro user is able to login', () => {
  cy.loginByCognitoProUser();

});



Given('the Non PS user is able to login', () => {
  cy.loginByCognitoNonPSUser();

});