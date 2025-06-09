Feature: View Channel Directory
  As a Pro User
  I am able to View the Channels Directory

Background:
  Given the pro user is able to login

  Scenario: G-1002-C4_View_Channels_in_Directory
    When the user click on the Directory icon
    Then the user select the Channel
    Then the channel shows the list of the channel
    And the channel must shows the attribute of the channel