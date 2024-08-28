// Import common util
import {
  captureSreenshot,
  checkIfElementExist,
  checkIfElementIsVisible,
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

  it("Form Title should contain  'Accommodation'", () => {
    cy.get(accommodationPages.divTitle).contains('Accommodation')
  });

  it("Form should fire validation, if input fields are empty", () => {
    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();

    checkIfElementIsVisible(accommodationPages.divValidation);
  });

  it("Form should submit STEP-1 after all input fields are filled", () => {
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

    //Set checkbox value on Form
    const isAccommodationShared = Cypress.env("IS_ACCOMMODATION_SHARED");
    if (isAccommodationShared === true) {
      cy.get(accommodationPages.checkbox_AccommodationShared).check()
    }

    captureSreenshot();
    
    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
  });
});
