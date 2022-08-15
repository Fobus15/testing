/// <reference types="Cypress" />

describe("testing incorrect login", () => {
  it("Visit the site", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.title().should("include", "Zero - Log in");
  });

  it("filling the login form", () => {
    cy.get("#user_login").clear().type("some invalid login form");
    cy.get("#user_password").clear().type("ivalid password");
  });

  it("mark checkbox", () => {
    cy.get("input[type='checkbox']").check();
    cy.wait(3000);
  });

  it("submit the form", () => {
    cy.get("input[name='submit']").click();
  });

  it("check if error message is occur", () => {
    cy.get(".alert-error")
      .should("be.visible")
      .and("contain.text", "Login and/or password are wrong.");
  });
});
