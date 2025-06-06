Feature: Starred Message
  As a Pro User
  I am able to Starred the message
Background:
  Given the pro user is able to login

  Scenario: R-1002-A30_Starred_Message_List_Jump_to_Message
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button
    Then the channel should display
    And the user sends the message to the channel "This is a test message for Star Messages."

    And the user hover the message and click on "More"

    And the user select the Star message
    And the star appears in front of the message

    And the user click on the room "Options"
    And the user wait for an element to appear
    And the user select the Starred Messages from the Options

    Then the list of the Messages is displayed
    And the user click on the Jump to Message button of the pinned message