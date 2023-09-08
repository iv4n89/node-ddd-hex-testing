Feature: Delete one user
    In order to delete one user in our system
    We want to provide its id to proceed

    Scenario: Delete one user from database
        Given I send a DELETE request to "/users/e7719402-e7e7-4b78-bf76-e0178c513dac"
        Then the response status should be 204
        And the response should be empty

    Scenario: A non existing user
        Given I send a DELETE request to "/users/nonexistig"
        Then the response status should be 500
