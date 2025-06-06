Feature: Hide History Channel
  As a Pro User
  I am able to create the channel with the Hide History
Background:
  Given the pro user is able to login

  Scenario: 16_R-1002-A39_Hide_History_Channel
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    Then the user can select the toggle for the Private selection to make the channel Public
    Then the user select the settings "Advanced settings"
    And the user select the Hide History toggle
    And the user click on create button

    And the user sends the message to the channel "This is a test message for Star Messages."
    And the user wait for an element to appear
    Then the user logouts from the application
    #Main User logouts

    #Test user is logging in
    And the test user is able to login
    
    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel
    And the user wait for an element to appear

    And the user see the message "You must join to view messages in this channel"
    And the "Join" button should be visible

    And the user wait for an element to appear
    Then the user logouts from the application
    #Test User logouts

    #Main user is logging in
    When the pro user is able to login

    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    Then the user can select the toggle for the Private selection to make the channel Public
    And the user click on create button
    Then the channel should display
    And the user open the channel
    Then the user Edit the channel
    Then the user select the settings "Advanced settings"
    And the user enable the Hide History toggle
    And the user click on save button

    And the user wait for an element to appear
    Then the user logouts from the application
    #Main User logouts

    #Test user is logging in
    And the test user is able to login
    
    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel

    And the user see the message "You must join to view messages in this channel"
    And the "Join" button should be visible
