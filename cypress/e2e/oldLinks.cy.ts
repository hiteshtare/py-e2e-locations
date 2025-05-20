// Import pages
import { ItemPages } from "./pages/item.page";
import {
  captureSreenshot,
} from "./util/common.util";

// Import custom modules
const itemPages = new ItemPages();

//Import test data for Books
const testDataForItems = require("../fixtures/existing_centres_url.json");

describe("Old Centres links: Dynamic data test ", () => {
  testDataForItems.forEach((testCase: any, index: number) => {
    if (index < 2) {
      it(`#${index + 1} Centre link: ${
        testCase.match_url
      } should give 200 OK status`, () => {
        cy.visit(`${testCase.match_url}`);

        cy.log(`#${index + 1} Centre with link: ${testCase.match_url}`);

        cy.request("HEAD", testCase.match_url).its("status").should("eq", 200);

        captureSreenshot();
      });
    }
  });
});
