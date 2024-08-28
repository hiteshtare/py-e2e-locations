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

  divValidation = '#gform_51_validation_container';
  //Step 1 - Form fields
}