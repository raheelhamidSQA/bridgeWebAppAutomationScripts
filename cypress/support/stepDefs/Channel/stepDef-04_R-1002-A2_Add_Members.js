And('the user click on Add button', () => {
  cy.get('.rcx-button-group > .rcx-button--primary').click()
  
});


Then('the user choose the members or teams {string}', (value) => {
  cy.get('.rcx-css-6d871f > .rcx-box').type(value)
  cy.wait(5000)
  cy.get('.rcx-option__content').click({force:true})
  
});


And('the user click on Add user button', () => {
  cy.get('.rcx-css-f51umh > .rcx-button-group > .rcx-box').click()
  
});


Then('the user or team should be added {string}', (value) => {
  cy.get('.rcx-vertical-bar__content').contains(value)


});