Feature: Create the Discussion
  As a Pro User
  I am able to create the Discussion
Background:
  Given the pro user is able to login

  Scenario: R-1006_b_Discussions
    When the user is able to create the plus icon button
    Then the user click Discussion
    And the user can select the parent channel or workspace
    Then the user can enter the name of the Discussion
    And the user click on create button
    Then the discussion should display

    And the user wait for an element to appear
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button
    Then the channel should display
    And the user sends the message to the channel "This is a test message for Discussion Messages."

    And the user hover the message and click on "More"

    And the user select the start a discussion
    And the user click on create button
    Then the channel should display