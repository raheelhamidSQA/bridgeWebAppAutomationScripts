import 'cypress-real-events/support';
Then('the user select the 3 dots icon from the member {string}', (user) => {
  cy.wait(2500)

  cy.contains('div.rcx-option__content', user)
  .realHover();

  cy.contains('div.rcx-option__content', user)
    .next('div.rcx-box--animated.rcx-option__menu-wrapper')
    .find('button[title="More"]')
    .should('be.visible')
    .click({force:true});
});


And('the user select the {string}', (removeFromRoom) => {
  cy.xpath('(//*[contains(text(), "'+removeFromRoom+'")])[1]').click();
  cy.wait(5000)
  
});

And('the user select {string} option', (yesOption) => {
  cy.xpath('(//*[contains(text(), "'+yesOption+'")])[1]').click();

  
});


Then('the user or team should be removed {string}', (user) => {
  cy.get('.rcx-vertical-bar__content').should('not.contain', user);

});