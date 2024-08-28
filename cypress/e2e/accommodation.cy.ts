// Import common util
import {
  captureSreenshot,
  checkIfElementExist,
  checkIfElementNotExist,
  checkStatus200ForLink,
  getElementLink,
  getElementText,
} from "./util/common.util";

import { AccommodationPages } from "./pages/accommodation.page";

const accommodationPages = new AccommodationPages();

describe("Ranchi - Accommodation page", () => {
  beforeEach(() => {
    cy.visit("/ranchi-accommodation");
  });

  it("Title should contain 'Accommodation'", () => {
    cy.get(accommodationPages.divTitle).contains('Accommodation')
  });

  it("Should submit STEP-1", () => {
    cy.get(accommodationPages.inputArrivalDate).type(Cypress.env("ARRIVAL_DATE"));
    cy.get(accommodationPages.inputDepartureDate).type(Cypress.env("DEPARTURE_DATE"));
    //Set Dropdown value on Form
    cy.get(accommodationPages.selectArrivalTime).select(Cypress.env("ARRIVAL_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectDepartureTime).select(Cypress.env("DEPARTURE_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectPurposeofVisit).select(Cypress.env("PURPOSE_VISIT"), {
      force: true,
    });
    cy.get(accommodationPages.inputAdditionalInformation).type(Cypress.env("ADDITION_INFO"));

    const isAccommodationShared = Cypress.env("IS_ACCOMMODATION_SHARED");
    if (isAccommodationShared === true) {
      cy.get(accommodationPages.checkbox_AccommodationShared).check()
    }
  });
});
