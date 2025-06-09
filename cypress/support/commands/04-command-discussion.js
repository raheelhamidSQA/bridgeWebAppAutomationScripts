Cypress.Commands.add('selectDiscussion', () => {
  cy.xpath('(//*[contains(text(), "Discussion")])[1]').click()
  
})

Cypress.Commands.add('discussionName', () => {
  const result = Math.random().toString(36).substring(2, 9);
  cy.get('.rcx-field__row > .rcx-label').type("AutomatorChannel"+result)

  cy.get('.rcx-field__row > .rcx-label').invoke('val').then((val) => {
    cy.wrap(val).as('discussionName')
  })

})