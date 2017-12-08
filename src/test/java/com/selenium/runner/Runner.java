package com.selenium.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", glue = { "com.selenium.scenario" }, plugin = {
		"html:target/cucumber-html-report", "json:target/cucumber.json", "usage:target/cucumber-usage.json",
		"junit:target/cucumber-results.xml" })
public class Runner {

}
