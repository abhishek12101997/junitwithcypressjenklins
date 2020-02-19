describe('Login_Tests',function()
{
    beforeEach(()=>{
        cy.visit('/')
        cy.get('.navbar-toggler').click()
        cy.get('div.container-fluid.nopadding:nth-child(1) nav.navbar.navbar-expand-xl.bg-white.navbar-light.fixed-top.px-xl-5.shadow-sm.paddingnav:nth-child(1) div.collapse.navbar-collapse.justify-content-between div.navbar-nav:nth-child(2) a.nav-link.btn-navlink:nth-child(2) > button.btn.btn-nav2')
            .should('be.visible').should('not.be.disabled').click()
    })
    it('Requires_Mobile_Number',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty')
        cy.get('.bottom > .btn').should('be.disabled')
    })

    it('Mobile_Number_Size_Lessthan_10',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(28888888)
        cy.get('.bottom > .btn').should('be.disabled')
    })

    it('Mobile_Number_invalid',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(3333333333)
        cy.get('.bottom > .btn').click()
        cy.get('.invalid-feedback').should('have.text','Please provide a valid phone number.')
    })
    
    it('Mobile_Number_Is_Number',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type('HJKHKJHKJHKJHKHJKH')
        cy.get('.bottom > .btn').should('be.disabled')
    })

    it('Mobile_Number_Is_Registetred',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(2888888888)
        cy.get('.bottom > .btn').should('be.visible').should('not.be.disabled').click()
        cy.url().should('include','login/otp')
    })
})