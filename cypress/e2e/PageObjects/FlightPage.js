//const pageURL = "https://www.kiwi.com/en/country/china/?botview=1"
//const expectedTitle = 'Cheap flights to China | Kiwi.com'
//const metaDesc = 'Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.'

class FlightPage {

    navigate() {
        //cy.visit(pageURL)
        cy.visit(Cypress.env('pageURL'))
    }

    verifyTitle() {
        cy.log("Title corresponds value Cheap flights to China Kiwi.com")
        //cy.title().should('eq', expectedTitle)
        cy.title().should("eq", Cypress.env("expectedTitle"))
    }

    metaDesc(){
        cy.log("Meta description zodpovedá hodnote “Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.")
        //cy.get('meta[name=description]').should('have.attr', 'content', metaDesc)
        cy.get('meta[name=description]').should('have.attr', 'content', Cypress.env('metaDescription'))
        
    }

    verifyH1(){
        cy.log("H1 has value Plane tickers to China ")
        cy.contains("h1", "Plane tickets to China").should("exist").and("be.visible")        
    }  
}

class CheckVisibilityOfElements {
    NavBar(){
      cy.log("NavBar exists and is visible on WebPage")
      cy.get('nav[data-test*="NavBar"]').as('navBar')
      cy.get('@navBar').should("exist").and("be.visible")
    }

    LoadingElement() {
        cy.get('div[class*="search-form mx-0 -mt-xl mb-xl translate-y-xl rounded-large bg-white-normal px-sm pb-sm pt-md shadow-raised lm:p-md tb:my-0 tb:transform-none de:rounded-[8px] de:p-lg ld:pb-md"]')
        .should("exist").and("be.visible")
    }

    PopularCities(){
        cy.log("Sekcia Popular cities exists")
        cy.get('div[data-test*="PopularListTiles"]').should("exist").and("be.visible")  
    }

    ExploreAirlines(){
        cy.log("Sekcia Explore airlines and airports exists")
        cy.get('div[data-test*="CountryPopularAirlines"]').should("exist").and("be.visible")  
    }

    AirlinesBasedInChina(){
        cy.log("Sekcia Airlines based in China exists")
        cy.get('.LinksListstyled__UnorderedList-sc-1uds6px-0:eq(0)').should("exist").and("be.visible") 
    }

    PopularAirlinesFlyingToChina(){
        cy.log("Sekcia Popular Airlines flying to China")
        cy.get('.LinksListstyled__UnorderedList-sc-1uds6px-0:eq(1)').should("exist").and("be.visible")
    }
    AirportsInChinaExists(){
        cy.log("Sekcia Airports in China exists")
        cy.get('ul[class*="mb-0 grid list-none grid-cols-1 gap-x-md gap-y-xs tb:grid-cols-2 de:grid-cols-3 de:gap-y-sm"]:eq(0)')
          .should("exist").and("be.visible")   
    }
    AirportsNearChinaExists(){
        cy.get('ul[class*="mb-0 grid list-none grid-cols-1 gap-x-md gap-y-xs tb:grid-cols-2 de:grid-cols-3 de:gap-y-sm"]:eq(1)')
        .should("exist").and("be.visible")
    }


    
}



export { FlightPage, CheckVisibilityOfElements };
