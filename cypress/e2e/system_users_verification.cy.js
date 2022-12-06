/// <reference types="cypress" />

import {SystemUsers} from "./pages/system_users_page.cy.js";
import { LoginPage } from './pages/login_page.cy.js'; 

const systemUsers = new SystemUsers()
const loginPage = new LoginPage()

beforeEach(function () {
    cy.fixture('data.json').as('data');
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  });

describe('All search function tests cheking username', () =>{

it("Verification search function with valid username", function(){
    loginPage.enterUsername(this.data.Login.username)
    loginPage.enterPassword(this.data.Login.password)
    loginPage.clickLogin()
    cy.contains('Admin').click()

    systemUsers.enterUsername(this.data.SystemUsers.validUsername1)
    systemUsers.clickSearch()
    cy.get('.orangehrm-horizontal-padding > .oxd-text').should("contain", "(1) Record Found")
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').should("contain", "Anthony.Nolan")
})

it("Verification search function with invalid username", function(){
    loginPage.enterUsername(this.data.Login.username)
    loginPage.enterPassword(this.data.Login.password)
    loginPage.clickLogin()
    cy.contains('Admin').click()

    systemUsers.enterUsername(this.data.SystemUsers.invalidUsername)
    systemUsers.clickSearch()
    cy.get('.orangehrm-horizontal-padding > .oxd-text').should("contain", "No Records Found")
    cy.get('.oxd-toast').should("be.visible")
})

it("Verification search function without any filter", function(){
    loginPage.enterUsername(this.data.Login.username)
    loginPage.enterPassword(this.data.Login.password)
    loginPage.clickLogin()
    cy.contains('Admin').click()

    systemUsers.clickSearch()
    cy.get('.orangehrm-horizontal-padding > .oxd-text').should("contain", "(35) Records Found")
})
})
