/// <reference types="cypress" />

import { LoginPage } from './pages/login_page.cy.js';

const loginPage = new LoginPage()

beforeEach(function () {
  cy.fixture('data.json').as('data');
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});

it('TS_1_TC_001_Login with valid username and valid password', function () {
  loginPage.enterUsername(this.data.Login.username)
  loginPage.enterPassword(this.data.Login.password)
  loginPage.clickLogin()
  cy.get('.oxd-alert').should("not.exist")
  cy.url().should('eq', this.data.Adress.homepage)
});

it('TS_1_TC_002_Login with valid username and invalid password', function(){
  loginPage.enterUsername(this.data.Login.username)
  loginPage.enterPassword(this.data.Login.invalidPassword)
  loginPage.clickLogin()
  cy.get('.oxd-alert').should("be.visible")
  cy.get('.oxd-alert-content > .oxd-text').should("contain", "Invalid credentials")
  cy.url().should('eq', this.data.Adress.loginPage)
})

it('TS_1_TC_003_Login with invalid username and valid password', function(){
  loginPage.enterUsername(this.data.Login.invalidUsername)
  loginPage.enterPassword(this.data.Login.password)
  loginPage.clickLogin()
  cy.get('.oxd-alert').should("be.visible")
  cy.get('.oxd-alert-content > .oxd-text').should("contain", "Invalid credentials")
  cy.url().should('eq', this.data.Adress.loginPage)
})

it('TS_1_TC_004_Login with invalid username and invalid password', function(){
  loginPage.enterUsername(this.data.Login.invalidUsername)
  loginPage.enterPassword(this.data.Login.invalidPassword)
  loginPage.clickLogin()
  cy.get('.oxd-alert').should("be.visible")
  cy.get('.oxd-alert-content > .oxd-text').should("contain", "Invalid credentials")
  cy.url().should('eq', this.data.Adress.loginPage)
})

it("TS_1_TC_005_Login with blank username and blank password", function(){
  loginPage.enterUsername(" ")
  loginPage.enterPassword(" ")
  loginPage.clickLogin()
  cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should("be.visible").and("contain", "Required")
  cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should("be.visible").and("contain", "Required")
  cy.url().should('eq', this.data.Adress.loginPage)
})

it("TS_1_TC_006_Login with blank username and valid password", function(){
  loginPage.enterUsername(" ")
  loginPage.enterPassword(this.data.Login.password)
  loginPage.clickLogin()
  cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should("be.visible").and("contain", "Required")
  cy.url().should('eq', this.data.Adress.loginPage)
})

it("TS_1_TC_007_Login with valid username and blank password", function(){
  loginPage.enterUsername(this.data.Login.username)
  loginPage.enterPassword(" ")
  loginPage.clickLogin()
  cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should("be.visible").and("contain", "Required")
  cy.url().should('eq', this.data.Adress.loginPage)
})