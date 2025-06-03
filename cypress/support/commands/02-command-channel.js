Cypress.Commands.add('clickPlusRoom', () => {
    cy.xpath('//div[1]/nav/span[1]/div/button[3]').click()
    
})


Cypress.Commands.add('selectChannel', () => {
  cy.xpath('(//*[contains(text(), "Channel")])[1]').click()
  
})


Cypress.Commands.add('channelName', () => {
  const result = Math.random().toString(36).substring(2, 9);
  cy.get(':nth-child(1) > .rcx-field__row > .rcx-label').type("AutomatorChannel"+result)

  cy.get('input[data-qa-type="channel-name-input"]').invoke('val').then((val) => {
    cy.wrap(val).as('channelName')
  })

})


Cypress.Commands.add('selectChannelMembers', () => {
  cy.get('.rcx-css-w398ts > .rcx-box').click()
  cy.get('.rcx-css-w398ts > .rcx-box').type("testingnonps.raheel.m4ps.assoc")
  cy.wait(2000)
  cy.get('.rcx-option__content').click()
  cy.get('.rcx-css-heem01 > :nth-child(2) > .rcx-label').click({force:true})

})

Cypress.Commands.add('channelNotAppear', () => {
  cy.get('@channelName').then((channelName) => {
    cy.get('[data-viewport-type="element"]').should('not.contain', channelName)
    
  })
})

Cypress.Commands.add('archiveChannelSearch', () => {

  cy.get('@channelName').then((channelName) => {
    cy.get('[title="Directory"] > .rcx-box').click()
    cy.wait(5000)
    cy.get('.rcx-tabs__wrapper > :nth-child(1)').click()
    cy.wait(5000)
    cy.get('.rcx-css-654uuc > .rcx-label > .rcx-box--animated').type(channelName)
    cy.get('.rcx-table__row--action > :nth-child(1)').should('contain', channelName)

  })
})