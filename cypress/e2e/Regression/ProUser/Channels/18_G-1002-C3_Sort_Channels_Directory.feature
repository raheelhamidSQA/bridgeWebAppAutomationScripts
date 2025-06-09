Feature: Sort Channel Directory
  As a Pro User
  I am able to sort the Channels Directory

Background:
  Given the pro user is able to login

  Scenario: G-1002-C3_Sort_Channels_Directory
    When the user click on the Directory icon
    Then the user select the Channel
    Then the user is able to sort the Directory based on "Name"
    Then the user is able to sort the Directory based on "Users"
    Then the user is able to sort the Directory based on "Created at"
    Then the user is able to sort the Directory based on "Created by"