import { defineConfig } from "cypress";
// @ts-ignore
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';


export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",

    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
      return config;
    },
  viewportWidth: 1440,
  viewportHeight: 900,
  },
});
