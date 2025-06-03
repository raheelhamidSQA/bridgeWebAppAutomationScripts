And('the user select add team button', () => {
  cy.get('.rcx-css-f51umh > .rcx-button-group > :nth-child(2)').click()
  
});


And('the user click on Add Team button', () => {
  cy.get('.rcx-css-f51umh > .rcx-box > .rcx-button--content').click()
  
});