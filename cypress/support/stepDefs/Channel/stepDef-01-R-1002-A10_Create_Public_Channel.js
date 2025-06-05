When('the user is able to create the plus icon button', () => {
  cy.clickPlusRoom()
  
});


Then('the user click "Channel"', () => {
  cy.selectChannel()
  

});


Then('the user can enter the name of the channel', () => {
  cy.channelName()

});


Then('the user can enter a Topic', () => {
  cy.get(':nth-child(2) > .rcx-field__row > .rcx-input-box--type-text').type("testTopic")

});


And('the user can select the members', () => {
  cy.selectChannelMembers()

});


Then('the user can select the toggle for the Private selection to make the channel Public', () => {
  cy.get(':nth-child(4) > .rcx-field__row > .rcx-toggle-switch > .rcx-toggle-switch__fake').click()
  
});


And('the user click on create button', () => {
  cy.get('.rcx-button-group > .rcx-button--primary').click()

});


Then('the channel should display', () => {
  cy.get('.rcx-css-uuz7h').should('be.visible', {timeout: 60000})
  cy.get('@channelName').then(channelName => {
    cy.get('.rcx-css-uuz7h').should('contain.text', channelName)

  })

});


And('the user wait for an element to appear', () => {
  cy.waitElement()

});
