Feature: Remove Team to channel
  As a Pro User
  I am able to remove the team from the channel
Background:
  Given the pro user is able to login

  Scenario: R-1002-A29a_Remove_Team_from_Chat_Room
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

    Then the user select the 3 dots icon from the team "R-testTeam"
    And the user select the "Remove Team from room"
    And the user select "Remove" option
    
    Then the user or team should be removed "R-testTeam"