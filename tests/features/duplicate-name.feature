Feature: Duplicate


  Background:
    Given that I am on the domain "http://localhost:4000"

  Scenario: Check får duplicate
    When I visit the endpoint "GET" "/api/c/dryck/lask?size=30&page=0&sort=name-asc"
    Then the status code of the response should be 200
    And the response time should be below 1000 milliseconds
    And it should contain duplicate