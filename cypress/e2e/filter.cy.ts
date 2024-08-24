// Import common util
import {checkIfElementIsClickable, checkIfElementIsVisible, checkIfElementNotVisible } from "./util/common.util";

import { FilterPages } from "./pages/filter.page";

const filterPages = new FilterPages();

describe.skip("Filter menu", () => {
  beforeEach(() => {
    cy.visit("/teachings-library");

    //Open filter menu
    cy.get(filterPages.btnFilterTitle).click();
  });

  describe("Overall working", () => {
    it("Filter menu should not be visible by default", () => {
      checkIfElementNotVisible(filterPages.divFilterTab);
    });
  
    it("Filter menu should be visible when clicked on Accordian title", () => {
      cy.get(filterPages.btnFilterTitle).click();
  
      checkIfElementIsVisible(filterPages.divFilterTab);
    });
  
    it("Filter menu should be visible when clicked on Accordian area", () => {
      cy.get("#elementor-tab-title-1091").click();
  
      checkIfElementIsVisible(filterPages.divFilterTab);
    });
  
    it("Filter menu should be visible when clicked on Accordian right carot icon", () => {
      cy.get(".elementor-toggle-icon-closed").click();
  
      checkIfElementIsVisible(filterPages.divFilterTab);
    });
  });

  describe("dropdown: Media Type", () => {

    it("dropdown: Media Type - should have default value", () => {
      cy.get(filterPages.dropdownMediaType)
        .select(0)
        .should("have.value", "");
    });

    it("dropdown: Media Type - should have 1st option equal to (text/value) Audio:7948", () => {
      cy.get(filterPages.dropdownMediaType)
        .select(1)
        .should("have.value", filterPages.dropdownMediaType_AudioValue);
    });

    it("dropdown: Media Type - should have 2nd option equal to (text/value) Video:7949", () => {
      cy.get(filterPages.dropdownMediaType)
        .select(2)
        .should("have.value", filterPages.dropdownMediaType_VideoValue);
    });

    it("dropdown: Media Type - 1st option selection should work", () => {
      filterPages.selectDropdownOptionByValue(
        filterPages.dropdownMediaType_AudioValue
      );
    });

    it("dropdown: Media Type - 2nd option selection should work", () => {
      filterPages.selectDropdownOptionByValue(
        filterPages.dropdownMediaType_VideoValue
      );
    });
  });

  describe("checkboxlist: Category", () => {
    it("checkboxlist: Category - should be clickable", () => {
      checkIfElementIsClickable(filterPages.checkboxlistCategory);
    });
  });

  describe("checkboxlist: Speaker", () => {
    it("checkboxlist: Speaker - should be clickable", () => {
      checkIfElementIsClickable(filterPages.checkboxlistSpeaker);
    });
  });

  describe("checkboxlist: Language", () => {
    it("checkboxlist: Language - should be clickable", () => {
      checkIfElementIsClickable(filterPages.checkboxlistLanguage);
    });
  });
});