Feature: Search Channel Directory
  As a Pro User
  I am able to search in the Channels Directory

Background:
  Given the pro user is able to login

  Scenario: G-1002-C2_Search_Channels_Directory
    When the user click on the Directory icon
    Then the user select the Channel
    And the user search the channel by name "general"
    Then the user search the channel by key term "NC"