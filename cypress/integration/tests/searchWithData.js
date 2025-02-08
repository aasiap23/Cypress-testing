/// <reference types="cypress"/>
import HomePage from "./pageObjects/HomePage"


describe('Open the first page and first test search', function()
{
    before(function(){
    cy.fixture('example').then(function(data){
        this.data=data
    })
})


it('Open page', function(){

const homePage = new HomePage()

cy.visit(Cypress.env('url'))
homePage.acceptCookie().click()
homePage.acceptPolandMarket().click({force: true})
homePage.searchField().click()
cy.wait(3000)
homePage.closeNewsletter().click()
homePage.searchFieldType().type(this.data.item)



})    
})