// Import pages
import { ItemPages } from "./pages/item.page";
import {
  checkIfElementExist,
  checkIfElementIsClickable,
} from "./util/common.util";

// Import custom modules
const itemPages = new ItemPages();

//Import test data for Books
const testDataForItems = require("../fixtures/teachingsLibrary_item.json");
const testDataForItems_20onwards = require("../fixtures/teachingsLibrary_item_20.json");

describe.skip("Library items: Dynamic data test ", () => {
  testDataForItems.forEach((testCase: any, index: number) => {
    describe(`Page:${testCase.pageNo}/item:${testCase.itemNo} Item with title:${testCase.title} by author:${testCase.author}`, () => {
      beforeEach(() => {
        cy.visit(`${testCase.link}`);
      });

      it(`#${index} Item video should have image overlay link`, () => {
        checkIfElementExist(itemPages.videoOverlay, true);
      });

      it(`#${index} Item video link should give 200 OK status`, () => {
        checkIfElementExist(itemPages.videoWidget, false);

        cy.get(itemPages.videoWidget).then((link) => {
          const dataSettings = link.attr("data-settings");

          if (dataSettings) { 
            const obj = JSON.parse(dataSettings);
            const videoLink = obj.youtube_url;

            if (videoLink) { 
              cy.log(`link: ${videoLink}`);

              cy.request("HEAD", videoLink).its("status").should("eq", 200);
            }
          }
        });
      });

      it(`#${index} Item video should be clickable`, () => {
        checkIfElementIsClickable(itemPages.videoOverlay, false);
      });
    });
  });
});

describe("Library items from 20 onwards: Dynamic data test ", () => {
  testDataForItems_20onwards.forEach((testCase: any, index: number) => {
    describe(`Page:${testCase.pageNo}/item:${testCase.itemNo} Item with title:${testCase.title} by author:${testCase.author}`, () => {
      beforeEach(() => {
        cy.visit(`${testCase.link}`);
      });

      it(`#${index} Item video should have image overlay link`, () => {
        checkIfElementExist(itemPages.videoOverlay, true);
      });

      it(`#${index} Item video link should give 200 OK status`, () => {
        checkIfElementExist(itemPages.videoWidget, false);

        cy.get(itemPages.videoWidget).then((link) => {
          const dataSettings = link.attr("data-settings");

          if (dataSettings) { 
            const obj = JSON.parse(dataSettings);
            const videoLink = obj.youtube_url;

            if (videoLink) { 
              cy.log(`link: ${videoLink}`);

              cy.request("HEAD", videoLink).its("status").should("eq", 200);
            }
          }
        });
      });

      it(`#${index} Item video should be clickable`, () => {
        checkIfElementIsClickable(itemPages.videoOverlay, false);
      });
    });
  });
});
