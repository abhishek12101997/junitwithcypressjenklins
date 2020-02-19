
// do cookies.getCookies() and then when it returns an array and -> extract or find the name or key 'user-token' 
describe('Login_Page_Check',function()
    {
        it('Visit_Url',function(){
            cy.visit('/')
            cy.get('.navbar-toggler').click()
            cy.get('div.container-fluid.nopadding:nth-child(1) nav.navbar.navbar-expand-xl.bg-white.navbar-light.fixed-top.px-xl-5.shadow-sm.paddingnav:nth-child(1) div.collapse.navbar-collapse.justify-content-between div.navbar-nav:nth-child(2) a.nav-link.btn-navlink:nth-child(2) > button.btn.btn-nav2').click()
            cy.get('#mobile').type(2888888888)
            cy.get('.bottom > .btn').should('be.visible').should('not.be.disabled').click()
            cy.url().should('include','/login/otp')
        })

        it('Otp_Heading',function(){
            cy.get('.font500').should('have.text','We’ve sent an OTP to your mobile number').should('be.visible')
        })
        
        it('Otp_Header',()=>{
            cy.get('.ml-2').should('have.text','Enter OTP')
        })

        it('CheckInputBox',()=>{
            cy.get('input[type="number"]').should('be.visible').should('not.be.disabled').should('be.empty')
        })

        it('Check_Continue_Button',()=>{
            cy.contains('Continue').should('be.disabled')
        })

        //it('Check_Resend_OTP_Button',()=>{
           // cy.get(':nth-child(4) > .btn').sholud('have.text','Resend OTP')
        //})
    })
