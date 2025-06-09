Then('the user search the channel by name {string}', (channelName) => {
    cy.get('.rcx-css-654uuc > .rcx-label > .rcx-box--animated').clear().type(channelName)
    cy.waitElement()
    cy.get(':nth-child(1) > :nth-child(1) > .rcx-css-1qvl0ud > .rcx-css-1nn9nng').should('contain', channelName)
  
  });


Then('the user search the channel by key term {string}', (nc) => {
    cy.get('.rcx-css-654uuc > .rcx-label > .rcx-box--animated').clear().type(nc)
    cy.waitElement()
    cy.get(':nth-child(1) > :nth-child(1) > .rcx-css-1qvl0ud > .rcx-css-1nn9nng').should('contain', nc)

});


And('the user is able to see the messages without joining the channel', (nc) => {
  cy.get('.rcx-message-header__name').should('be.visible')

  
});
