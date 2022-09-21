import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "9d83ob",
  env: {
    // All of the future env code like username, database uri, etc
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
