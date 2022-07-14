/// <reference types="cypress" />

describe("mit", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/");
  });

  it("formatting of internal links", () => {
    cy.get(".tool-link").each(tool => {
      const link = tool.prop("href");
      cy.visit({
        url: link,
        method: "GET",
      }).then(() => {
        cy.get(".internal-link").each(internallink => {
          // test if string is all uppercase
          let str = internallink.text();
          expect(internallink.text()).to.not.equal(str.toUpperCase());
        });
      });
    });
  });

  it("test for &", () => {
    cy.get(".tool-link").each(tool => {
      const link = tool.prop("href");
      cy.visit({
        url: link,
        method: "GET",
      }).then(() => {
        cy.get(".internal-link").each(internallink => {
          expect(internallink.text()).to.not.contain("&");
        });
      });
    });
  });
});
