/// <reference types="Cypress" />

describe("actions of cypress", () => {
  it("check the url", () => {
    cy.visit("https://books.toscrape.com/");
    cy.url().should("contain", "toscrape");
  });

  it("check succsesfull loadig og the travel page", () => {
    cy.get("a[href*='travel_2']").click();
    cy.get("h1").should("have.text", "Travel");
  });

  it("check the number of the elements on the page", () => {
    cy.get("ol.row > li").its("length").should("eql", 11);
  });

  it("check the price of Olio book", () => {
    cy.get("a").contains("Poetry").click();
    cy.get("a>img[alt='Olio']").click();
    cy.get("h1+p.price_color").should("contain.text", "£23.88");
  });
});
