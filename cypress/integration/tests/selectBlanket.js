/// <reference types="cypress"/>
import { should } from "chai"
import HomePage from "./pageObjects/HomePage"
import ItemPage from "./pageObjects/ItemPage"


describe('I want to find blanket', function()
{
    


it('Looking for a blabket', function(){

const homePage = new HomePage()

cy.visit(Cypress.env('url'))
cy.url().should('include', 'zarahome')   
cy.wait(2000)
homePage.acceptCookie().click()
homePage.acceptPolandMarket().click({force: true})

const itemPage = new ItemPage

itemPage.hoverToMenu().realHover();
cy.wait(3000)
itemPage.bedroomOption().click({force: true})
cy.wait(3000)
homePage.closeNewsletter().click()
itemPage.blanked().click()
itemPage.filter().click()
itemPage.newOption().click()
itemPage.contentOption().click()
///itemPage.woolOption().click()
cy.wait(3000)
itemPage.woolOptionSelected().check().should('be.checked')
///itemPage.linenOption().click()
itemPage.linenOptionSelected().check().should('be.checked')
itemPage.linenOption().click().uncheck().should('not.be.selected')


cy.contains('Zastosuj').click({force: true})



})    
})