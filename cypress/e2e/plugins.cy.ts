// Import common util
import { getElementLink } from "./util/common.util";

describe.only("Backend - Plugins page", () => {

  it.skip("Download plugin files from Test site", () => {
    const loginUrl = "https://test.yssofindia.org/wp-login.php?wle=NDYwOTQ0MzJjYmNmMjY4ZjdjOTg3ZjU3YmQ1NGQ5MmRkN2U5OTY5Y2I3MGJiMDQ0";
    const username = "Hiteshtare";
    const password = "dUliu(#zeuTgJ9gs&^hcz)r5";
    
    cy.visit(loginUrl);

    cy.wait(1000).get('#user_login').type(username);
    cy.wait(1000).get('#user_pass').type(password);
    cy.wait(1000).get('#wp-submit').click();

    cy.wait(1000).get('#user_login').type(username);
    cy.wait(1000).get('#user_pass').type(password);
    cy.wait(1000).get('#wp-submit').click();
  });

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
