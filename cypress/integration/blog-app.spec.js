describe("Blog app", function () {
  const user = {
    username: "hellas",
    name: "Etunimi Sukunimi",
    password: "hellaspassword"
  };

  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");

    //create new user
    cy.request("POST", "http://localhost:3003/api/users", user);

    cy.visit("http://localhost:3000");
  });

  it("Login form is shown", function () {
    cy.contains("Sign in");
    cy.contains("Username");
    cy.contains("Password");
    cy.contains("Login");
  });

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.login(user);
			cy.get('[data-testid=account-icon]').trigger('mouseover')
      cy.contains(`${user.name} logged in`);
    });

    it("fails with wrong credentials", function () {
      cy.login({ username: "wrong", password: "wrong" });
      cy.get(".error")
        .should("contain", "Wrong credentials")
    });
  });

  describe("When logged in", function () {
    const newBlog = {
      title: "OOP vs FP",
      author: "Uncle Bob",
      url: "cleancoders.com"
    };
    beforeEach(function () {
      cy.login(user);

      cy.createBlog(newBlog);
    });

    it("A blog can be created", function () {
      cy.get(".success")
        .should(
          "contain",
          `a new blog ${newBlog.title} by ${newBlog.author} added`
        )

      cy.contains(`${newBlog.title} ${newBlog.author}`);
    });

    it("A blog can be liked", function () {
      cy.contains("view").click();

      cy.get("[data-testid=like-btn]").click();
      cy.contains("likes 1");
      cy.get("[data-testid=like-btn]").click();
      cy.contains("likes 2");
    });

    it("A person who creates the blog can delete the blog", function () {
      cy.contains("view").click();
      cy.contains("Remove").click();
      cy.get(".success")
        .should("contain", `Remove ${newBlog.title} by ${newBlog.author}`)
    });
    it("A person who does not create the blog cannot delete the blog", function () {
      cy.contains("Logout").click();

      const newUser = {
        name: "Anh Tu Mai",
        username: "anhtumai",
        password: "anhtumaipassword"
      };

      cy.request("POST", "http://localhost:3003/api/users", newUser);

      cy.login(newUser);

      cy.contains("view").click();
      cy.contains("Remove").should("not.be.visible");
    });

    it("Blogs are ordered by likes property", function () {
      cy.wait(2000);
      cy.createBlogWithLikes({
        title: "Second Blog",
        author: "Second Author",
        url: "second.url.com",
        likes: 200
      });
      cy.createBlogWithLikes({
        title: "Third Blog",
        author: "Third Author",
        url: "third.url.com",
        likes: 100
      });
      cy.createBlogWithLikes({
        title: "Fourth Blog",
        author: "Fourth Author",
        url: "fourth.url.com",
        likes: 150
      });
      cy.get("[data-testid=like]").then((likeSpans) => {
        const likes = likeSpans.map((i, span) => Number(span.innerText.split(" ")[1]));
        for (let i = 1; i < likes.length; i++) {
          expect(likes[i - 1] >= likes[i]).to.equal(true);
        }
      });
    });
  });
});
