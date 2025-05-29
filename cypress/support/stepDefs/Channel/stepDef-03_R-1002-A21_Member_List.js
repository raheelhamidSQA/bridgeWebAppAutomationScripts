And('the user open the channel', () => {
  cy.get('div.rcx-box.rcx-box--full.rcx-css-1banssg.rcx-css-f2vsf1 > h1').click()
  
});


And('the user select the members list', () => {
  cy.get('[data-qa-id="ToolBoxAction-members"] > .rcx-box').click()

});


And('the members pane should appear to default to {string}', (selectorValue) => {
  cy.xpath('//div[2]/div[1]/div[2]/div/button/span').should('have.text', selectorValue)

});


And('the user is able to select the filter to All', () => {
  cy.xpath('//div[2]/div[1]/div[2]/div/button/span').invoke('text').then(filter => {
    cy.log(filter)
    if (filter === "Online"){
      cy.get('.rcx-select').click()
      cy.xpath('//div[6]/div[2]/div/div/div/li[2]/div/div').click()

    }
  })
});


And('the user is able to select the filter to Online', () => {
  cy.xpath('//div[2]/div[1]/div[2]/div/button/span').invoke('text').then(filter => {
    cy.log(filter)
    if (filter === "All"){
      cy.get('.rcx-select').click()
      cy.xpath('//div[6]/div[2]/div/div/div/li[1]/div/div').click()

    }
  })
});