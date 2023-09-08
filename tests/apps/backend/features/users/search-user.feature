Feature: Search for a user
    In order to search for users
    We want to use different fields to search
    I want to get the users matching the query

    Scenario: A valid existing user is found with one field
        Given I send a POST request to "/users" with body:
        """
        {
            "name": "test1"
        }
        """
        Then the response status should be 200
        And the response should not be empty
        And the response should be:
        """
        [
            {
                "id": "e981542e-e614-4693-a456-b3b723bfaec2",
                "name": "test1",
                "email": "test1@mail.com",
                "password": "Nomelase1.0"
            }
        ]
        """

    Scenario: A valid existing user name return more than one user
        Given I send a POST request to "/users" with body:
        """
        {
            "name": "test"
        }
        """
        Then the response status should be 200
        And the response should not be empty
        And the response should be:
        """
        [
            {
                "id": "e981542e-e614-4693-a456-b3b723bfaec2",
                "name": "test1",
                "email": "test1@mail.com",
                "password": "Nomelase1.0"
            },
            {
                "id": "f2a65e1a-872d-4399-9b9e-ca5c9bb5cf25",
                "name": "test3",
                "email": "test3@mail.com",
                "password": "Nomelase3.0"
            }
        ]
        """

    Scenario: A non existing user name
        Given I send a POST request to "/users" with body:
        """
        {
            "name": "nonexisting"
        }
        """
        Then the response status should be 200
        And the response body should be an empty array

    
