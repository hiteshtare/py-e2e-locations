// Import common util
import { getElementLink } from "./util/common.util";

describe.only("Backend - Plugins page", () => {
  it("Download multiple files from file-examples.com", () => {
    cy.visit(
      "https://file-examples.com/index.php/sample-documents-download/sample-doc-download/"
    );

    const downloadPath: string = "cypress/downloads";

    cy.get("tbody > tr > td.file-link").each(($event, index) => {
      // cy.screenshot({ capture: "fullPage" });

      cy.wrap($event).within(async () => {
        const link: string = await getElementLink(".download-button");
        const filename: string = link.replace(/^.*[\\/]/, "");

        // it(`#${index + 1} File link give 200 OK status`, () => {
        cy.log(`#${index + 1} File link: ${link}`);

        cy.request("HEAD", link).its("status").should("eq", 200);

        cy.downloadFile(link, downloadPath, filename);
        // });
      });
    });
  });
});
