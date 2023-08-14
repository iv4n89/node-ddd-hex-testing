Feature: Api status
    In order to know the server is up and running
    As a health status
    I want to check the api status

    Scenario: Check the api status
        Given I send a GET request to "/status"
        Then the response status should be 200
