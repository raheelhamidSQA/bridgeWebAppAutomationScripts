Feature: Member List
  As a Pro User
  I am able to see the members list
Background:
  Given the pro user is able to login

  Scenario: R-1002-A21: Members List
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button

    And the user open the channel
    And the user select the members list
    Then the members pane should appear to default to "Online"
    And the user is able to select the filter to All
    And the user is able to select the filter to Online