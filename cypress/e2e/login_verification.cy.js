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
  cy.url().should('eq', this.data.Adress.homepage)
});
