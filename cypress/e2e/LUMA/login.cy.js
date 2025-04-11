import lumaPage from "../../support/page-object/loginPage"

describe('Login Feature', () => {

  beforeEach(() => {
    cy.visit('')
  })
  
  it('Login successfully with valid credentials', () => {
    lumaPage.loginButton()
    lumaPage.inputEmail('budibedu@mail.com')
    lumaPage.inputPass('Budi123456')
    lumaPage.signInButton()
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text',"Welcome")
  })

  it('Login with invalid email', () => {
    lumaPage.loginButton()
    lumaPage.inputEmail('budi@mail.com')
    lumaPage.inputPass('Budi123456')
    lumaPage.signInButton()
    cy.get('.message-error > div').should('contain.text', "incorrect")
  })

  it('Login with empty credentials', () => {

    cy.fixture('message').then((message) => {
      const notif = message

    lumaPage.loginButton()
    lumaPage.signInButton()
    cy.verifyContain('#email-error', notif.error)
    cy.verifyContain('#pass-error', notif.error)
    })
  })

  it('Login with invalid email format', () => {
    lumaPage.loginButton()
    lumaPage.inputEmail('budi@mailcom')
    lumaPage.inputPass('Budi123456')
    lumaPage.signInButton()
    cy.get('#email-error').should('contain.text', "valid")
  })

  it.only('Login with invalid password', () => {
    lumaPage.loginButton()
    lumaPage.inputEmail('budibedu@mail.com')
    lumaPage.inputPass('Budi1234')
    lumaPage.signInButton()
    cy.get('.message-error > div').should('contain.text', "incorrect")
  })

})