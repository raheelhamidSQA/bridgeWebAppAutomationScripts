Feature: Add Members
  As a Pro User
  I am able to add a members in the channel
Background:
  Given the pro user is able to login

  Scenario: R-1002-A2: Add Members
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

    Then the user or team should be added "practiceUserCreation"