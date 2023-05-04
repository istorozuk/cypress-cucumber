Feature: SpaceAdvisor

    Scenario: Book a flight by entering number of passengers and dates
        Given I get into SpaceAdvisor homepage
        Then I select departing and returning dates
            |Departing  |Returning  |
            |25         |29         |
        And I select the amount of adults and children passengers
            |Adults     |Children   |
            |2          |1          |
        And I click on the Select Destination button
        Then I click on the option of the planet "Shenji"
        Then I complete the checkout 
        And I upload a file
        And I agree terms and conditions