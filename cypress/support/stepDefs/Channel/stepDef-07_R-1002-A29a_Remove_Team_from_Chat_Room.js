import 'cypress-real-events/support';
Then('the user select the 3 dots icon from the team {string}', (teamValue) => {
  cy.wait(2500)

  cy.contains('div.rcx-option__content', teamValue)
  .realHover()
  .next('div.rcx-box--animated.rcx-option__menu-wrapper')
  .find('button[data-testid="menu"]')
  .should('be.visible')
  .click({force:true});
  
});