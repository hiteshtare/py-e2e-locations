// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class AccommodationPages {
 
  divTitle = '.elementor-heading-title';

  mappingPlaceFormId = {
    ranchi: '_55',
    dakshineswar: '_53'
  };

  //Step 1 - Form fields
  inputArrivalDate = '#input_<FORM_ID>_9';
  inputDepartureDate = '#input_<FORM_ID>_12';
  selectArrivalTime = '#input_<FORM_ID>_58';
  selectDepartureTime = '#input_<FORM_ID>_60';
  selectPurposeofVisit = '#input_<FORM_ID>_15';
  inputAdditionalInformation = '#input_<FORM_ID>_16';
  checkbox_AccommodationShared = '#choice_<FORM_ID>_44_1';

  btnNext = '#gform_next_button_<FORM_ID>_54';
  //Step 1 - Form fields

  divValidation = '#gform_<FORM_ID>_validation_container';

  //Step 2 - Form fields
  selectSalution = '#input_<FORM_ID>_72';
  inputFirstName = '#input_<FORM_ID>_18';
  inputLastName = '#input_<FORM_ID>_64';
  inputAge = '#input_<FORM_ID>_22';
  selectGender = '#input_<FORM_ID>_25';
  selectCountryCode = '#input_<FORM_ID>_71';
  inputMobile = '#input_<FORM_ID>_57';
  inputEmail = '#input_<FORM_ID>_55';
  selectIndianCitizen = '#input_<FORM_ID>_28';
  selectYSS_SRFMember = '#input_<FORM_ID>_27';
  inputLesson = '#input_<FORM_ID>_29';
  selectKriyaban = '#input_<FORM_ID>_31';

  inputLine1 = '#input_<FORM_ID>_68';
  inputLine2 = '#input_<FORM_ID>_69';
  inputCity = '#input_<FORM_ID>_26';
  inputPincode = '#input_<FORM_ID>_65';
  selectDistrict = '#input_<FORM_ID>_70';
  selectCountry = '#input_<FORM_ID>_24';

  checkbox_agreeTC = '#input_<FORM_ID>_38_1';

  btnSubmit = '#gform_submit_button_<FORM_ID>';

  /* --------------------- Add Member --------------------- */
  btnAddMember = '.gpnf-add-entry';
  
  modal_selectSalutation = '#input_58_12';
  modal_inputFirstName = '#input_58_1';
  modal_inputLastName = '#input_58_13';
  modal_selectGender = '#input_58_6';
  modal_inputAge = '#input_58_5';
  modal_selectRelationship = '#input_58_3';
  modal_selectYSS_SRFMember = '#input_58_7';
  modal_inputLesson = '#input_58_8';

  btnCancel = '.gpnf-btn-cancel';
  btnAdd = '.gpnf-btn-submit';
  
  modal_divValidation = '#gform_58_validation_container';
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

  populateStep2_fields(formId: string) { 
    //Set Dropdown value on Form
    cy.get(this.selectSalution.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_SALUTATION"), {
      force: true,
    });
    cy.get(this.inputFirstName.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_FIRST_NAME"));
    cy.get(this.inputLastName.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_LAST_NAME"));
    cy.get(this.inputAge.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_AGE"));
    cy.get(this.selectGender.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_GENDER"), {
      force: true,
    });
    cy.get(this.selectCountryCode.replace('_<FORM_ID>',formId)).select(Cypress.env("STEP2_COUNTRY_CODE"), {
      force: true,
    });
    cy.get(this.inputMobile.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_MOBILE"));
    cy.get(this.inputEmail.replace('_<FORM_ID>', formId)).type(Cypress.env("STEP2_EMAIL"));
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

    cy.get(this.inputLine1.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_LINE1"));
    cy.get(this.inputLine2.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_LINE2"));
    cy.get(this.inputCity.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_CITY"));
    cy.get(this.inputPincode.replace('_<FORM_ID>',formId)).type(Cypress.env("STEP2_CITY"));
    cy.get(this.selectDistrict.replace('_<FORM_ID>', formId)).select(Cypress.env("STEP2_DISTRICT"), {
      force: true,
    });
    cy.get(this.selectCountry.replace('_<FORM_ID>', formId)).select(Cypress.env("STEP2_COUNTRY"), {
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
    //Set Dropdown value on Form
    cy.get(this.modal_selectSalutation).select(Cypress.env("MEMBER1_SALUTATION"), {
      force: true,
    });
    cy.get(this.modal_inputFirstName).type(Cypress.env("MEMBER1_FIRST_NAME"));
    cy.get(this.modal_inputLastName).type(Cypress.env("MEMBER1_LAST_NAME"));
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
    //Set Dropdown value on Form
    cy.get(this.modal_selectSalutation).select(Cypress.env("MEMBER2_SALUTATION"), {
      force: true,
    });
    cy.get(this.modal_inputFirstName).type(Cypress.env("MEMBER2_FIRST_NAME"));
    cy.get(this.modal_inputLastName).type(Cypress.env("MEMBER2_LAST_NAME"));
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
    //Set Dropdown value on Form
    cy.get(this.modal_selectSalutation).select(Cypress.env("MEMBER3_SALUTATION"), {
      force: true,
    });
    cy.get(this.modal_inputFirstName).type(Cypress.env("MEMBER3_FIRST_NAME"));
    cy.get(this.modal_inputLastName).type(Cypress.env("MEMBER3_LAST_NAME"));
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