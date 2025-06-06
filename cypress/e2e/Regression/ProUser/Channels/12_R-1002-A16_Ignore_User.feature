Feature: Ignore User
  As a Pro User
  I am able to Ignore the user
Background:
  Given the pro user is able to login

  Scenario: R-1002-A16_Ignore_User
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
    And the user select the "Ignore"
    
    Then the user select the 3 dots icon from the member "practiceUserCreation"
    And the user select the "Unignore"

    And the user open the user profile "practiceUserCreation"
    And the user click on 3 dot icon from the user profile

    And the user select the "Ignore"