// do cookies.getCookies() and then when it returns an array and -> extract or find the name or key 'user-token' 
describe('Login_Page_Check',function()
    {
        it('Visit_Url',()=>{
            cy.visit('/')
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

    describe('Login_Tests',function()
    {
        beforeEach(()=>{
            cy.visit('/')
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


// do cookies.getCookies() and then when it returns an array and -> extract or find the name or key 'user-token' 
describe('Otp_Page_Check',function()
{
    it('Visit_Url',function(){
        cy.visit('/')
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

    it('Check_Resend_OTP_Button',()=>{
       cy.get(':nth-child(4) > .btn').sholud('have.text','Resend OTP')
    })
})

describe('Otp_Tests',function()
{
    beforeEach(()=>{
        //try to do this in optimized way
        cy.visit('/')
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
    })
})
