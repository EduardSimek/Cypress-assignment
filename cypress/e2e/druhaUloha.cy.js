/// <reference types="cypress"/>

describe.skip("Second Exercise", () => {

    const pageURL = "https://www.kiwi.com/es/cheap-flights/london-united-kingdom/istanbul-turkey/"

    beforeEach(() => {
        cy.visit(pageURL)
        cy.setCookie("__kwc_agreed", "true")
    })
    it("Should verify unsupported language", () => {

        // Intercept the network request to check for redirection or error message
        cy.intercept("GET", "**/*").as("networkRequest") 

        //Waiting fot the network request to complete 
        cy.wait("@networkRequest").then((interception) => {
            if (interception.response.statusCode == 404) {
                cy.contains("Language not supported").should("be.visible")
            }
            else if (interception.response.statusCode == 302){
                cy.url().should('not.include', '/unsupported-language-page')
            }
            else {
                cy.get("body").should("have.class", "supported-language-body")
            }
        })


    })
})




describe('task 2', () => {
    it('Part 1 - check the language is not supported on the visited site and is changed accordingly after redirect', () => {
      const originalTargetPath = "https://www.kiwi.com/es/cheap-flights/london-united-kingdom/istanbul-turkey/"
      const regex = /\/([a-z]{2})\//
  
      const requestedLanguage = originalTargetPath.match(regex)[1]
      expect(
        requestedLanguage,
        'Check there is just one captured group returned by matched substring',
      ).to.have.length(2)
  
      cy.log('Request original URL, compare with redirect location')
      cy.request({
        url: originalTargetPath,
        followRedirect: false,
      }).then(({ status, headers }) => {
        const resolvedPath = headers.location
        const resolvedLanguage = resolvedPath.match(regex)[1]
  
        expect(status).to.eq(301)
        expect(resolvedPath).to.not.eq(originalTargetPath)
        expect(
          resolvedLanguage,
          'Check there is just one captured group returned by matched substring',
        ).to.have.length(2)
        expect(resolvedLanguage).to.not.eq(requestedLanguage)
  
        cy.log('Verify language from html element attribute')
        cy.visit(originalTargetPath)
        cy.get('html').should('have.attr', 'lang', resolvedLanguage)
      })
    })
  
    it('Part 2 - hreflangs', () => {
      let langValue
      let hrefLangsArray = []
  
      cy.visit('/es/cheap-flights/london-united-kingdom/istanbul-turkey/')
  
      cy.log('Get all <link> elements in <head> with "hreflang" attribute')
      cy.get('head link')
        .filter('[hreflang]')
        .as('hrefLangs')
        .then($hrefLangs => {
          $hrefLangs.each(function () {
            langValue = this.attributes.hreflang.value
  
            hrefLangsArray.push(langValue)
          })
          cy.wrap(hrefLangsArray).as('hrefLangsArray')
        })
      cy.fixture('hrefLangsFlightsLondonIstanbul.json').as('fixtureHrefLangsArray')
  
      cy.log('Verify current hreflangs against save fixture')
      cy.then(function () {
        expect(this.fixtureHrefLangsArray).to.deep.equal(this.hrefLangsArray)
      })
    })
  })