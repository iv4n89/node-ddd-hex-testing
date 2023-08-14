Feature: Create a new user
    In order to have a new user in our system
    As a new user without an account
    I want to create a new account for me

    Scenario: A valid non existing user
        Given I send a PUT request to "/users/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
        """
        {
            "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
            "name": "Juanito",
            "email": "juanito@mail.com",
            "password": "UnaP4ssw0rd."
        }
        """
        Then the response status code should be 201
        And the response should be empty

    Scenario: An invalid non existing user
        Given I send a PUT request to "/users/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
        """
        {
            "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
            "name": 5,
            "email": "er",
            "password": "invalid"
        }
        """
        Then the response status code should be 422

    
