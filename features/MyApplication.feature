#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: 

  Scenario Outline: Test Facebook Login Page
    Given open Firefox and start application
    When I provide valid "<Username>" and "<Password>"
    Then User Should be able to login
    Then Close the browser

    Examples: 
      | Username                | Password  |
      | sanjayjoe2020@gmail.com | password1 |
      | sanjayjoe1993@gmail.com | password2 |
      | sanjayjoe2232@gmail.com | password3 |
