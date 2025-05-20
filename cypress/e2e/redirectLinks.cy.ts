// Import pages
import { ItemPages } from "./pages/item.page";
import {
  captureSreenshot,
} from "./util/common.util";

// Import custom modules
const itemPages = new ItemPages();

//Import test data for Books
const testDataForItems = require("../fixtures/existing_centres_url.json");

// using baseURL 
const baseUrl = Cypress.config('baseUrl');

describe.skip("Redirection test for Old Centres links", () => {
  testDataForItems.forEach((testCase: any, index: number) => {
      it(`#${index + 1} Centre link: ${
        testCase.match_url
      } should give 301 REDIRECT status`, () => {
        const fullURL = `${baseUrl}${testCase.match_url}`;
        cy.log(`#${index + 1} Centre with Redirection link: ${fullURL}`);

        cy.request("HEAD", testCase.match_url).its("status").should("eq", 301);
      });
  });
});
