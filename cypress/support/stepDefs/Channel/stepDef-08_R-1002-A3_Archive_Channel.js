Then('the user Edit the channel', () => {
  cy.get('button[title="Edit"]').click()
  
});


Then('the user select the settings {string}', (advancedSetting) => {
  cy.contains('h2.rcx-accordion-item__title', advancedSetting)
  .parent('div[role="button"]')
  .click({force:true});

  
});


And('the user enable the Archive toggle', () => {
  cy.xpath('//fieldset/div[3]/span/label[2]').click({force:true});
  cy.wait(1000)

  
});


And('the user click on save button', () => {
  cy.get('button[type="submit"]').click({force:true,});
  // div > button.rcx-box.rcx-box--full.rcx-button--primary.rcx-button.rcx-button-group__item
  cy.wait(5000)
  
});


And('the user click on Cancel button from the popup', () => {
  cy.get('div > button.rcx-box.rcx-box--full.rcx-button--secondary.rcx-button.rcx-button-group__item').click()

  
});


Then('the user should see the channel is {string}', (roomArchived) => {
  cy.get('footer > div > div').should('contain', roomArchived);

  
});

And('the user verifies channel not appearing in the message list', () => {
  cy.channelNotAppear()

  
});
 
Then('the user can search for the archived channel and it should appear in the search resuts', (roomArchived) => {
  cy.archiveChannelSearch()


});