describe("check resolution", () => {
  it("iPhone x", () => {
    cy.viewport("iphone-xr");
    cy.visit("http://example.com");
    cy.wait(2000);
  });
  it("ipad mini", () => {
    cy.viewport("ipad-mini");
    cy.visit("http://example.com");
    cy.wait(2000);
  });
});
