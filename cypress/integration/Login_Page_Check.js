
// do cookies.getCookies() and then when it returns an array and -> extract or find the name or key 'user-token' 
describe('Login_Page_Check',function()
    {
        it('Visit_Url',()=>{
            cy.visit('/')
        })

        it('Login_Button',function(){
        //going to the login page
        cy.get('.navbar-toggler').click()
        cy.get('div.container-fluid.nopadding:nth-child(1) nav.navbar.navbar-expand-xl.bg-white.navbar-light.fixed-top.px-xl-5.shadow-sm.paddingnav:nth-child(1) div.collapse.navbar-collapse.justify-content-between div.navbar-nav:nth-child(2) a.nav-link.btn-navlink:nth-child(2) > button.btn.btn-nav2')
            .should('be.visible').should('not.be.disabled').click()
        })
        
        it('Check_Route',()=>{
            cy.url().should('include','login/mobile')
        })
        //make a test for that
        //cy.get('.ml-2').should('have.text','Enter registered mobile number')
        
        it('Login_Header',()=>{
            cy.get('.ml-2').should('have.text','Enter registered mobile number')
        })

        it('CheckInputBox',()=>{
            cy.get('input[type="number"]').should('be.visible').should('not.be.disabled').should('be.empty')
        })

        it('Check_Continue_Button',()=>{
            cy.contains('Continue').should('be.disabled')
        })
    })
