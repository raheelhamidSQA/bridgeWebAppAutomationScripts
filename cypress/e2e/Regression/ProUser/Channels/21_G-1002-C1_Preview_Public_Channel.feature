Feature: Preview Public Channel
  As a Pro User
  I am able to Preview the Public channel

Background:
  Given the pro user is able to login

  Scenario: G-1002-C1_Preview_Public_Channel
    When the user click on the Directory icon
    Then the user select the Channel
    And the user search the channel by name "general"
    And the user open the searched channel
    And the user is able to see the messages without joining the channel