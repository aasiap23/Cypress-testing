class HomePage
{


    acceptCookie()
    {
        return cy.get('#onetrust-accept-btn-handler')
    } 

    /// accpeting Poland Market
    acceptPolandMarket()
    {
        return cy.get("div[class='cdk-overlay-container'] button:nth-child(1) span:nth-child(1)")
    } 

    /// clicking on search field
    searchField()
    {
        return cy.get(".center-container__search-toggle.header-button.ng-star-inserted")
    } 

    /// type the item 
    searchFieldType()
    {
        return cy.get("#mat-input-1")
    } 

    /// click the x in newsletter pop up
    closeNewsletter()
    {
        return cy.get(".close-btn-container > .icon")

    } 



    

    

    
}

export default HomePage;