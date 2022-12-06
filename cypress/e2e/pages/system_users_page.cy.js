export class SystemUsers{

enterUsername(username){
    cy.get(':nth-child(2) > .oxd-input').type(username)
}

clickSearch(){
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
}
}