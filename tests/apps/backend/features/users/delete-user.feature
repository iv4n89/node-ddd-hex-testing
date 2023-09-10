Feature: Delete one user
    In order to delete one user in our system
    We want to provide its id to proceed

    Scenario: Delete one user from database
        Given I send a DELETE request to "/users/1e134b34-5e0f-4faa-ae64-03a3c2380fb4"
        Then the response status should be 204
        And the response should be empty

    Scenario: A non existing user
        Given I send a DELETE request to "/users/nonexistig"
        Then the response status should be 500
