Cypress.Commands.add('logout', () => {
    cy.xpath('//nav/span[2]/div/button[2]').click()
    cy.xpath('(//*[contains(text(), "Logout")])[1]').click()
    cy.wait(5000)
    cy.clearCookies();
    cy.clearLocalStorage();
    
    
})