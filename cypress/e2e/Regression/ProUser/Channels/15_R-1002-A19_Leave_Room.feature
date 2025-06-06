Feature: Leave the Room
  As a Pro User
  I am able to Leave the Room
Background:
  Given the pro user is able to login

  Scenario: R-1002-A19_Leave_Room
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
    And the user wait for an element to appear
    Then the user logouts from the application
    #Main User logouts

    #Test user is logging in
    And the test user is able to login

    And the user hover on the channel from the sidebar
    And the user click on the room "Options"

    And the user select the "Leave"
    And the user select Leave option from the pop up
    
    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel
    And the "Join" button should be visible
    And the user select the members list
    Then the user or team should be removed "practiceUserCreation"

    And the user "Join" the channel
    And the user open the channel
    And the user select the "Leave"
    And the user select Leave option from the pop up
    And the user wait for an element to appear
    Then the user logouts from the application
    #Test User logouts

    #Main user is logging in
    When the pro user is able to login
    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel
    And the user open the channel
    And the user click on 3 dot icon from the profile
    And the user select the "Leave"
    And the user select Leave option from the pop up

    And the error message should appear "You are the last owner. Please set new owner before leaving the room."
    And the user select the members list
    And the user click on Add button
    Then the user choose the members or teams "practiceUserCreation"
    And the user click on Add user button
    And the user is able to select the filter to All
    Then the user select the 3 dots icon from the member "practiceUserCreation"
    And the user select the "Set as owner"
    And the user open the channel
    And the user click on 3 dot icon from the profile
    And the user select the "Leave"
    And the user select Leave option from the pop up

    Then the user can search for the channel and it should appear in the search results
    And the user open the searched channel
    And the "Join" button should be visible
    And the user select the members list
    Then the user or team should be removed "user.automator.m4ps.assoc"