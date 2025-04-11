import lumaPage from "../../support/page-object/lumaPage"

describe('Create an Account', () => {

  function randomUser(){
    const randomString = Math.random().toString(26).substring(2,10)
    const randomEmail = randomString + '@mail.com'
    return randomEmail
  }
  let namauser = randomUser()

  beforeEach(() => {
    cy.visit('')
  })
  
  it('Create an account success', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type(randomUser())
    lumaPage.inputPassword_1('Budixyz123*')
    lumaPage.inputPassword_2('Budixyz123*')
    lumaPage.confirmButton()
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain.text',"Welcome")
    cy.get('.message-success > div').should('contain.text','Thank you')
  })

  it('All fields empty', () => {
    cy.fixture('message').then((message) => {
      const notif = message
    lumaPage.createAccount()
    lumaPage.confirmButton()
    cy.verifyContain('#firstname-error', notif.error)
    cy.verifyContain('#lastname-error', notif.error)
    cy.verifyContain('#email_address-error', notif.error)
    cy.get('#password-strength-meter-label').should('contain.text', 'Password')
    cy.verifyContain('#password-error', notif.error)
    cy.verifyContain('#password-confirmation-error', notif.error)
    })
  })

  it('Invalid email format', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type('budixyz')
    lumaPage.inputPassword_1('Budixyz123*')
    lumaPage.inputPassword_2('Budixyz123*')
    lumaPage.confirmButton()
    cy.get('#email_address-error').should('contain.text','valid')
  })

  it('Password format is less than 8 symbols', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type(randomUser())
    lumaPage.inputPassword_1('Budi12*')
    lumaPage.inputPassword_2('Budi12*')
    lumaPage.confirmButton()
    cy.get('#password-strength-meter-label').should('contain.text', 'Weak')
    cy.get('#password-error').should('contain.text', 'Minimum')
  })

  it('Password format is only numbers', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type(randomUser())
    lumaPage.inputPassword_1('123456789')
    lumaPage.inputPassword_2('123456789')
    lumaPage.confirmButton()
    cy.get('#password-strength-meter-label').should('contain.text', 'Weak')
    cy.get('#password-error').should('contain.text', 'Minimum')
  })

  it('Password format is only lower case', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type(randomUser())
    lumaPage.inputPassword_1('budiberani')
    lumaPage.inputPassword_2('budiberani')
    lumaPage.confirmButton()
    cy.get('#password-strength-meter-label').should('contain.text', 'Weak')
    cy.get('#password-error').should('contain.text', 'Minimum')
  })

  it('Password format is only upper case', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type(randomUser())
    lumaPage.inputPassword_1('BUDIBERANI')
    lumaPage.inputPassword_2('BUDIBERANI')
    lumaPage.confirmButton()
    cy.get('#password-strength-meter-label').should('contain.text', 'Weak')
    cy.get('#password-error').should('contain.text', 'Minimum')
  })

  it('Password format is only special characters', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type(randomUser())
    lumaPage.inputPassword_1('&*&*&*&*')
    lumaPage.inputPassword_2('&*&*&*&*')
    lumaPage.confirmButton()
    cy.get('#password-strength-meter-label').should('contain.text', 'Weak')
    cy.get('#password-error').should('contain.text', 'Minimum')
  })

  it('Confirm password is incorrect', () => {
    lumaPage.createAccount()
    lumaPage.inputFirstname('Wayne')
    lumaPage.inputLastname('Rooney')
    cy.get('#email_address').type(randomUser())
    lumaPage.inputPassword_1('Budixyz123*')
    lumaPage.inputPassword_2('Budixyz1238')
    lumaPage.confirmButton()
    cy.get('#password-confirmation-error').should('contain.text', 'value')
  })

})