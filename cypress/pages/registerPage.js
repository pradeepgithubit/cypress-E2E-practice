export class registerPage{

    weblocators={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        emailID:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        subscribe:'radio-inline',
        agree:'input[type="checkbox"]',
        continue:".btn.btn-primary"
    }

    //Create a methods

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }
    enterLastName(LName){
        cy.get(this.weblocators.lastName).type(LName)
    }
    enterEmail(EMail_ID){
        cy.get(this.weblocators.emailID).type(EMail_ID)
    }
    enterTelephoneNo(ContactNo){
        cy.get(this.weblocators.telephone).type(ContactNo)
    }
    enterPassword(Password){
        cy.get(this.weblocators.password).type(Password)
    }
    enterConfirmPassword(Password){
        cy.get(this.weblocators.passwordConfirm).type(Password)
    }
    //selectSubscribe(){
    //    cy.get(this.weblocators.subscribe).check()
    //}
    selectCheckbox(){
        cy.get(this.weblocators.agree).check()
    }
    clickContinue(){
        cy.get(this.weblocators.continue).click()
    }

}