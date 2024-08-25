// Import pages
import { ItemPages } from "./pages/item.page";
import {
  captureSreenshot,
  checkIfElementExist,
  checkIfElementIsClickable,
} from "./util/common.util";

// Import custom modules
const itemPages = new ItemPages();

//Import test data for Books
const testDataForItems = require("../fixtures/existing_centres_url.json");

describe.skip("Old Centres links: Dynamic data test ", () => {
  testDataForItems.forEach((testCase: any, index: number) => {
    it(`#${index+1} Centre link give 200 OK status`, () => {
      cy.visit(`${testCase.match_url}`);

      cy.log(`#${index+1} Centre with link: ${testCase.match_url}`);

      captureSreenshot();

      cy.request("HEAD", testCase.match_url).its("status").should("eq", 200);
    });
  });
});

describe("New Locations links: Dynamic data test ", () => {
  testDataForItems.forEach((testCase: any, index: number) => {
    it(`#${index + 1} Location link give 200 OK status`, () => {
      cy.request("HEAD", testCase.url).its("status").should("eq", 200);
      
      cy.visit(`${testCase.url}`);

      cy.log(`#${index+1} Location with link: ${testCase.url}`);

      captureSreenshot();
    });
  });
});
