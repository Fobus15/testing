/// <reference types="Cypress" />

describe("simulate keyboard events", () => {
  it("check pressing the Enter button", () => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.get("#searchTerm").type("find some text{enter}");
  });
});
