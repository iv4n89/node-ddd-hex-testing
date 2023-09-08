Feature: Find one or more users
    In order to find users in our system
    We want to get one or more users
    Users can be found with id or get all of them

    Scenario: Find all users in the database
        Given I send a GET request to "/users"
        Then the response status should be 200
        And the response should not be empty
        And the reponse body should be an array with length more than 3

    Scenario: Find one user with id
        Given I send a GET request to "/users/e981542e-e614-4693-a456-b3b723bfaec2"
        Then the response status should be 200
        And the response should not be empty
        And the returned object id should be "e981542e-e614-4693-a456-b3b723bfaec2"

    Scenario: A non existing user
        Given I send a GET request to "/users/f182ec7d-5a80-424b-b2b4-0cca75a5f911"
        Then the response status should be 404
