When('the user click on the Directory icon', () => {
  cy.get('[title="Directory"] > .rcx-box').click()
  cy.wait(5000)

});


Then('the user select the Channel', () => {
  cy.get('.rcx-tabs__wrapper > :nth-child(1)').click()
  cy.wait(5000)

});


Then('the user make sure is able to filters the Joined Channels', () => {
  cy.contains('[role="button"]', 'All rooms').click()
  cy.get('#joined').click({force:true})
  cy.waitElement()
  cy.get('.rcx-css-qcmk2x').should('be.visible')
  cy.get('#joined').click({force:true})
  cy.waitElement()
  cy.contains('[role="button"]', 'All rooms').click()

});


Then('the user make sure is able to filters the Archived Channels', () => {
  cy.contains('[role="button"]', 'All rooms').click()
  cy.get('#archived').click({force:true})
  cy.waitElement()
  cy.get('.rcx-css-qcmk2x').should('be.visible')
  cy.get('#archived').click({force:true})
  cy.waitElement()
  cy.contains('[role="button"]', 'All rooms').click()

});


Then('the user make sure is able to filters the Private Channels', () => {
  cy.contains('[role="button"]', 'All rooms').click()
  cy.get('#p').click({force:true})
  cy.waitElement()
  cy.get('.rcx-css-qcmk2x').should('be.visible')
  cy.get('#p').click({force:true})
  cy.waitElement()
  cy.contains('[role="button"]', 'All rooms').click()

});


Then('the user make sure is able to filters the Public Channels', () => {
  cy.contains('[role="button"]', 'All rooms').click()
  cy.get('#c').click({force:true})
  cy.waitElement()
  cy.get('.rcx-css-qcmk2x').should('be.visible')
  cy.get('#c').click({force:true})
  cy.waitElement()
  cy.contains('[role="button"]', 'All rooms').click()

});


Then('the user make sure is able to filters the Workspaces Channels', () => {
  cy.contains('[role="button"]', 'All rooms').click()
  cy.get('#t').click({force:true})
  cy.waitElement()
  cy.get('.rcx-css-qcmk2x').should('be.visible')
  cy.get('#t').click({force:true})
  cy.waitElement()
  cy.contains('[role="button"]', 'All rooms').click()

});


Then('the user make sure is able to filters the Discussions Channels', () => {
  cy.contains('[role="button"]', 'All rooms').click()
  cy.get('#discussions').click({force:true})
  cy.waitElement()
  cy.get('.rcx-css-qcmk2x').should('be.visible')
  cy.get('#discussions').click({force:true})
  cy.waitElement()
  cy.contains('[role="button"]', 'All rooms').click()

});