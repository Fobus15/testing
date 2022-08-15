describe("Login in with a fixture data", () => {
  it("using data", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");

    cy.fixture("user").then((userjson) => {
      const username = userjson.username;
      const userpassword = userjson.userpassword;

      cy.get("#user_login").clear().type(username);
      cy.get("#user_password").clear().type(userpassword);
      cy.get("input[name='submit']").click();
    });
  });
});
