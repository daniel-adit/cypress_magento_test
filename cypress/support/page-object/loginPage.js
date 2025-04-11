class loginPage {

    login = '.panel > .header > .authorization-link > a'
    signIn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    forgotPass = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span'
    reset = '#form-validate > .actions-toolbar > div.primary > .action > span'


    loginButton(){
        cy.get(this.login).click()
    }

    signInButton(){
        cy.get(this.signIn).click()
    }

    forgotButton(){
        cy.get(this.forgotPass).click()
    }

    resetButton(){
        cy.get(this.reset).click()
    }

    inputEmail(x){
        cy.get('#email').type(x)
    }

    inputPass(y){
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(y)
    }

    inputEmailAddress(z){
        cy.get('#email_address').type(z)
    }


}

export default new loginPage()