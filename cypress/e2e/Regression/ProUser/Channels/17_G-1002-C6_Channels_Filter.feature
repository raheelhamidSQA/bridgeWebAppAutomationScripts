Feature: Channel Filter
  As a Pro User
  I am able to go the Directory and able to change the filters

Background:
  Given the pro user is able to login

  Scenario: G-1002-C6_Channels_Filter
    When the user click on the Directory icon
    Then the user select the Channel
    Then the user make sure is able to filters the Joined Channels
    Then the user make sure is able to filters the Archived Channels
    Then the user make sure is able to filters the Private Channels
    Then the user make sure is able to filters the Public Channels
    Then the user make sure is able to filters the Workspaces Channels
    Then the user make sure is able to filters the Discussions Channels