export class LoginPage{
    
    usernamePath = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    passwordPath = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    loginButtonPath = ".oxd-button"

    enterUsername(username){
        cy.get(this.usernamePath).type(username)
    }

    enterPassword(password){
        cy.get(this.passwordPath).type(password)
    }

    clickLogin(){
        cy.get(this.loginButtonPath).click()
    }
}