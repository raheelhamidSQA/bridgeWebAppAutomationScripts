And('the user select the Hide History toggle', () => {
  cy.get('.rcx-css-1t8nt1l > .rcx-toggle-switch > .rcx-toggle-switch__fake').click({force:true})

});


And('the user see the message {string}', (message) => {
  cy.get('div.messages-box > div.content.room-not-found.error-color > div').should('contain', message)

});


And('the user enable the Hide History toggle', (message) => {
  cy.xpath('//fieldset/div[2]/div/span/label').click({force:true})

});