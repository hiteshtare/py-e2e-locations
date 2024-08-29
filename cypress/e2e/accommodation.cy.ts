// Import common util
import {
  captureSreenshot,
  checkIfElementIsVisible,
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
    //Populate Step 1 - Form fields
    accommodationPages.populateStep1_fields();

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
  });

  it("Member Modal for STEP-2 should fire validation, if input fields are empty", () => {
    //Populate Step 1 - Form fields
    accommodationPages.populateStep1_fields();

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
    //Step 1 - Form fields

    //Populate Step 2 - Form fields
    // accommodationPages.populateStep2_fields();

    /* --------------------- Add Member --------------------- */
    cy.get(accommodationPages.btnAddMember).click();

    //Click on Add button to add new Member
    cy.get(accommodationPages.btnAdd).click();

    checkIfElementIsVisible(accommodationPages.modal_divValidation);
    /* --------------------- Add Member --------------------- */
  });

  it("Form for STEP-2 should Not member", () => {
    //Populate Step 1 - Form fields
    accommodationPages.populateStep1_fields();

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
    //Step 1 - Form fields

    //Populate Step 2 - Form fields
    // accommodationPages.populateStep2_fields();

    /* --------------------- Add Member --------------------- */
    cy.get(accommodationPages.btnAddMember).click();

    accommodationPages.populateModal_fields();

    //Click on Add button to add new Member
    cy.get(accommodationPages.btnCancel).click();

    captureSreenshot();
    /* --------------------- Add Member --------------------- */

    //Click on Submit button to submit Form
    // cy.get(accommodationPages.btnSubmit).click();

    // checkIfElementIsVisible(accommodationPages.divValidation);
    //Step 2 - Form fields
  });

  it("Form for STEP-2 should Add 1 member", () => {
    //Populate Step 1 - Form fields
    accommodationPages.populateStep1_fields();

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
    //Step 1 - Form fields

    //Populate Step 2 - Form fields
    accommodationPages.populateStep2_fields();

    /* --------------------- Add Member --------------------- */
    cy.get(accommodationPages.btnAddMember).click();

    accommodationPages.populateModal_fields();

    //Click on Add button to add new Member
    cy.get(accommodationPages.btnAdd).click();

    captureSreenshot();
    /* --------------------- Add Member --------------------- */

    //Click on Submit button to submit Form
    // cy.get(accommodationPages.btnSubmit).click();

    // checkIfElementIsVisible(accommodationPages.divValidation);
    //Step 2 - Form fields
  });
  
  it("Form for STEP-2 should fire validation, if input fields are empty", () => {
    //Populate Step 1 - Form fields
    accommodationPages.populateStep1_fields();

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
    //Populate Step 1 - Form fields
    accommodationPages.populateStep1_fields();

    //Click on Next button to submit Form
    cy.get(accommodationPages.btnNext).click();
    //Step 1 - Form fields

    //Populate Step 2 - Form fields
    accommodationPages.populateStep2_fields();

    //Click on Submit button to submit Form
    cy.get(accommodationPages.btnSubmit).click();
    //Step 2 - Form fields
  });
});
