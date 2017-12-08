$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Test Facebook Login Page",
  "description": "",
  "id": ";test-facebook-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I provide valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": ";test-facebook-login-page;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 29,
      "id": ";test-facebook-login-page;;1"
    },
    {
      "cells": [
        "sanjayjoe2020@gmail.com",
        "password1"
      ],
      "line": 30,
      "id": ";test-facebook-login-page;;2"
    },
    {
      "cells": [
        "sanjayjoe1993@gmail.com",
        "password2"
      ],
      "line": 31,
      "id": ";test-facebook-login-page;;3"
    },
    {
      "cells": [
        "sanjayjoe2232@gmail.com",
        "password3"
      ],
      "line": 32,
      "id": ";test-facebook-login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Test Facebook Login Page",
  "description": "",
  "id": ";test-facebook-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I provide valid \"sanjayjoe2020@gmail.com\" and \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "scenario1.open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 11655574599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjayjoe2020@gmail.com",
      "offset": 17
    },
    {
      "val": "password1",
      "offset": 47
    }
  ],
  "location": "scenario1.i_provide_valid_username_and_Password(String,String)"
});
formatter.result({
  "duration": 7463263,
  "error_message": "java.lang.NullPointerException\r\n\tat com.selenium.scenario.scenario1.i_provide_valid_username_and_Password(scenario1.java:30)\r\n\tat ✽.When I provide valid \"sanjayjoe2020@gmail.com\" and \"password1\"(MyApplication.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "scenario1.user_Should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenario1.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Test Facebook Login Page",
  "description": "",
  "id": ";test-facebook-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I provide valid \"sanjayjoe1993@gmail.com\" and \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "scenario1.open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 13128785232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjayjoe1993@gmail.com",
      "offset": 17
    },
    {
      "val": "password2",
      "offset": 47
    }
  ],
  "location": "scenario1.i_provide_valid_username_and_Password(String,String)"
});
formatter.result({
  "duration": 615254,
  "error_message": "java.lang.NullPointerException\r\n\tat com.selenium.scenario.scenario1.i_provide_valid_username_and_Password(scenario1.java:30)\r\n\tat ✽.When I provide valid \"sanjayjoe1993@gmail.com\" and \"password2\"(MyApplication.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "scenario1.user_Should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenario1.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 32,
  "name": "Test Facebook Login Page",
  "description": "",
  "id": ";test-facebook-login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "open Firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I provide valid \"sanjayjoe2232@gmail.com\" and \"password3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "scenario1.open_Firefox_and_start_application()"
});
formatter.result({
  "duration": 12501721388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjayjoe2232@gmail.com",
      "offset": 17
    },
    {
      "val": "password3",
      "offset": 47
    }
  ],
  "location": "scenario1.i_provide_valid_username_and_Password(String,String)"
});
formatter.result({
  "duration": 471467,
  "error_message": "java.lang.NullPointerException\r\n\tat com.selenium.scenario.scenario1.i_provide_valid_username_and_Password(scenario1.java:30)\r\n\tat ✽.When I provide valid \"sanjayjoe2232@gmail.com\" and \"password3\"(MyApplication.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "scenario1.user_Should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenario1.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});