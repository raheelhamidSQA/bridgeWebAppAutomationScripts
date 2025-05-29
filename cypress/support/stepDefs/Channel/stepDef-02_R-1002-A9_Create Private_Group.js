And('make sure the lock icon must display with the channel name', () => {
  cy.get('.rcx-css-1vxtvqh > .rcx-box').should('have.class', "rcx-icon--name-hashtag-lock")
  
});