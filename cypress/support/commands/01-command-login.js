
// Amazon Cognito
const loginToCognito = (username, password) => {
  Cypress.log({
    displayName: 'COGNITO LOGIN',
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  })

  username = Cypress.env('username')
  password = Cypress.env('password')

  if (!username || !password) {
    throw new Error('Username or password is not set in Cypress.env')
  }

  cy.visit("https://bridge2ps.app");
  cy.viewport(1280, 800)
  cy.wait(2000)

  cy.xpath('//div/div/form/div/button[3]').click();

  cy.origin(
    Cypress.env('cognitoDomain'),
    {
      args: {
        username,
        password,
      },
    },
    ({ username, password }) => {
      cy.contains('Sign in with your username and password')
      // Cognito log in page has some elements of the same id but are off screen.
      // We only want the visible elements to log in
      cy.get('input[name="username"]:visible').type(username)
      cy.get('input[name="password"]:visible').type(password, {
        // use log: false to prevent your password from showing in the Command Log
        log: false,
      })
      cy.get('input[name="signInSubmitButton"]:visible').click()
    }
  )

  // give a few seconds for redirect to settle
  cy.wait(5000)

  // verify we have made it passed the login screen
  cy.contains('Welcome to Bridge 2 Public Safety!').should('be.visible')
  cy.wait(5000)
}

// right now our custom command is light. More on this later!
Cypress.Commands.add('loginByCognitoProUser', (username, password) => {
  return loginToCognito(username, password)
})