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
  //Step 2 - Form fields

}