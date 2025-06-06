Feature: Pinned Message
  As a Pro User
  I am able to Pinned the message
Background:
  Given the pro user is able to login

  Scenario: R-1002-A24: Pinned Message List - Jump to Message
    When the user is able to create the plus icon button
    Then the user click "Channel"
    Then the user can enter the name of the channel
    Then the user can enter a Topic
    And the user can select the members
    And the user click on create button
    Then the channel should display
    And the user sends the message to the channel "This is a test message for pinning."

    # When the user click on directory icon
    # Then the user can go to the "Channels" section
    
    # And the user search for the channel "general"
    # And the user open the searched channel

    And the user hover the message and click on "More"

    And the user select the "Pin"
    And the user select "Yes, pin message" option

    And the user click on the room "Options"
    And the user wait for an element to appear
    And the user select the Pinned Messages from the Options

    Then the list of the Messages is displayed
    And the user click on the Jump to Message button of the pinned message