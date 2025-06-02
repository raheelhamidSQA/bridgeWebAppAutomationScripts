Feature: Create the Public Channel
  As a Pro User
  I am able to create the Public Channel
Background:
  Given the pro user is able to login

  Scenario: R-1002-A10: Create Public Channel
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    Then the user can select the toggle for the Private selection to make the channel Public
    And the user click on create button
    Then the channel should display