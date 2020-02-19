describe('Login_Tests',function()
{
    beforeEach(()=>{
        //try to do this in optimized way
        cy.visit('/')
        cy.get('.navbar-toggler').click()
        cy.get('div.container-fluid.nopadding:nth-child(1) nav.navbar.navbar-expand-xl.bg-white.navbar-light.fixed-top.px-xl-5.shadow-sm.paddingnav:nth-child(1) div.collapse.navbar-collapse.justify-content-between div.navbar-nav:nth-child(2) a.nav-link.btn-navlink:nth-child(2) > button.btn.btn-nav2').click()
        cy.get('#mobile').type(2888888888)
        cy.get('.bottom > .btn').should('be.visible').should('not.be.disabled').click()
        cy.url().should('include','/login/otp')
    })
    
    it('Otp_Required',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty')
        cy.get(':nth-child(3) > .btn').should('be.visible').should('be.disabled')
    })

    it('Otp_Size_Lessthan_6',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(78996)
        cy.get(':nth-child(3) > .btn').should('be.visible').should('be.disabled')
    })
    
    it('Otp_invalid',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(676588)
        cy.get(':nth-child(3) > .btn').should('be.visible').should('not.be.disabled').click()
        cy.get('.invalid-feedback').should('have.text','Please provide a valid OTP.')
    })

    it('Otp_Is_Number',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type("jkjkjhkj")
        cy.get(':nth-child(3) > .btn').should('be.visible').should('be.disabled')
    })
    
    it('Otp_Is_Registered',function(){
        cy.get('#mobile').should('be.visible').should('not.be.disabled').should('be.empty').type(130012)
        cy.get(':nth-child(3) > .btn').should('not.be.disabled').click()
        //cy.url().should('include','login/otp')
    })
})