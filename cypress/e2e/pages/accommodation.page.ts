// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class AccommodationPages {
 
  divTitle = '.elementor-heading-title';

  //Step 1 - Form fields
  inputArrivalDate = '#input_51_9';
  inputDepartureDate = '#input_51_12';
  selectArrivalTime = '#input_51_14';
  selectDepartureTime = '#input_51_13';
  selectPurposeofVisit = '#input_51_15';
  inputAdditionalInformation = '#input_51_16';
  checkbox_AccommodationShared = '#choice_51_44_1';

  btnNext = '#gform_next_button_51_54';
  //Step 1 - Form fields

  divValidation = '#gform_51_validation_container';

  //Step 2 - Form fields
  inputName = '#input_51_18';
  inputMobile = '#input_51_57';
  inputEmail = '#input_51_55';
  selectGender = '#input_51_25';
  inputAge = '#input_51_22';
  selectCountry = '#input_51_24';
  inputCity = '#input_51_26';
  selectIndianCitizen = '#input_51_28';
  selectYSS_SRFMember = '#input_51_27';
  inputLesson = '#input_51_29';
  selectKriyaban = '#input_51_31';
  checkbox_agreeTC = '#input_51_38_1';
  
  btnSubmit = '#gform_submit_button_51';

  /* --------------------- Add Member --------------------- */
  btnAddMember = '.gpnf-add-entry';
  
  modal_inputName = '#input_52_1';
  modal_selectGender = '#input_52_6';
  modal_inputAge = '#input_52_5';
  modal_selectRelationship = '#input_52_3';
  modal_selectYSS_SRFMember = '#input_52_7';
  modal_inputLesson = '#input_52_8';

  btnCancel = '.gpnf-btn-cancel';
  btnAdd = '.gpnf-btn-submit';
  
  modal_divValidation = '#gform_52_validation_container';
  /* --------------------- Add Member --------------------- */
  //Step 2 - Form fields

  populateStep1_fields() { 
    cy.get(this.inputArrivalDate).type(Cypress.env("STEP1_ARRIVAL_DATE"));
    cy.get(this.inputDepartureDate).type(Cypress.env("STEP1_DEPARTURE_DATE"));
    //Set Dropdown value on Form
    cy.get(this.selectArrivalTime).select(Cypress.env("STEP1_ARRIVAL_TIME"), {
      force: true,
    });
    cy.get(this.selectDepartureTime).select(Cypress.env("STEP1_DEPARTURE_TIME"), {
      force: true,
    });
    cy.get(this.selectPurposeofVisit).select(Cypress.env("STEP1_PURPOSE_VISIT"), {
      force: true,
    });
    cy.get(this.inputAdditionalInformation).type(Cypress.env("STEP1_ADDITION_INFO"));

    //Set checkbox value on Form
    const isAccommodationShared = Cypress.env("STEP1_IS_ACCOMMODATION_SHARED");
    if (isAccommodationShared === true) {
      cy.get(this.checkbox_AccommodationShared).check()
    }

    captureSreenshot();
  }

  populateStep2_fields() { 
    cy.get(this.inputName).type(Cypress.env("STEP2_NAME"));
   
    cy.get(this.inputMobile).type(Cypress.env("STEP2_MOBILE"));
    cy.get(this.inputEmail).type(Cypress.env("STEP2_EMAIL"));
    //Set Dropdown value on Form
    cy.get(this.selectGender).select(Cypress.env("STEP2_GENDER"), {
      force: true,
    });
    cy.get(this.inputAge).type(Cypress.env("STEP2_AGE"));
   
    cy.get(this.selectCountry).select(Cypress.env("STEP2_COUNTRY"), {
      force: true,
    });
    cy.get(this.inputCity).type(Cypress.env("STEP2_CITY"));
    cy.get(this.selectIndianCitizen).select(Cypress.env("STEP2_INDIAN_CITIZEN"), {
      force: true,
    });
    
    cy.get(this.selectYSS_SRFMember).select(Cypress.env("STEP2_YSS_SRFMEMBER"), {
      force: true,
    });
    cy.get(this.inputLesson).type(Cypress.env("STEP2_LESSON"));
    cy.get(this.selectKriyaban).select(Cypress.env("STEP2_KRIYABAN"), {
      force: true,
    });

    //Set checkbox value on Form
    const agreeTC = Cypress.env("STEP2_AGREE_TC");
    if (agreeTC === true) {
      cy.get(this.checkbox_agreeTC).check()
    }

    captureSreenshot(2000);
  }

  populateModal_fields() {
    cy.get(this.modal_inputName).type(Cypress.env("MEMBER1_NAME"));
    //Set Dropdown value on Form
    cy.get(this.modal_selectGender).select(Cypress.env("MEMBER1_GENDER"), {
      force: true,
    });
    cy.get(this.modal_inputAge).type(Cypress.env("MEMBER1_AGE"));
    
    cy.get(this.modal_selectRelationship).select(Cypress.env("MEMBER1_RELATIONSHIP"), {
      force: true,
    });
    cy.get(this.modal_selectYSS_SRFMember).select(Cypress.env("MEMBER1_YSS_SRFMEMBER"), {
      force: true,
    });
    cy.get(this.modal_inputLesson).type(Cypress.env("MEMBER1_LESSON"));

    captureSreenshot();
  }

  populateModal_fields_2() {
    cy.get(this.modal_inputName).type(Cypress.env("MEMBER2_NAME"));
    //Set Dropdown value on Form
    cy.get(this.modal_selectGender).select(Cypress.env("MEMBER2_GENDER"), {
      force: true,
    });
    cy.get(this.modal_inputAge).type(Cypress.env("MEMBER2_AGE"));
    
    cy.get(this.modal_selectRelationship).select(Cypress.env("MEMBER2_RELATIONSHIP"), {
      force: true,
    });
    cy.get(this.modal_selectYSS_SRFMember).select(Cypress.env("MEMBER2_YSS_SRFMEMBER"), {
      force: true,
    });
    cy.get(this.modal_inputLesson).type(Cypress.env("MEMBER2_LESSON"));

    captureSreenshot();
  }


}