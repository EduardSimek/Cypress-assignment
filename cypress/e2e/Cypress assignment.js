describe("Zadanie pre kiwi", () => {
  it("First assignment", () => {
    const URLPage =
      "https://www.kiwi.com/en/airport/bcn/barcelona-el-prat-barcelona-spain/";
    const SameDivClass =
      "div[class='flex flex-row flex-nowrap grow shrink-0 items-center content-center justify-start w-full space-x-xxs space-y-none rtl:space-x-reverse']";
    const celaSekcia = 'div[class="mb-none p-m pt-0 bg-none de:pb-l"]';
    const mapa1 =
      'img[src="https://api.maptiler.com/maps/887dee8a-b6cb-482c-a748-07fc6d8c3feb/static/2.07833333,41.2969444,11/400x300.jpg?key=y5blXLKijrXtWvxoDX7R&markers=&padding=false&path=false"]';
    const mapa2 =
      'img[srcset="https://api.maptiler.com/maps/887dee8a-b6cb-482c-a748-07fc6d8c3feb/static/auto/800x300@2x.jpg?key=y5blXLKijrXtWvxoDX7R&markers=-3.5666667%2C40.4936111%2Crgb%280%2C169%2C145%29%7C-4.4991667%2C36.675%2Crgb%280%2C169%2C145%29%7C4.21861111%2C39.8625%2Crgb%280%2C169%2C145%29%7C2.73888889%2C39.5516667%2Crgb%280%2C169%2C145%29%7C9.70027778%2C45.6688889%2Crgb%280%2C169%2C145%29%7C1.37305556%2C38.8727778%2Crgb%280%2C169%2C145%29%7C5.215%2C43.4366667%2Crgb%280%2C169%2C145%29%7C-0.7152778%2C44.8286111%2Crgb%280%2C169%2C145%29%7C-4.9780556%2C33.9272222%2Crgb%280%2C169%2C145%29%7C-3.0283333%2C34.9888889%2Crgb%280%2C169%2C145%29&padding=0.15&path=false"]';

    const h2_1 =
      'h2[class="orbit-heading font-text text-color-text-heading m-0 leading-heading-title2 font-heading-title2 text-heading-title2 text-start mb-l';
    const h2_2 =
      'h2[class="orbit-heading font-text text-color-text-heading m-0 leading-heading-title2 font-heading-title2 text-heading-title2 text-start mb-m"]';
    const h2_3 =
      'h2[class="orbit-heading font-text text-color-text-heading m-0 leading-heading-title2 font-heading-title2 text-heading-title2 text-start"]';

    cy.visit(URLPage);
    cy.get('[data-test="CookiesPopup-Accept"]').click();

    function verificationAllSections() {
      cy.get("nav").should("be.visible");
      cy.get('[data-test="Logo"]').should("be.visible");
      cy.get('div[class="flex items-center"]').eq(0).should("be.visible");
      cy.get(`.box-border.flex-col.flex.tb\\:flex-col`).should("exist");
      const definingSections = [
        "Travel",
        "Cars",
        "Rooms",
        "Stories",
        "Deals",
        "Travel hacks",
      ];
      definingSections.forEach((section, index) => {
        cy.get(`${SameDivClass}`)
          .eq(index)
          .should(($div) => {
            expect($div).to.exist;
            expect($div).to.have.text(section);
          });
      });

      function verificationSectionsVisibility(oneSection) {
        for (let j = 0; j < 3; j++) {
          cy.get(oneSection).eq(j).should("be.visible");
        }
      }
      verificationSectionsVisibility(celaSekcia);
      cy.get('div[data-test="Faq"]').should("be.visible");
      cy.get(
        'div[class="relative box-border mb-xxxl pt-xxl bg-image-wrapper tb:mb-0 tb:pb-[48px] tb:bg-no-repeat tb:bg-cover tb:[background-image:var(--travel-airport)] de:pt-[48px] de:pb-[68px] de:bg-transparent ld:flex ld:flex-col ld:justify-center ld:min-h-[392px] ld:py-0 [&_.hero-image]:absolute [&_.hero-image]:top-0 [&_.hero-image]:left-0 [&_.hero-image]:w-full [&_.hero-image]:h-full [&_.hero-image]:object-cover [&_.hero-image]:object-position-0-100 [&_.hero-image]:transition-opacity [&_.hero-image]:duration-normal [&_.hero-image]:ease-out [&_.hero-image]:pointer-events-none"]'
      ).should("be.visible");
      cy.get('div[data-test="Footer-Claim"]').should("be.visible");
      cy.get('div[class="pb-m de:pb-l px-m"]').should("be.visible");
    }

    verificationAllSections();

    function verifyH_Elements() {
      cy.get("h1").should(
        "have.text",
        "Cheap flights from Barcelona–El Prat (BCN)"
      );

      cy.get(h2_1)
        .eq(0)
        .should("have.text", "Get to know Barcelona–El Prat (BCN)");
      cy.get(h2_1)
        .eq(1)
        .should(
          "have.text",
          "Other popular flights from Barcelona–El Prat (BCN)"
        );

      cy.get(h2_2)
        .eq(0)
        .should(
          "have.text",
          "Popular destinations from Barcelona–El Prat (BCN)"
        );
      cy.get(h2_2).eq(1).should("have.text", "Frequently asked questions");

      cy.get(h2_3)
        .eq(0)
        .should("have.text", "Barcelona–El Prat destination map 2023");
      cy.get(h2_3)
        .eq(1)
        .should("have.text", "Top airlines flying to/from Barcelona–El Prat");
    }

    verifyH_Elements();

    cy.log("In section click on the first picture card");
    cy.get('div[data-test="PictureCardContent"]').first().click();

    function assertionResults() {
      function getPlaceElement(selector, index) {
        return cy.get(selector).eq(index);
      }

      // Check that the text of the place element with the given selector and index is as expected
      function checkPlaceText(selector, index, expectedText) {
        getPlaceElement(selector, index).should("have.text", expectedText);
      }

      // Get the text of the place element with the given selector and index
      function getPlaceText(selector, index) {
        return getPlaceElement(selector, index)
          .invoke("text")
          .then((text) => {
            return text.trim();
          });
      }

      // Log the departure and destination places using the given selectors and indices
      function logPlaces(
        departureSelector,
        departureIndex,
        destinationSelector,
        destinationIndex
      ) {
        getPlaceText(departureSelector, departureIndex).then(
          (departurePlace) => {
            cy.log("Departure place is ", departurePlace);
          }
        );

        getPlaceText(destinationSelector, destinationIndex).then(
          (destinationPlace) => {
            cy.log("Destination place is ", destinationPlace);
          }
        );
      }

      // Call the functions with the appropriate arguments
      checkPlaceText(
        'div[class="PlacePickerInputPlacestyled__StyledPlacePickerInputPlace-sc-esw2vf-0 llBjQN"]',
        0,
        "Barcelona‎"
      );

      checkPlaceText(
        'div[class="PlacePickerInputPlacestyled__StyledPlacePickerInputPlace-sc-esw2vf-0 llBjQN"]',
        1,
        "Palma, Majorca‎"
      );

      logPlaces(
        'div[class="PlacePickerInputPlacestyled__StyledPlacePickerInputPlace-sc-esw2vf-0 llBjQN"]',
        0,
        'div[class="PlacePickerInputPlacestyled__StyledPlacePickerInputPlace-sc-esw2vf-0 llBjQN"]',
        1
      );
    }

    assertionResults();

    cy.log("Pridaj príručnú batožinu");
    cy.get(
      'div[class="ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-1bqiptv-0 fWaFsS"]'
    )
      .eq(1)
      .click();
    const batJeNacitana = cy.get("input[value='1']").eq(1);
    batJeNacitana.then(($bat) => {
      const _batozina = $bat.text();
      cy.log("Bola pridaná" + _batozina + " batožina.");
    });

    cy.log("Click on first search button");
    cy.get('div[class="Stack__StyledStack-sc-53pobq-0 haOWpe"]').eq(0).click();
    cy.get('div[class="Stack__StyledStack-sc-53pobq-0 cECYv"]').click();

    function checkBookingPage() {
      cy.get(
        'div[class="LayoutColumn__StyledColumn-sc-aa57pk-0 cXEizD"]'
      ).should("be.visible");
      cy.get('nav[data-test="NavBar"]').should("be.visible");
    }

    function checkAllSubsections() {
      cy.get(
        'main[class="LayoutColumn__StyledColumn-sc-aa57pk-0 gtqEyX"]'
      ).should("be.visible");
    }

    function lastAssertions() {
      cy.log("Check if we are currently in booking page");
      checkBookingPage();

      cy.log(
        "Zobrazenie všetkých podsekcií - Trip summary, Sign in for easier booking, Contact details"
      );
      checkAllSubsections();

      cy.log("Zobrazenie ceny");
      cy.get('div[class="Sidebar__StickyWrapper-sc-1hdb3jf-0 PGRlh"]').should(
        "be.visible"
      );
    }

    lastAssertions();
  });
});
