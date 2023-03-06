/// <reference types="Cypress" />

describe("Kiwi assignment", () => {
  const URL_PAGE =
    "https://www.kiwi.com/en/airport/bcn/barcelona-el-prat-barcelona-spain/";
  const SameDivClass =
    "div[class='flex flex-row flex-nowrap grow shrink-0 items-center content-center justify-start w-full space-x-xxs space-y-none']";
  const string = " je zobrazená na stránke";
  const SameDIV2 =
    "div[class='ButtonPrimitiveContentChildren__StyledButtonPrimitiveContentChildren-sc-mra4yy-0 dkQFNd']";
  const _iterNumber = 11;

  beforeEach(function () {
    cy.visit(URL_PAGE);

    //Odstránenie cookies
    cy.contains("Customize").click();
    cy.contains("Accept all").click();

    //Kontrola, či je na stranke zobrazene vsetky sekcie

    cy.get(`${SameDIV2}`).eq(0).invoke("text").as("Section");
    cy.get("@Section").its("length").should("be.gt", 2);
    cy.get("@Section").should("include", "EUR");

    cy.get(`${SameDIV2}`).eq(1).invoke("text").as("Section2");
    cy.get("@Section2").its("length").should("be.gt", 2);
    cy.get("@Section2").should("include", "Return");

    const Travel = cy.get(`${SameDivClass}`).eq(0);
    Travel.then(($travel) => {
      const _travel = $travel.text();
      cy.log(`Sekcia ` + _travel + `${string}`);
    });

    const Cars = cy.get(`${SameDivClass}`).eq(1);
    Cars.then(($cars) => {
      const _cars = $cars.text();
      cy.log(`Sekcia ` + _cars + `${string}`);
    });

    const Rooms = cy.get(`${SameDivClass}`).eq(2);
    Rooms.then(($rooms) => {
      const _rooms = $rooms.text();
      cy.log(`Sekcia ` + _rooms + `${string}`);
    });

    const Stories = cy.get(`${SameDivClass}`).eq(3);
    Stories.then(($stories) => {
      const _stories = $stories.text();
      cy.log(`Sekcia ` + _stories + `${string}`);
    });

    const Deals = cy.get(`${SameDivClass}`).eq(4);
    Deals.then(($deals) => {
      const _deals = $deals.text();
      cy.log(`Sekcia ` + _deals + `${string}`);
    });

    const Travel_hacks_ = cy.get(`${SameDivClass}`).eq(5);
    Travel_hacks_.then(($travel_hacks) => {
      const _travel_hacks = $travel_hacks.text();
      cy.log(`Sekcia ` + _travel_hacks + `${string}`);
    });

    const SameString = "/en/pages/content/",
      SameStr2 = "/en/",
      SameStr3 = "/en/",
      href = "a[href*='/en/";

    const URL1 = "https://media.kiwi.com",
      URL2 = "https://partners.kiwi.com",
      URL3 =
        "https://jobs.kiwi.com/?utm_campaign=website&utm_medium=website&utm_source=kiwicom";

    //Verifikacia vsetkych sekcii
    const Terms_and_conditions = cy
      .get(`a[href*='${SameString}legal']`)
      .contains("Terms & Conditions");
    Terms_and_conditions.then(($TermsAndConditions) => {
      const Terms = $TermsAndConditions.text();
      cy.log("Sekcia " + Terms + " bola verifikovaná.");
    });

    const Terms_of_use = cy
      .get(`a[href*='${SameString}terms']`)
      .contains("Terms of Use");
    Terms_of_use.then(($TermsOfUse) => {
      const TermsUse = $TermsOfUse.text();
      cy.log("Sekcia " + TermsUse + " bola verifikovaná.");
    });

    const Privacy_policy = cy
      .get(`a[href*='${SameString}privacy']`)
      .contains("Privacy Policy");
    Privacy_policy.then(($PrivacyPolicy) => {
      const PrivacyPol = $PrivacyPolicy.text();
      cy.log("Sekcia " + PrivacyPol + " bola verifikovaná.");
    });

    const About = cy.get(`a[href*='${SameString}about']`).contains("About");
    About.then(($about) => {
      const _About = $about.text();
      cy.log("Sekcia " + _About + " bola verifikovaná.");
    });

    const People = cy.get(`a[href*='${SameString}people']`).contains("People");
    People.then(($people) => {
      const _people = $people.text();
      cy.log("Sekcia " + _people + " bola verifikovaná.");
    });

    const Company = cy
      .get(`a[href*='${SameString}company']`)
      .contains("Company");
    Company.then(($company) => {
      const _Company = $company.text();
      cy.log("Sekcia " + _Company + " bola verifikovaná.");
    });
    ///////////////////////////////////

    const Media_room = cy.get(`a[href*='${URL1}']`).contains("Media Room");
    Media_room.then(($MediaRoom) => {
      const _Media_room = $MediaRoom.text();
      cy.log("Sekcia " + _Media_room + " bola verifikovaná.");
    });

    const Security = cy.get(`${href}pages/security`).contains("Security");
    Security.then(($security) => {
      const _security = $security.text();
      cy.log("Sekcia " + _security + " bola verifikovaná.");
    });

    const Travel_hacks = cy
      .get(`${href}cheap-flights/travel-hacks']`)
      .contains("Travel hacks");
    Travel_hacks.then(($travel_hacks) => {
      const _travel_hacks = $travel_hacks.text();
      cy.log("Sekcia " + _travel_hacks + " bola verifikovaná.");
    });

    const Partners = cy.get(`a[href*='${URL2}']`).contains("Partnership");
    Partners.then(($partners) => {
      const _partners = $partners.text();
      cy.log("Sekcia " + _partners + " bola verifikovaná.");
    });

    const Jobs = cy.get(`a[href*='${URL3}']`).contains("Jobs");
    Jobs.then(($jobs) => {
      const _jobs = $jobs.text();
      cy.log("Sekcia " + _jobs + " bola verifikovaná.");
    });

    const Help = cy.get(`${href}help']`).contains("Need help?");
    Help.then(($help) => {
      const _help = $help.text();
      cy.log("Sekcia " + _help + " bola verifikovaná.");
    });

    const Sign = cy
      .get("a[data-test*='Footer-PagesContent-Auth']")
      .contains("Sign in");
    Sign.then(($sign) => {
      const _sign = $sign.text();
      cy.log("Sekcia " + _sign + " bola verifikovaná.");
    });

    const Mobile_app = cy.get(`${href}pages/mobile']`).contains("Mobile app");
    Mobile_app.then(($MobileApp) => {
      const _mobileApp = $MobileApp.text();
      cy.log("Sekcia " + _mobileApp + " bola verifikovaná.");
    });

    const Cheap_flights = cy
      .get(`${href}cheap-flights']`)
      .contains("Cheap flights");
    Cheap_flights.then(($CheapFlights) => {
      const _cheapFlights = $CheapFlights.text();
      cy.log("Sekcia " + _cheapFlights + " bola verifikovaná.");
    });

    const Site_map = cy.get(`${href}travel/countries']`).contains("Site map");
    Site_map.then(($SiteMap) => {
      const _siteMap = $SiteMap.text();
      cy.log("Sekcia " + _siteMap + " bola verifikovaná.");
    });

    //Kontrola, či je na stranke zobrazena mapa
    const Mapa = cy.get(".ExploreSectionstyled__Explore-sc-h1zc8h-2");
    cy.log("Mapa je zobrazena");

    //Skontroluj, že v search form je destinacia správne nastavené na Barcelona BCN
    const Barc = cy.contains("Barcelona");
    Barc.then(($barc) => {
      const _barc = $barc.text();
      cy.log(
        "Destinácia do " + _barc + " je v search form-e správne nastavená."
      );
    });

    //Skontroluj, že H1 element má správny text
    const H1Text = cy.get("h1").should("have.text", "Barcelona–El Prat (BCN)");
    H1Text.then(($h1Text) => {
      const _H1 = $h1Text.text();
      cy.log("Text na " + _H1 + " je správne nastavený.");
    });
  });

  afterEach(() => {
    //Pokračuj na rezervačný formulár z prvého výsledku (klikni na tlačidlo "Select"/"Rezervovať")
    const Element = cy
      .get("div[class='Stack__StyledStack-sc-53pobq-0 hBqnjd']")
      .eq(0)
      .click();
    cy.get('[data-test="MagicLogin-GuestTextLink"]').click();

    //Over, že si sa dostal na booking stránku (rezervačný formulár)
    const VerifyH1 = cy.get('[data-test="CommonJourneyHead"]');
    VerifyH1.then(($verifyH1) => {
      const _verifyH1 = $verifyH1.text();
      cy.log(
        "Presmerovanie na booking stránku s H1 textom: " +
          _verifyH1 +
          " bolo overené."
      );
    });
  });

  for (let i = 1; i < _iterNumber; i++) {
    it("Kiwi (Easier) Assignment, Test number: " + i, () => {
      //V sekcii “ Popular destinations from Barcelona–El Prat (BCN)” klikni na prvú picture card
      cy.get(
        'a[href*="/en/search/results/barcelona-spain/ibiza-spain/2023-04-19"]'
      ).click();

      //Skontroluj, že si bol/a presmerovaný/á na stránku search/results so správne vyplneným search form
      const Dest = cy.get(
        '[data-test="PlacePickerInput-origin"] > [data-test="PlacePickerInputPlace"]'
      );
      Dest.then(($dest) => {
        const _dest = $dest.text();
        cy.log("Text na " + _dest + " je správne nastavený.");
      });

      const Dest2 = cy.get(
        '[data-test="PlacePickerInput-destination"] > [data-test="PlacePickerInputPlace"]'
      );
      Dest2.then(($dest2) => {
        const _dest2 = $dest2.text();
        cy.log("Text na " + _dest2 + " je správne nastavený.");
      });

      //Pridaj vo filtroch jednu príručnú batožinu
      //cy.get("div[class='ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-1bqiptv-0 bSPTmt']").click()
      cy.get(
        '[data-test="PassengersField"] > .Popover__StyledPopoverChild-sc-te0bas-0 > .ButtonWrapsstyled__ButtonTabletWrap-sc-zf781k-0 > .ButtonPrimitive__StyledButtonPrimitive-sc-j8pavp-0 > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1nfggrh-0 > .ButtonPrimitiveIconContainer__StyledButtonPrimitiveIconContainer-sc-1bqiptv-0'
      ).click();
      cy.get(
        ':nth-child(2) > .BagsPickerstyled__Wrapper-sc-h2j3jl-0 > [data-test="BagsPopup-cabin"] > .LabeledStepperstyled__StepperWrap-sc-oo4v0a-4 > .StepperStateless__StyledStepper-sc-1nz7kdj-0 > .iVyNrG > .ButtonPrimitiveContent__StyledButtonPrimitiveContent-sc-1nfggrh-0'
      ).click();
      cy.get('[data-test="PassengersFieldFooter-done"]').click();
      //cy.get("input[value='1']").

      //Presvedč sa, že sa ti načítali nové výsledky.
      const batJeNacitana = cy.get("input[value='1']").eq(1);
      batJeNacitana.then(($bat) => {
        const _batozina = $bat.text();
        cy.log("Bola pridaná" + _batozina + " batožina.");
      });

      //Pokračuj na rezervačný formulár z prvého výsledku (klikni na tlačidlo "Select"/"Rezervovať")
      /*   const Element = cy
        .get("div[class='Stack__StyledStack-sc-53pobq-0 hBqnjd']")
        .eq(0)
        .click();
      cy.get('[data-test="MagicLogin-GuestTextLink"]').click();

      //Over, že si sa dostal na booking stránku (rezervačný formulár)
      const VerifyH1 = cy.get('[data-test="CommonJourneyHead"]');
      VerifyH1.then(($verifyH1) => {
        const _verifyH1 = $verifyH1.text();
        cy.log(
          "Presmerovanie na booking stránku s H1 textom: " +
            _verifyH1 +
            " bolo overené."
        );
      });
*/
    });
  }

  for (let i = 1; i < _iterNumber; i++) {
    it.only("Kiwi (Harder) Assignment, Test number: " + i, () => {
      //V 5. bode skús vybrať náhodnú picture card namiesto prvej.
      const randomNumber = Math.floor(Math.random() * 7);
      cy.get(
        `div[class='PictureCardstyled__FullSize-sc-1d87rgu-6 PictureCardstyled__PictureCardContent-sc-1d87rgu-9 jFceqz dgBQRp']`
      )
        .eq(randomNumber)
        .click();

      //V 6. bode skontroluj, že si:
      //bol/a presmerovaný/á so status kódom 200:
      cy.request(
        "GET",
        "https://cdn0.forter.com/078d9f6a6dc1/7de202aec8fe4efba70691c4969d4a02/prop.json?_=1677952595355"
      ).then((response) => {
        expect(response.status).to.eq(200);
      });

      //url, na ktorú si bol/a presmerovaný/á, je rovnaká, ako href atribút elementu picture card, na ktorú si klikol/a:
      /*   const URLs = "https://www.kiwi.com/en/search/results/barcelona-spain/"
                    const Hrefs = "/en/search/results/barcelona-spain/"
                       
                    const pages = [
                      { url: `${URLs}ibiza-spain/2023-04-19`, href: `${Hrefs}ibiza-spain/2023-04-19`},
                      { url: `${URLs}palma-spain/2023-03-27`, href: `${Hrefs}palma-spain/2023-03-27`},
                      { url: `${URLs}nice-france/2023-04-17`, href: `${Hrefs}nice-france/2023-04-17`},
                      { url: `${URLs}menorca-spain/2023-04-20`, href: `${Hrefs}menorca-spain/2023-04-20`},
                      { url: `${URLs}geneva-switzerland/2023-04-12`, href: `${Hrefs}geneva-switzerland/2023-04-12`},
                      { url: `${URLs}marseille-france/2023-04-16`, href: `${Hrefs}marseille-france/2023-04-16`},
                      { url: `${URLs}valladolid-spain/2023-11-26`, href: `${Hrefs}valladolid-spain/2023-11-26`},
                      { url: `${URLs}faro-portugal/2023-03-27`, href: `${Hrefs}faro-portugal/2023-03-27`}
                    ]
                    
                    pages.forEach((URLs) => {
                      it(`It should have href ${page.href} on page ${page.url}`, () => {
                        cy.visit(URLs)
                        cy.get('a').should('have.attr', 'href', page.href)
                        cy.url().should('eq', "https://www.kiwi.com/en/airport/bcn/barcelona-el-prat-barcelona-spain/"+ page.url)
                      })
          
                      //cy.get('a').should('have.attr', `${page.href}`).then((href) => {cy.url().should('eq', URLs + `${page.href}`) })
                     
          
                    })
          */

      //bol zavolaný API call, kde boli správne aplikované filtre a dostali sme nejakú odpoveď:
    });
  }
});
