const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    url:"https://www.zarahome.com/pl/",
    urlSearch: "https://www.zarahome.com/pl/search.html"

  },

  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  specPattern: 'cypress/integration/tests/*.js'
  },
});
