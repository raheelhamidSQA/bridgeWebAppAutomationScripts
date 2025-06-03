Feature: Remove Members
  As a Pro User
  I am able to remove the members from the channel
Background:
  Given the pro user is able to login

  Scenario: R-1002-A29_Remove_Members
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button

    And the user open the channel
    And the user select the members list
    And the user click on Add button

    Then the user choose the members or teams "practiceUserCreation"
    And the user click on Add user button
    And the user is able to select the filter to All

    Then the user select the 3 dots icon from the member "practiceUserCreation"
    And the user select the "Remove from room"

    And the user select "Yes, remove user!" option
    Then the user or team should be removed "practiceUserCreation"