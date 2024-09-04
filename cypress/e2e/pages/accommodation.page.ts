// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class AccommodationPages {
 
  divTitle = '.elementor-heading-title';

  mappingPlaceFormId = {
    ranchi: '_51',
    dakshineswar: '_53'
  };

  //Step 1 - Form fields
  inputArrivalDate = '#input_<FORM_ID>_9';
  inputDepartureDate = '#input_<FORM_ID>_12';
  selectArrivalTime = '#input_<FORM_ID>_14';
  selectDepartureTime = '#input_<FORM_ID>_13';
  selectPurposeofVisit = '#input_<FORM_ID>_15';
  inputAdditionalInformation = '#input_<FORM_ID>_16';
  checkbox_AccommodationShared = '#choice_<FORM_ID>_44_1';

  btnNext = '#gform_next_button_<FORM_ID>_54';
  //Step 1 - Form fields

  divValidation = '#gform_<FORM_ID>_validation_container';

  //Step 2 - Form fields
  inputName = '#input_<FORM_ID>_18';
  inputMobile = '#input_<FORM_ID>_57';
  inputEmail = '#input_<FORM_ID>_55';
  selectGender = '#input_<FORM_ID>_25';
  inputAge = '#input_<FORM_ID>_22';
  selectCountry = '#input_<FORM_ID>_24';
  inputCity = '#input_<FORM_ID>_26';
  selectIndianCitizen = '#input_<FORM_ID>_28';
  selectYSS_SRFMember = '#input_<FORM_ID>_27';
  inputLesson = '#input_<FORM_ID>_29';
  selectKriyaban = '#input_<FORM_ID>_31';
  checkbox_agreeTC = '#input_<FORM_ID>_38_1';
  
  btnSubmit = '#gform_submit_button_<FORM_ID>';

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
  divAddEntryMax = '.gpnf-add-entry-max';

  /* --------------------- Add Member --------------------- */
  //Step 2 - Form fields

  populateStep1_fields(formId:string) { 
    cy.get(this.inputArrivalDate.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP1_ARRIVAL_DATE"));
    cy.get(this.inputDepartureDate.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP1_DEPARTURE_DATE"));
    //Set Dropdown value on Form
    cy.get(this.selectArrivalTime.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP1_ARRIVAL_TIME"), {
      force: true,
    });
    cy.get(this.selectDepartureTime.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP1_DEPARTURE_TIME"), {
      force: true,
    });
    cy.get(this.selectPurposeofVisit.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP1_PURPOSE_VISIT"), {
      force: true,
    });
    cy.get(this.inputAdditionalInformation.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP1_ADDITION_INFO"));

    //Set checkbox value on Form
    const isAccommodationShared = Cypress.env("STEP1_IS_ACCOMMODATION_SHARED");
    if (isAccommodationShared === true) {
      cy.get(this.checkbox_AccommodationShared.replace('_<FORM_ID>',formId)).check()
    }

    captureSreenshot();
  }

  populateStep2_fields(formId:string) { 
    cy.get(this.inputName.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_NAME"));
   
    cy.get(this.inputMobile.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_MOBILE"));
    cy.get(this.inputEmail.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_EMAIL"));
    //Set Dropdown value on Form
    cy.get(this.selectGender.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_GENDER"), {
      force: true,
    });
    cy.get(this.inputAge.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_AGE"));
   
    cy.get(this.selectCountry.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_COUNTRY"), {
      force: true,
    });
    cy.get(this.inputCity.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_CITY"));
    cy.get(this.selectIndianCitizen.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_INDIAN_CITIZEN"), {
      force: true,
    });
    
    cy.get(this.selectYSS_SRFMember.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_YSS_SRFMEMBER"), {
      force: true,
    });
    cy.get(this.inputLesson.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_LESSON"));
    cy.get(this.selectKriyaban.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_KRIYABAN"), {
      force: true,
    });

    //Set checkbox value on Form
    const agreeTC = Cypress.env("STEP2_AGREE_TC");
    if (agreeTC === true) {
      cy.get(this.checkbox_agreeTC.replace('_<FORM_ID>',formId)).check()
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

  populateModal_fields_3() {
    cy.get(this.modal_inputName).type(Cypress.env("MEMBER3_NAME"));
    //Set Dropdown value on Form
    cy.get(this.modal_selectGender).select(Cypress.env("MEMBER3_GENDER"), {
      force: true,
    });
    cy.get(this.modal_inputAge).type(Cypress.env("MEMBER3_AGE"));
    
    cy.get(this.modal_selectRelationship).select(Cypress.env("MEMBER3_RELATIONSHIP"), {
      force: true,
    });
    cy.get(this.modal_selectYSS_SRFMember).select(Cypress.env("MEMBER3_YSS_SRFMEMBER"), {
      force: true,
    });
    cy.get(this.modal_inputLesson).type(Cypress.env("MEMBER3_LESSON"));

    captureSreenshot();
  }


}