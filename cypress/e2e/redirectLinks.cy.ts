// Import pages
import { ItemPages } from "./pages/item.page";
import { captureSreenshot } from "./util/common.util";

// Import custom modules
const itemPages = new ItemPages();

//  ------- teachings-library data for testing redirection -------  //
// const testDataForItems = require("../fixtures/teachings-library_redirect_url.json");
//  ------- teachings-library data for testing redirection -------  //
//Import test data for Books
const testDataForItems = require("../fixtures/existing_centres_url.json");

// using baseURL
const baseUrl = Cypress.config("baseUrl");

describe.skip("Redirection test for Old Centres links", () => {
  testDataForItems.forEach((testCase: any, index: number) => {
    it(`#${index + 1} Centre link: ${
      testCase.match_url
    } should give 301 REDIRECT status`, () => {
      const fullURL = `${baseUrl}${testCase.match_url}`;
      const redirectedLocationURL = `${baseUrl}${testCase.url}`;
      cy.log(`#${index + 1} Centre with Old link: ${fullURL}`);
      cy.log(`#${index + 1} Centre with New redirected (Location) link: ${redirectedLocationURL}`);
      
      cy.request({
        url: testCase.match_url,
        followRedirect: false, // turn off following redirects
      }).then((resp) => {
        // redirect status code is 301
        expect(resp.status).to.eq(301);
        expect(resp.redirectedToUrl).to.eq(redirectedLocationURL);
      });
    });
  });
});
