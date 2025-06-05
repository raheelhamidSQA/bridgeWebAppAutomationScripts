And('the user should be muted', () => {
  cy.get('.rcx-toastbar_content').should('contain', 'User practiceUserCreation muted in room AutomatorChannel05nigm8');
  
});

Then('the user logouts from the application', () => {
  cy.logout()
  
});


And('the user open the searched channel', () => {
  cy.get('div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > div').click({force:true})
  cy.wait(5000)

});