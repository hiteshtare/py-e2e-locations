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

  it("Form for STEP-1 should fire validation, if input fields are empty", () => {
    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();

    checkIfElementIsVisible(accommodationPages.divValidation);
  });

  it("Form for STEP-1 should submit after all input fields are filled", () => {
    cy.get(accommodationPages.inputArrivalDate).type(Cypress.env("STEP1_ARRIVAL_DATE"));
    cy.get(accommodationPages.inputDepartureDate).type(Cypress.env("STEP1_DEPARTURE_DATE"));
    //Set Dropdown value on Form
    cy.get(accommodationPages.selectArrivalTime).select(Cypress.env("STEP1_ARRIVAL_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectDepartureTime).select(Cypress.env("STEP1_DEPARTURE_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectPurposeofVisit).select(Cypress.env("STEP1_PURPOSE_VISIT"), {
      force: true,
    });
    cy.get(accommodationPages.inputAdditionalInformation).type(Cypress.env("STEP1_ADDITION_INFO"));

    //Set checkbox value on Form
    const isAccommodationShared = Cypress.env("STEP1_IS_ACCOMMODATION_SHARED");
    if (isAccommodationShared === true) {
      cy.get(accommodationPages.checkbox_AccommodationShared).check()
    }

    captureSreenshot();

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
  });

  it("Form for STEP-2 should fire validation, if input fields are empty", () => {
    //Step 1 - Form fields
    cy.get(accommodationPages.inputArrivalDate).type(Cypress.env("STEP1_ARRIVAL_DATE"));
    cy.get(accommodationPages.inputDepartureDate).type(Cypress.env("STEP1_DEPARTURE_DATE"));
    //Set Dropdown value on Form
    cy.get(accommodationPages.selectArrivalTime).select(Cypress.env("STEP1_ARRIVAL_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectDepartureTime).select(Cypress.env("STEP1_DEPARTURE_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectPurposeofVisit).select(Cypress.env("STEP1_PURPOSE_VISIT"), {
      force: true,
    });
    cy.get(accommodationPages.inputAdditionalInformation).type(Cypress.env("STEP1_ADDITION_INFO"));

    //Set checkbox value on Form
    const isAccommodationShared = Cypress.env("STEP1_IS_ACCOMMODATION_SHARED");
    if (isAccommodationShared === true) {
      cy.get(accommodationPages.checkbox_AccommodationShared).check()
    }

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
    //Step 1 - Form fields

    //Step 2 - Form fields
    //Click on Submit button to submit Form
    cy.get(accommodationPages.btnSubmit).click();

    checkIfElementIsVisible(accommodationPages.divValidation);
    //Step 2 - Form fields
  });

  it("Form should submit STEP-1 & STEP-2 after all input fields are filled", () => {
    //Step 1 - Form fields
    cy.get(accommodationPages.inputArrivalDate).type(Cypress.env("STEP1_ARRIVAL_DATE"));
    cy.get(accommodationPages.inputDepartureDate).type(Cypress.env("STEP1_DEPARTURE_DATE"));
    //Set Dropdown value on Form
    cy.get(accommodationPages.selectArrivalTime).select(Cypress.env("STEP1_ARRIVAL_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectDepartureTime).select(Cypress.env("STEP1_DEPARTURE_TIME"), {
      force: true,
    });
    cy.get(accommodationPages.selectPurposeofVisit).select(Cypress.env("STEP1_PURPOSE_VISIT"), {
      force: true,
    });
    cy.get(accommodationPages.inputAdditionalInformation).type(Cypress.env("STEP1_ADDITION_INFO"));

    //Set checkbox value on Form
    const isAccommodationShared = Cypress.env("STEP1_IS_ACCOMMODATION_SHARED");
    if (isAccommodationShared === true) {
      cy.get(accommodationPages.checkbox_AccommodationShared).check()
    }

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
    //Step 1 - Form fields

    //Step 2 - Form fields
    cy.get(accommodationPages.inputName).type(Cypress.env("STEP2_NAME"));
   
    cy.get(accommodationPages.inputMobile).type(Cypress.env("STEP2_MOBILE"));
    cy.get(accommodationPages.inputEmail).type(Cypress.env("STEP2_EMAIL"));
    //Set Dropdown value on Form
    cy.get(accommodationPages.selectGender).select(Cypress.env("STEP2_GENDER"), {
      force: true,
    });
    cy.get(accommodationPages.inputAge).type(Cypress.env("STEP2_AGE"));
   
    cy.get(accommodationPages.selectCountry).select(Cypress.env("STEP2_COUNTRY"), {
      force: true,
    });
    cy.get(accommodationPages.inputCity).type(Cypress.env("STEP2_CITY"));
    cy.get(accommodationPages.selectIndianCitizen).select(Cypress.env("STEP2_INDIAN_CITIZEN"), {
      force: true,
    });
    
    cy.get(accommodationPages.selectYSS_SRFMember).select(Cypress.env("STEP2_YSS_SRFMEMBER"), {
      force: true,
    });
    cy.get(accommodationPages.inputLesson).type(Cypress.env("STEP2_LESSON"));
    cy.get(accommodationPages.selectKriyaban).select(Cypress.env("STEP2_KRIYABAN"), {
      force: true,
    });

    //Set checkbox value on Form
    const agreeTC = Cypress.env("STEP2_AGREE_TC");
    if (isAccommodationShared === true) {
      cy.get(accommodationPages.checkbox_agreeTC).check()
    }

    //Click on Submit button to submit Form
    cy.get(accommodationPages.btnSubmit).click();
    //Step 2 - Form fields
  });
});
