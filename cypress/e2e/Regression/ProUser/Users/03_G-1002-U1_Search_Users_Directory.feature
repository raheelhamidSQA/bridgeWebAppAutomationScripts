Feature: View User Directory
  As a Pro User
  I am able to go the Directory and view the users

Background:
  Given the pro user is able to login

  Scenario: G-1002-U3_View_Users_Directory
    When the user click on the Directory icon
    And the "Users" list should appear
    And the user verifies the list of users

    And the user is able to search the user "practiceUserCreation"
    And the user name must appear "practiceUserCreation"

    And the user is able to search the user "TX"
    And the user name must appear "TX"