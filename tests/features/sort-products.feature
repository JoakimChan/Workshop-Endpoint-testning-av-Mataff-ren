Feature: Product Sorting
  Validate sorting of products by name in ascending Swedish alphabetical order (A-Ö)

  Background:
    Given that I am on the domain "http://localhost:4000"

  Scenario: Validate sorting
    When I visit the endpoint "GET" "/api/c/frukt-och-gront?size=30&page=0&sort=name-asc"
    Then the status code of the response should be 200
    And the response time should be below 1000 milliseconds
    And the products should be sorted by name in Swedish alphabetical order