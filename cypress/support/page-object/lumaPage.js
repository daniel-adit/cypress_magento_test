class lumaPage {

    create = '.panel > .header > :nth-child(3) > a'
    confirm = '#form-validate > .actions-toolbar > div.primary > .action > span'
    login = '.authorization-link > a'

    createAccount(){
        cy.get(this.create).click()
    }

    loginButton(){
        cy.get(this.login).click()
    }
    confirmButton(){
        cy.get(this.confirm).click()
    }

    inputFirstname(x){
        cy.get('#firstname').type(x)
    }
    inputLastname(y){
        cy.get('#lastname').type(y)
    }
    inputPassword_1(a){
        cy.get('#password').type(a)
    }
    inputPassword_2(b){
        cy.get('#password-confirmation').type(b)
    }

}

export default new lumaPage()