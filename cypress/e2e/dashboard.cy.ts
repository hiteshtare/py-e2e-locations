// Import common util
import {
  captureSreenshot,
  checkIfElementExist,
  checkIfElementNotExist,
  checkStatus200ForLink,
  getElementLink,
  getElementText,
} from "./util/common.util";

import { DashboardPages } from "./pages/dashboard.page";

const dashboardPages = new DashboardPages();

describe.skip("List of Centres page", () => {
  beforeEach(() => {
    cy.visit("/list-of-centres");
  });

  let arritemArr: any[] = [];

  function maybeClickNext(page = 1) {
    // the Next button is always present
    // let's get its attribute "disabled"

    let btnNext = "";

    if (page === 1) {
      btnNext = ".prev-next > .jet-filters-pagination__link";
    } else {
      btnNext = ".next > .jet-filters-pagination__link";
    }

    if (checkIfElementExist(btnNext)) {
      cy.get(btnNext, { log: false })
        .invoke({ log: false }, "attr", "disabled")
        .then((disabled) => {
          if (disabled === "disabled") {
            cy.log("Last page!");
          } else {
            cy.log(`Page #${page}: Items`);
            // not the end yet, sleep half a second for clarity,
            // click the button, and recursively check again

            cy.wait(4000)
              .get(".elementor-loop-container.elementor-grid > div")
              .each(($event, index) => {

                // cy.screenshot({ capture: "fullPage" });
                
                cy.wrap($event).within(async () => {
                  const title: string = await getElementText(
                    dashboardPages.btnCardTitle
                  );
                  const author: string = "";
                  // const author: string = await getElementText(
                  //   dashboardPages.btnCardAuthor
                  // );
                  const link: string = await getElementLink(
                    dashboardPages.btnCardTitle
                  );

                  let item = {
                    pageNo: `${page}`,
                    itemNo: `${index + 1}`,
                    title: title,
                    link: link,
                    author: author,
                  };

                  arritemArr.push(item);
                });
              });

            if (checkIfElementExist(btnNext)) {
              cy.writeFile(
                "cypress/downloads/teachingsLibrary_item.json",
                arritemArr
              );

              cy.get(btnNext)
                .click()
                .then(() => maybeClickNext(page + 1));
            }
          }
        });
    }
  }

  describe("Pagination", () => {
    it.skip("clicks the Next button until we get to the last page", () => {
      // the HTML table on the page is paginated
      // can you click the "Next" button until
      // we get to the very last page?
      // button selector ".prev-next > .jet-filters-pagination__link"

      maybeClickNext();

      cy.log("**confirm we are on the last page**");
      // cy.get(".prev-next > .jet-filters-pagination__link").should("be.disabled");
      // cy.get("[value=last]").should("be.disabled");
    });

    it("Prev button should not be visible", () => {
      checkIfElementNotExist(".jet-filters-pagination__item .prev-next .prev");
    });
  });

  describe("button: Donate", () => {
    it("Donate button - should be clickable", () => {
      cy.get(dashboardPages.btnDonate).click();
    });

    it("Donate button - give 200 OK status", () => {
      checkStatus200ForLink(dashboardPages.btnDonate);
    });
  });
});
