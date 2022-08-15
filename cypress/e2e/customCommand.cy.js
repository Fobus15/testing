describe("working with a custom commad", () => {
  it("using created login commant", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.login("username", "password");
  });
});
