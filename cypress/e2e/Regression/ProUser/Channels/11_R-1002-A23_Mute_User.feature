Feature: Mute User
  As a Pro User
  I am able to Mute the user
Background:
  Given the pro user is able to login

  Scenario: R-1002-A23_Mute_User
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    Then the user can select the toggle for the Private selection to make the channel Public
    And the user click on create button
    
    And the user open the channel
    And the user select the members list
    And the user click on Add button

    Then the user choose the members or teams "practiceUserCreation"
    And the user click on Add user button
    And the user is able to select the filter to All

    Then the user select the 3 dots icon from the member "practiceUserCreation"
    And the user select the "Mute user"

    And the user select "Yes, mute user!" option

    Then the user logouts from the application
    #Main User logouts

    #Test user is logging in
    And the test user is able to login

    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel
    And the user should see the channel is "This room is read only"
    Then the user logouts from the application
    #Test user logouts

    #Main User logging in
    And the pro user is able to login
    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel

    And the user open the channel
    And the user select the members list
    And the user is able to select the filter to All

    Then the user select the 3 dots icon from the member "practiceUserCreation"
    And the user select the "Unmute user"
    Then the user logouts from the application
    #Main User logouts

    #Test user is logging in
    And the test user is able to login
    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel
    And the user sends the message to the channel "This is a test message for unmuting."