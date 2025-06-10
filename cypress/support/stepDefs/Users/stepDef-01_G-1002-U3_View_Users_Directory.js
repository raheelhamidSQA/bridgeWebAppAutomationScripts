Then('the {string} list should appear', (user) => {
    cy.get('.rcx-tabs__wrapper > :nth-child(2)').should('contain', user)
    cy.waitElement()
  
});


And('the user verifies the list of users', () => {
    cy.get('input[placeholder="Search Users"]')
    .should('exist')
    .and('have.attr', 'placeholder', 'Search Users');
  
});


And('the user able to sort the list of the users', () => {
    cy.get('th.rcx-table__cell--header').contains("Name").click({force:true})
  
});


And('the user is able to search the user {string}', (username) => {
    cy.get('input[placeholder="Search Users"]').clear().type(username);
    cy.waitElement()

});


And('the user name must appear {string}', (username) => {
    cy.get(':nth-child(1) > .rcx-table__cell > :nth-child(1) > .rcx-css-nf9psj')
    .should('contain', username)
    cy.waitElement()
    
});