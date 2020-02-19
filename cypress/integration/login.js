describe('Login',function()
{
    //using css selector are harmfull to use.
    //getting to the intial page and clearing off the local storage 
    it('Lido_Learning_Initial_Page_Loading',function()
    {   
        cy.clearLocalStorage()
        //only to check the correct route 
        //not check loading as it is automatically done by cypress 
        cy.visit('/')
        cy.url().should('include','lidolearning.com')
        //do verify completely that it is the page that you care looking for 
        //generate 100 satisfaction on that.
    })
    it('Login_Button',function()
    {
        //going to the login page
        cy.get('.navbar-toggler').click()
        cy.get('div.container-fluid.nopadding:nth-child(1) nav.navbar.navbar-expand-xl.bg-white.navbar-light.fixed-top.px-xl-5.shadow-sm.paddingnav:nth-child(1) div.collapse.navbar-collapse.justify-content-between div.navbar-nav:nth-child(2) a.nav-link.btn-navlink:nth-child(2) > button.btn.btn-nav2')
            .should('be.visible').should('not.be.disabled').click()
    })
})