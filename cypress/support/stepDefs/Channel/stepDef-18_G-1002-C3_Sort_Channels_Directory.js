Then('the user is able to sort the Directory based on {string}', (value) => {
  cy.get('th.rcx-table__cell--header').contains(value).click({force:true})
    cy.wait(5000)

});

Then('the channel shows the list of the channel', () => {
  cy.get('.rcx-css-qcmk2x').should('be.visible')

});


And('the channel must shows the attribute of the channel', () => {
  cy.get(':nth-child(1) > :nth-child(1) > .rcx-css-1qvl0ud > .rcx-css-irxdij > .rcx-box > .rcx-avatar__element').should('be.visible')
  cy.get(':nth-child(1) > :nth-child(1) > .rcx-css-1qvl0ud > .rcx-css-1nn9nng > .rcx-css-127j9mz > .rcx-css-1r7uijp').should('be.visible')
  cy.get('.rcx-table__body > :nth-child(1) > :nth-child(2)').should('be.visible')
  cy.get('.rcx-table__body > :nth-child(1) > :nth-child(3)').should('be.visible')
  cy.get('.rcx-table__body > :nth-child(1) > :nth-child(4)').should('be.visible')

});