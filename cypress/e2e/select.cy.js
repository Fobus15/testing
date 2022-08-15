describe("working with select element", () => {
  it("slect oranges", () => {
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get("select.form-control.action-select")
      .select("fr-oranges")
      .should("have.value", "fr-oranges")
      .and("contain.text", "oranges");
  });
});
