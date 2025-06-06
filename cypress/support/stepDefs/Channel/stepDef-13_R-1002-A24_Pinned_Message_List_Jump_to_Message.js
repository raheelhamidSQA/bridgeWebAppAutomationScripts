When('the user click on directory icon', () => {
  cy.get('nav > span:nth-child(1) > div > button:nth-child(2)').click({force: true})


});


Then('the user can go to the {string} section', (channel) => {
  cy.xpath('(//*[contains(text(), "'+channel+'")])[1]').click()

});


And('the user search for the channel {string}', (channelName) => {
  cy.get('form > div.rcx-box.rcx-box--full.rcx-css-654uuc > label > input').type(channelName)
  cy.wait(3000)

});

And('the user sends the message to the channel {string}', (message) => {
  cy.get('label > textarea').type(message).type('{enter}');
  
});

And('the user hover the message and click on {string}', (more) => {
  cy.get('.rcx-message-header__name').eq(0) // Selects the second occurrence
  .closest('.rcx-message-container')
  .realHover();

  cy.get('button[title="'+more+'"]', { timeout: 5000 })
  .should('be.visible')
  .click({force:true});


});


And('the user click on the room {string}', (options) => {
  cy.wait(3000)
  cy.get('button[title="'+options+'"]', { timeout: 5000 })
  .should('be.visible')
  .click({force:true});


});

And('the user select the Pinned Messages from the Options', () => {
  cy.xpath('//header/div/div[2]/div/div/div/div[2]/div/label[2]/div/div[2]').click({ force: true });

});

And('the user click on the Jump to Message button of the pinned message', () => {
  cy.get('.rcx-message-header__name').eq(1) // Selects the second occurrence
  .closest('.rcx-message-container')
  .realHover();

  cy.get('[data-qa-id="Jump_to_message"]').should('be.visible').click({force:true});


});

And('the list of the Messages is displayed', () => {
  cy.wait(3000)
  cy.get('.rcx-vertical-bar__content', { timeout: 5000 })
  .should('be.visible')


});