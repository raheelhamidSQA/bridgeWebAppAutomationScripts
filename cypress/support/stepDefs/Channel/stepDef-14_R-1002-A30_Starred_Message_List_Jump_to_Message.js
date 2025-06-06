And('the user select the Star message', () => {
  cy.xpath('//div[5]/div/div/div[2]/div/label[3]/div/div[2]').click({ force: true });
});


And('the star appears in front of the message', () => {
  cy.get('.rcx-message-status-indicator > .rcx-icon--name-star-filled').should('be.visible');

});


And('the user select the Starred Messages from the Options', () => {
  cy.xpath('//header/div/div[2]/div/div/div/div[2]/div/label[3]/div/div[2]').click({ force: true });

});