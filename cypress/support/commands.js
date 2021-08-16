// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
Cypress.Commands.add("login", (user) => {
  cy.get("[data-testid=username]").type(user.username);
  cy.get("[data-testid=password]").type(user.password);
  cy.get("[data-testid=login-btn]").click();
});

Cypress.Commands.add("createBlog", (blog) => {
  cy.contains("Create new blog").click();
  cy.get("input[id=title]").type(blog.title);
  cy.get("input[id=author]").type(blog.author);
  cy.get("input[id=url]").type(blog.url);
  cy.get("[data-testid=blog-submit-btn]").click();
});

Cypress.Commands.add("createBlogWithLikes", (blog) => {
  const token = JSON.parse(localStorage.getItem("loggedUser")).token;
  const options = {
    method: "POST",
    url: "http://localhost:3003/api/blogs",
    body: blog,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json"
    }
  };
  cy.request(options);

  cy.visit("http://localhost:3000");
});
