Feature: Delete the Private Group
  As a Pro User
  I am able to Delete the Private Group
Background:
  Given the pro user is able to login

  Scenario: R-1002-A11: Delete Private Group
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button
    Then the channel should display

    And the user open the channel
    Then the user Edit the channel

    Then the user select the settings "Advanced settings"
    Then the user should not able to see the "Delete Channel"