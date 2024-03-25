const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      pageURL: "https://www.kiwi.com/en/country/china/?botview=1",
      expectedTitle: 'Cheap flights to China | Kiwi.com',
      metaDescription: 'Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.',
      expectedURLCanonical: "https://www.kiwi.com/en/country/china/" 
    }
  },
});
