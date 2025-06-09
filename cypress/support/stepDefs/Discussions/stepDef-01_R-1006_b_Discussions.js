And('the user can select the parent channel or workspace', () => {
    cy.get(':nth-child(2) > .rcx-option__wrapper > .rcx-option__content')
    .click({force:true})
  
  })

Then('the user click Discussion', () => {
    cy.selectDiscussion()

});

And('the user can enter the name of the Discussion', () => {
    cy.discussionName()
  
})

And('the discussion should display', () => {
    cy.get('.rcx-css-uuz7h').should('be.visible', {timeout: 60000})
    cy.get('@discussionName').then(discussionName => {
        cy.get('.rcx-css-uuz7h').should('contain.text', discussionName)

    })

})
  

And('the user select the start a discussion', () => {
    cy.xpath('//div[5]/div/div/div[1]/div/label[2]/div/div[2]').click({force:true})

})
