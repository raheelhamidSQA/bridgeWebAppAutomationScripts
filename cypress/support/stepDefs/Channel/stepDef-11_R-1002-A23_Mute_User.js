And('the user should be muted', () => {
  cy.get('.rcx-toastbar_content').should('contain', 'User practiceUserCreation muted in room AutomatorChannel05nigm8');
  
});

Then('the user logouts from the application', () => {
  cy.logout()
  
});


And('the user open the searched channel', () => {
  cy.get('.rcx-table__row--action > :nth-child(1)').click({force:true})
  cy.wait(5000)

});


And('the user can see the message textarea {string}', () => {
cy.get('input[type="text"]')
  .should('have.attr', 'placeholder', 'Message');
  cy.wait(2000)

});
