package com.selenium.scenario;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class scenario1 {
	public WebDriver driver;

	@Given("^open Firefox and start application$")
	public void open_Firefox_and_start_application() throws Throwable {

		System.setProperty("webdriver.gecko.driver",
				"F:\\Java Files\\Browser Drivers\\geckodriver-v0.19.0-win64\\geckodriver.exe");
		FirefoxDriver driver = new FirefoxDriver();
		driver.get("https://www.facebook.com/");
		
	}

	@When("^I provide valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_provide_valid_username_and_Password(String Uname, String Pass) throws Throwable {

		WebElement email, password;
		email = driver.findElement(By.id("email"));
		email.sendKeys(Uname);
		password = driver.findElement(By.id("pass"));
		password.sendKeys(Pass);
	
	}

	@Then("^User Should be able to login$")
	public void user_Should_be_able_to_login() throws Throwable {

		driver.findElement(By.id("u_0_5")).click();
		
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();
		
	}

}
