Cypress.Commands.add('selectDirectMessage', () => {
  cy.xpath('(//*[contains(text(), "Direct message")])[1]').click()
  
})

