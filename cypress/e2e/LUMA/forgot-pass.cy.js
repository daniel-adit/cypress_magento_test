import lumaPage from "../../support/page-object/loginPage"

describe('Forgot Password Feature', () => {

  beforeEach(() => {
    cy.visit('')
  })
  
  it('Reset password successfully', () => {
    lumaPage.loginButton()
    lumaPage.forgotButton()
    lumaPage.inputEmailAddress('budizyx@mail.com')
    lumaPage.resetButton()
    cy.get('.message-success > div').should('contain.text', "receive")
  })

  it('Reset password with empty credentials', () => {
    lumaPage.loginButton()
    lumaPage.forgotButton()
    lumaPage.resetButton()
    cy.get('.message-error > div').should('contain.text', "enter")
  })

  it('Reset password with invalid credentials', () => {
    lumaPage.loginButton()
    lumaPage.forgotButton()
    lumaPage.inputEmailAddress('budizyx.com')
    lumaPage.resetButton()
    cy.get('#email_address-error').should('contain.text', "valid")
  })


})