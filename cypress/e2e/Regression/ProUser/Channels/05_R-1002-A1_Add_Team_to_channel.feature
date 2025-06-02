Feature: Add Team to channel
  As a Pro User
  I am able to add the team in the channel
Background:
  Given the pro user is able to login

  Scenario: R-1002-A1: Add Team to channel
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button

    And the user open the channel
    And the user select the members list
    And the user select add team button

    Then the user choose the members or teams "R-testTeam"
    And the user click on Add Team button

    Then the user or team should be added "R-testTeam"