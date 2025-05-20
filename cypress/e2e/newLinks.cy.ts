// Import pages
import { ItemPages } from "./pages/item.page";
import { captureSreenshot } from "./util/common.util";

// Import custom modules
const itemPages = new ItemPages();

//Import test data for Books
const testDataForItems = require("../fixtures/existing_centres_url.json");

describe("New Locations links: Dynamic data test ", () => {
  testDataForItems.forEach((testCase: any, index: number) => {
    if (index < 2) {
      it(`#${index + 1} Location link: ${
        testCase.url
      } should give 200 OK status`, () => {
        cy.visit(`${testCase.url}`);

        cy.log(`#${index + 1} Location with link: ${testCase.url}`);

        cy.request("HEAD", testCase.url).its("status").should("eq", 200);

        captureSreenshot();

        cy.get("iframe").screenshot(
          `screenshot_google_map_${testCase.match_url}`
        );
      });
    }
  });
});
