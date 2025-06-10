Then('the user click Direct Message', () => {
    cy.selectDirectMessage()

})


And('the user select the members', () => {
    cy.get('.rcx-css-1sr8su7').type("TestingNonPS")
    cy.waitElement()
    cy.get('.rcx-option__content').click()
    cy.waitElement()
    cy.get('.rcx-css-w398ts > .rcx-box--animated').type("practiceUser")
    cy.waitElement()
    cy.get('.rcx-option__content').click()

})
