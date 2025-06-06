Feature: Archive the channel
  As a Pro User
  I am able to archive a channel
Background:
  Given the pro user is able to login

  Scenario: 08_R-1002-A3_Archive_Channel
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button

    And the user open the channel
    Then the user Edit the channel

    Then the user select the settings "Advanced settings"
    And the user enable the Archive toggle

    And the user click on save button
    And the user click on Cancel button from the popup

    Then the user should see the channel is "Room archived"
    And the user verifies channel not appearing in the message list
    Then the user can search for the channel and it should appear in the search results