/// <reference types="cypress"/>


import { checkPropertyChange } from "json-schema";
import { FlightPage, CheckVisibilityOfElements } from "./PageObjects/FlightPage"

describe("First Exercise", () => {

    //const pageURL = "https://www.kiwi.com/en/country/china/?botview=1"
    const flightPage = new FlightPage();
    const checkVisibilityOfElements = new CheckVisibilityOfElements()
  
    beforeEach(() => {
      flightPage.navigate()
    })

    it("Verifies page title, meta description, and h1 visibility", () =>{
      flightPage.verifyTitle()
      flightPage.metaDesc()
      flightPage.verifyH1()
    });

    it("Canonical je rovnaký ako URL na začiatku testu (bez botview)", () => {
      cy.get('link[rel="canonical"]').should('have.attr', 'href').then((canonicalURL) => {
        const expectedURL = Cypress.env("expectedURLCanonical")

        const canonicalURLWithoutBotview = canonicalURL.split('?')[0] 
        expect(canonicalURLWithoutBotview).to.eq(expectedURL)
        
      })    
      cy.log("canonical je rovnaký ako URL na začiatku testu (bez botview).")    
    })

    it("Loading element v search from, Search button teda pre Search form neexistuje", () => {
        checkVisibilityOfElements.LoadingElement()
    })

    it("NavBar and other sections exists and is visible on WebPage", () => {
      //checkVisibilityOfElements.NavBar()      //POM
      cy.checkNavBarVisibility();               //Cypress custom command
      
      cy.checkBreadcrumbs()
          
      checkVisibilityOfElements.PopularCities()

      checkVisibilityOfElements.ExploreAirlines()
      
      checkVisibilityOfElements.AirlinesBasedInChina()
      
      checkVisibilityOfElements.PopularAirlinesFlyingToChina()
       
      checkVisibilityOfElements.AirportsInChinaExists()
      
      checkVisibilityOfElements.AirportsNearChinaExists()
      
      cy.log("Sekcia Airports flying to China exists")
      cy.get('ul[class*="mb-0 grid list-none grid-cols-1 gap-x-md gap-y-xs tb:grid-cols-2 de:grid-cols-3 de:gap-y-sm"]:eq(2)')
        .should("exist").and("be.visible")   
      
      cy.log("Sekcia Buses & trains exists")
      cy.get('div[data-test*="CountryOperatingTrainAndBusCarriers"]').should("exist").and("be.visible")
      
      cy.log("Sekcia Cheapest month to fly to China exists")
      cy.get('div[data-test*="CountryPriceTrendsGraph"]').should("exist").and("be.visible")
      

      cy.get('div[data-test*="CountryInfoSimple"]').should("exist").and("be.visible")
      cy.log("Sekcia Discover China exists")

      cy.log("Sekcia Popular flights exists")
      cy.get('div[data-test*="CountryCountries"]').should("exist").and("be.visible")
      
      cy.log("Sekcia Explore alternative flights to China exists")
      cy.get('ul[class*="mb-0 grid list-none grid-cols-1 gap-x-md gap-y-xs tb:grid-cols-2 de:grid-cols-3 de:gap-y-sm"]:eq(3)')
        .should("exist").and("be.visible")
      

      cy.log("Sekcia Find popular flights from China exists")
      cy.get('ul[class*="mb-0 grid list-none grid-cols-1 gap-x-md gap-y-xs tb:grid-cols-2 de:grid-cols-3 de:gap-y-sm"]:eq(4)')
        .should("exist").and("be.visible")
      
    })

    it("Section Cheap flights with their subgroups exists", () => {
      cy.log("Sekcia Cheap flights exists")
      cy.get('div[data-test*="CountryContinentCountries"]').should("exist").and("be.visible")
      
      cy.log("Sekcia Cheap flights - Europe exists")
      cy.get('ul[class*="LinksListstyled__UnorderedList-sc-1uds6px-0 hIqsGm"]:eq(0)')
        .should("exist").and("be.visible")
      

      cy.get('ul[class*="LinksListstyled__UnorderedList-sc-1uds6px-0 hIqsGm"]:eq(1)')
        .should("exist").and("be.visible")
      cy.log("Sekcia Cheap flights - Asia exists")

      cy.get('ul[class*="LinksListstyled__UnorderedList-sc-1uds6px-0 hIqsGm"]:eq(2)')
        .should("exist").and("be.visible")
      cy.log("Sekcia Cheap flights - Africa exists")

      cy.get('ul[class*="LinksListstyled__UnorderedList-sc-1uds6px-0 hIqsGm"]:eq(3)')
        .should("exist").and("be.visible")
      cy.log("Sekcia Cheap flights - North America exists")

      cy.log("Sekcia Cheap flights - South America exists")
      cy.get('ul[class*="LinksListstyled__UnorderedList-sc-1uds6px-0 hIqsGm"]:eq(4)')
        .should("exist").and("be.visible")
      

      cy.log("Sekcia Cheap flights - Oceania exists")
      cy.get('ul[class*="LinksListstyled__UnorderedList-sc-1uds6px-0 hIqsGm"]:eq(5)')
        .should("exist").and("be.visible")
      

      cy.log("Tlačidlo Search flights, trains & buses exists")
      cy.get('a[data-test*="StaticFooterMapButton"]').should("exist").and("be.visible")
      

      cy.log("Footer exists")
      cy.get('div[class*="pb-md de:pb-lg px-md"]').should("exist").and("be.visible")
      
    })
  
    it("Check that all links from section Airlines based in China returns redirect 200", () => {
         
        const URLtoCheck = [
          "https://www.kiwi.com/en/airline/zh/shenzhen-airlines/", 
          "https://www.kiwi.com/en/airline/eu/chengdu-airlines/", 
          "https://www.kiwi.com/en/airline/9c/spring-airlines/",
          "https://www.kiwi.com/en/airline/bk/okay-airways/",
          "https://www.kiwi.com/en/airline/mu/china-eastern-airlines/", 
          "https://www.kiwi.com/en/airline/8l/lucky-air/",
          "https://www.kiwi.com/en/airline/sc/shandong-airlines/",
          "https://www.kiwi.com/en/airline/ci/china-airlines/",
          "https://www.kiwi.com/en/airline/uq/urumqi-airlines/",
          "https://www.kiwi.com/en/airline/pn/west-air-china/",
          "https://www.kiwi.com/en/airline/y8/suparna-airlines/",
          "https://www.kiwi.com/en/airline/a6/air-travel/",
          "https://www.kiwi.com/en/airline/3u/sichuan-airlines/",
          "https://www.kiwi.com/en/airline/lt/longjiang-airlines/",
          "https://www.kiwi.com/en/airline/gs/tianjin-airlines/",
          "https://www.kiwi.com/en/airline/jr/joy-air/",
          "https://www.kiwi.com/en/airline/g5/china-express-airlines/",
          "https://www.kiwi.com/en/airline/fm/shanghai-airlines/",
          "https://www.kiwi.com/en/airline/gy/colorful-guizhou-airlines/",
          "https://www.kiwi.com/en/airline/dz/donghai-airlines/"
          
        ]
  
        return Promise.all (URLtoCheck.map((url) => cy.request(url))).then((responses) => {
          responses.forEach((response) => {
            expect(response.status).to.eq(200)
          })
        })
        
  
        URLtoCheck.forEach((url) => {
          cy.request(url).then((response) => {
            expect(url).to.include('/en/airline/')
  
            //Assert that the response status code is 200 
            execPath(response.status).to.eq(200)
          })
          
        })
  
          
    })
  })