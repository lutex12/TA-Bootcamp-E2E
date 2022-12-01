@E2E
Feature: Bootcamp E2E

    Automated JS end-to-end tests for the Internet shop https://www.newegg.com

    Background:
        Given I am on the home page of the online store
        And I close the promo banner if appears

    @searchBar
    Scenario: I can search items using top middle search bar
        When I entry the word Windows in the search bar
        And I click the search button
        Then I can see that at least one item appears

    @logoButton
    Scenario: I can return to the home page by clicking the logo button in the top right corner
        When I open Today's Best Deals tab
        And I click on the Internet shop logo
        Then I can see that the home page opens