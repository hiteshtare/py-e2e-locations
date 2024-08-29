// Import common util
import { captureSreenshot, checkIfElementIsVisible } from "./util/common.util";

import { AccommodationPages } from "./pages/accommodation.page";

const accommodationPages = new AccommodationPages();

describe("Ranchi - Accommodation page", () => {
  beforeEach(() => {
    cy.visit("/ranchi-accommodation");
  });

  describe("STEP-1", () => {
    it("STEP-1: Form Title should contain  'Accommodation'", () => {
      cy.get(accommodationPages.divTitle).contains("Accommodation");
    });

    it("STEP-1: Form should fire validation, if input fields are empty", () => {
      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext).click();

      checkIfElementIsVisible(accommodationPages.divValidation);
    });

    it("STEP-1: Form should submit after all input fields are filled", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields();

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext).click();
    });
  });

  describe("STEP-2", () => {
    it("STEP-2: Member Modal should fire validation, if input fields are empty", () => {
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

    it("STEP-2: Form should Not Add member", () => {
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

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */

      //Click on Submit button to submit Form
      // cy.get(accommodationPages.btnSubmit).click();

      // checkIfElementIsVisible(accommodationPages.divValidation);
      //Step 2 - Form fields
    });

    it("STEP-2: Form should Add 1 member", () => {
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
      cy.get(accommodationPages.btnAdd).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */

      //Click on Submit button to submit Form
      // cy.get(accommodationPages.btnSubmit).click();

      // checkIfElementIsVisible(accommodationPages.divValidation);
      //Step 2 - Form fields
    });

    it("STEP-2: Form should fire validation, if input fields are empty", () => {
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

    it("STEP-2: Form should submit STEP-1 & STEP-2 after all input fields are filled", () => {
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
});
