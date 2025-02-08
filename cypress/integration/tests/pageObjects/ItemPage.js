class ItemPage
{

    /// hover mouse on the left menu
    hoverToMenu()
    {
        return cy.get('.left-container__menu-toggle > .icon')
    } 

    /// select the "sypialnia" 
    bedroomOption()
    {
        return cy.get('#cat1089012 > :nth-child(1) > .elem-level-1 > .ng-star-inserted > span')
    }

    /// select "koce"
    blanked()
    {
        return cy.get("div[id='cat1020447424'] span")
    }

    filter()
    {
        return cy.get("div[class='action-bar-content__item filter-item ng-star-inserted'] a span")
    }

    ///filter option: new

    newOption()
    {
        return cy.get("#mat-radio-4-input")
    }


    /// click to "sklad" option
    contentOption()
    {
        return cy.get("#mat-expansion-panel-header-3 > .mat-content > .mat-expansion-panel-header-title")
    }

    /// select "wełna" from content "skład"
    woolOption()
    {
        return cy.get("#mat-mdc-checkbox-21-input")
    }

    /// checked the wool option
   woolOptionSelected()
   {
    return cy.get("#mat-mdc-checkbox-21-input")
   }

    /// select "len" from content "skład"
   linenOption()
   {
    return cy.get("#mat-mdc-checkbox-20-input")
   }

    /// checked the linen option
    linenOptionSelected()
    {
     return cy.get("#mat-mdc-checkbox-20-input")
    }

    
    



    

    

    
}

export default ItemPage;