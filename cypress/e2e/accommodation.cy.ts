// Import common util
import { captureSreenshot, checkIfElementIsVisible } from "./util/common.util";

import { AccommodationPages } from "./pages/accommodation.page";

const accommodationPages = new AccommodationPages();

describe.skip("Bangalore - Accommodation page", () => {
  beforeEach(() => {
    cy.visit("/location/bangalore/accommodation");
  });

  const parentFormId = accommodationPages.mappingPlaceFormId.ranchi;
  const maxStayDuration = 10;

  describe("Bangalore - STEP-1", () => {
    it("Bangalore - STEP-1: Form Title should contain  'Accommodation'", () => {
      cy.get(accommodationPages.divTitle).contains("Accommodation");
    });

    it("Bangalore - STEP-1: Form should fire validation, if input fields are empty", () => {
      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();

      checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
    });

    it("Bangalore - STEP-1: Form should submit after all input fields are filled", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
    });
  });

  describe.only("Bangalore - STEP-2", () => {
    it("Bangalore - STEP-2: Member Modal should fire validation, if input fields are empty", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);;

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      checkIfElementIsVisible(accommodationPages.modal_divValidation);
      /* --------------------- Add Member --------------------- */
    });

    it("Bangalore - STEP-2: Form should Not Add member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);;

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnCancel).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */

      //Click on Submit button to submit Form
      // cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click();

      // checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
      //Step 2 - Form fields
    });

    it("Bangalore - STEP-2: Form should Add 1 member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);;

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      accommodationPages.populateModal_fields();

      //Click on Add button to add new Member
      cy.get(accommodationPages.btnAdd.replace('_<FORM_ID>',parentFormId)).click();

      captureSreenshot(2000);
      /* --------------------- Add Member --------------------- */
    });

    it("Bangalore - STEP-2: Form should Add 2 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      // accommodationPages.populateStep2_fields(parentFormId);;

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

    it("Bangalore - STEP-2: Form should fire validation, if input fields are empty", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Step 2 - Form fields
      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click();

      checkIfElementIsVisible(accommodationPages.divValidation.replace('_<FORM_ID>',parentFormId));
      //Step 2 - Form fields
    });

    const validationMessage1 = 'Arrival date should be more than Arrival cutoff date.';
    it(`Bangalore - STEP-2: Form should show validation ${validationMessage1} for Arrival date`, () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId,'21/11/2024');

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      const divId = accommodationPages.inputArrivalDateValidation.replace('_<FORM_ID>', parentFormId);
      checkIfElementIsVisible(divId);
      cy.get(divId).contains(`${validationMessage1}`);
    });

    const validationMessage2 = 'Arrival date should be less than Booking Horizon date.';
    it(`Bangalore - STEP-2: Form should show validation ${validationMessage2} for Arrival date`, () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId,'21/11/2025');

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      const divId = accommodationPages.inputArrivalDateValidation.replace('_<FORM_ID>', parentFormId);
      checkIfElementIsVisible(divId);
      cy.get(divId).contains(`${validationMessage2}`);
    });

    const validationMessage3 = 'Please enter a valid Arrival date.';
    it(`Bangalore - STEP-2: Form should show validation ${validationMessage3} for Arrival date`, () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId,'08/12/2024');

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      const divId = accommodationPages.inputArrivalDateValidation.replace('_<FORM_ID>', parentFormId);
      checkIfElementIsVisible(divId);
      cy.get(divId).contains(`${validationMessage3}`);
    });

    const validationMessage4 = 'Departure date should be less than Booking Horizon date.';
    it(`Bangalore - STEP-2: Form should show validation ${validationMessage4} for Departure date`, () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId,'29/12/2024','21/11/2025');

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      const divId = accommodationPages.inputDepartureDateValidation.replace('_<FORM_ID>', parentFormId);
      checkIfElementIsVisible(divId);
      cy.get(divId).contains(validationMessage4);
    });

    const validationMessage5 = 'Please enter a valid Departure date.';
    it(`Bangalore - STEP-2: Form should show validation ${validationMessage5} for Departure date`, () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId,'29/12/2024','08/12/2024');

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      const divId = accommodationPages.inputDepartureDateValidation.replace('_<FORM_ID>', parentFormId);
      checkIfElementIsVisible(divId);
      cy.get(divId).contains(`${validationMessage5}`);
    });

    const validationMessage6 = 'Departure date should more than or equal to Arrival date.';
    it(`Bangalore - STEP-2: Form should show validation ${validationMessage6} for Departure date`, () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId,'29/12/2024','28/12/2024');

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      const divId = accommodationPages.inputDepartureDateValidation.replace('_<FORM_ID>', parentFormId);
      checkIfElementIsVisible(divId);
      cy.get(divId).contains(`${validationMessage6}`);
    });

    const validationMessage7 = `Max stay duration allowed is ${maxStayDuration} days or less`;
    it.only(`Bangalore - STEP-2: Form should show validation ${validationMessage7} for Departure date`, () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId,'29/12/2024','10/01/2025');

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      const divId = accommodationPages.inputDepartureDateValidation.replace('_<FORM_ID>', parentFormId);
      checkIfElementIsVisible(divId);
      cy.get(divId).contains(`${validationMessage7}`);
    });

    it("Bangalore - STEP-2: Form should submit without member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);;

      //Click on Submit button to submit Form
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click();
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("Bangalore - STEP-2: Form should submit with 1 NON-member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);;

      /* --------------------- Add Member --------------------- */
      cy.get(accommodationPages.btnAddMember).click();

      const isNonMember = true;
      accommodationPages.populateModal_fields(isNonMember);

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

    it("Bangalore - STEP-2: Form should submit with SHARED Occupancy", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

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

    it("Bangalore - STEP-2: Form should submit with 1 member", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);;

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

    it("Bangalore - STEP-2: Form should submit with 2 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);;

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
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click();
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("Bangalore - STEP-2: Form should submit with 3 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);;

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
      cy.get(accommodationPages.btnSubmit.replace('_<FORM_ID>',parentFormId)).click();
      //Step 2 - Form fields

      //Capture sc after submit to capture Notification
      captureSreenshot(2000);
    });

    it("Bangalore - STEP-2: Form should fire validation (Max Entries) more than 3 members", () => {
      //Populate Step 1 - Form fields
      accommodationPages.populateStep1_fields(parentFormId);;

      //Click on Next button to submit Form
      cy.get(accommodationPages.btnNext.replace('_<FORM_ID>',parentFormId)).click();
      //Step 1 - Form fields

      //Populate Step 2 - Form fields
      accommodationPages.populateStep2_fields(parentFormId);;

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

