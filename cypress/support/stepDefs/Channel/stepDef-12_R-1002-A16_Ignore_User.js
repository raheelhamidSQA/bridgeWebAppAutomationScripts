And('the user open the user profile {string}', (userProfile) => {
  cy.xpath('(//*[contains(text(), "'+userProfile+'")])[1]').click({force: true})

});


And('the user click on 3 dot icon from the user profile', () => {
  cy.get('button[title="More"]').click({force: true})

});
