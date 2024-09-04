// Import common util
import { captureSreenshot, checkIfElementIsVisible } from "./util/common.util";

import { AccommodationPages } from "./pages/accommodation.page";

const accommodationPages = new AccommodationPages();

describe("Ranchi - Accommodation page", () => {
  beforeEach(() => {
    cy.visit("/ranchi-accommodation");
  });

  const parentFormId = accommodationPages.mappingPlaceFormId.ranchi;

  describe("STEP-1", () => {
    it("STEP-1: Form Title should contain  'Accommodation'", () => {
      cy.get(accommodationPages.divTitle).contains("Accommodation");
    });

    it("STEP-1: Form should fire validation, if input fields are empty", () => {
      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();

      checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
    });

    it("STEP-1: Form should submit after all input fields are filled", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
    });
  });

  describe("STEP-2", () => {
    it("STEP-2: Member Modal should fire validation, if input fields are empty", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      checkIfElementIsVisible(accommodationPages.modal_divValidation);
      /* --------------------- Add Member --------------------- */
    });

    it("STEP-2: Form should Not Add member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnCancel).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */

      //Click on Submit button to submit Form
      // cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click

      // checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
      //Step 2 - Form fields
    });

    it("STEP-2: Form should Add 1 member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
    });

    it("STEP-2: Form should Add 2 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
    });

    it("STEP-2: Form should fire validation, if input fields are empty", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Step 2 - Form fields
      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click

      checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
      //Step 2 - Form fields
    });

    it("STEP-2: Form should submit without member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("STEP-2: Form should submit with 1 member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */

      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("STEP-2: Form should submit with 2 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
      
      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("STEP-2: Form should submit with 3 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add third Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_3();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
      
      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("STEP-2: Form should fire validation (Max Entries) more than 3 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(accommodationPages.mappingPlaceFormId.ranchi);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(accommodationPages.mappingPlaceFormId.ranchi);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add third Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_3();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add Fourth Member
      // cy.get(accommodationPages.btnAddMember).click()

      checkIfElementIsVisible(accommodationPages.divAddEntryMax);

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
    });
  });
});

describe.only("Dakshineswar - Accommodation page", () => {
  beforeEach(() => {
    cy.visit("/dakshineswar-accommodation");
  });

  const parentFormId = accommodationPages.mappingPlaceFormId.dakshineswar;

  describe("STEP-1", () => {
    it("STEP-1: Form Title should contain  'Accommodation'", () => {
      cy.get(accommodationPages.divTitle).contains("Accommodation");
    });

    it.only("STEP-1: Form should fire validation, if input fields are empty", () => {
      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();

      checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
    });

    it("STEP-1: Form should submit after all input fields are filled", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
    });
  });

  describe("STEP-2", () => {
    it.only("STEP-2: Member Modal should fire validation, if input fields are empty", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      checkIfElementIsVisible(accommodationPages.modal_divValidation);
      /* --------------------- Add Member --------------------- */
    });

    it("STEP-2: Form should Not Add member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnCancel).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */

      //Click on Submit button to submit Form
      // cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click

      // checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
      //Step 2 - Form fields
    });

    it("STEP-2: Form should Add 1 member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
    });

    it("STEP-2: Form should Add 2 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
    });

    it("STEP-2: Form should fire validation, if input fields are empty", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Step 2 - Form fields
      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click

      checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
      //Step 2 - Form fields
    });

    it("STEP-2: Form should submit without member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);

      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click();
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("STEP-2: Form should submit with 1 member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */

      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click();
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it.only("STEP-2: Form should submit with 2 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
      
      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it.only("STEP-2: Form should submit with 3 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add third Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_3();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
      
      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("STEP-2: Form should fire validation (Max Entries) more than 3 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add second Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_2();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add third Member
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields_3();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      //Add Fourth Member
      // cy.get(accommodationPages.btnAddMember).click()

      checkIfElementIsVisible(accommodationPages.divAddEntryMax);

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
    });
  });
});
