And('the user hover on the channel from the sidebar', () => {
  cy.get('@channelName').then(channelName => {
    cy.get('.rcx-sidebar-v2-item__title')
    .contains(channelName)
    .should('be.visible')
    .realHover()

  })

});


And('the {string} button should be visible', (Join) => {
  cy.get('.rcx-button-group')
  .find('button')
  .contains(Join)
  .should('be.visible');

})


And('the user {string} the channel', (Join) => {
  cy.get('.rcx-button-group')
  .find('button')
  .contains(Join)
  .should('be.visible')
  .click({force:true})

})


And('the user select Leave option from the pop up', () => {
  cy.get('.rcx-button--danger')
  .click({force:true})

})


And('the error message should appear {string}', (errorMessage) => {
  cy.wait(1000)
  cy.get('.rcx-toastbar_content')
  .should('contain', errorMessage)

})
