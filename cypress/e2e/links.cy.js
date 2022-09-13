/// <reference types="cypress" />

describe("mit", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000/");
  });

  it("test links to tools", () => {
    cy.get(".tool-link").each(tool => {
      const link = tool.prop("href");
      cy.request({
        url: link,
        failOnStatusCode: false,
      }).then(response => {
        Cypress.log({
          name: link,
          message: response.status,
        });
      });
    });
  });

  it("test internal links", () => {
    cy.get(".tool-link").each(tool => {
      const link = tool.prop("href");
      cy.visit({
        url: link,
        method: "GET",
      }).then(() => {
        cy.get(".internal-link").each(internallink => {
          const link = internallink.prop("href");
          cy.request({
            url: link,
            failOnStatusCode: false,
          }).then(response => {
            Cypress.log({
              name: link,
              message: response.status,
            });
          });
        });
      });
    });
  });
});
