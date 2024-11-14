describe("로그인을 하지 않은 경우에 접근할 수 없는 Protected Route 통합 테스트", () => {
  it("로그인을 하지 않은 경우, /profile 페이지로 접근할 수 없음.", () => {
    cy.visit("/profile");
    cy.url().should("include", "/login");
  });
  it("로그인을 한 경우에, 보호된 페이지로 접근하면, 해당 페이지로 이동할 수 있음", () => {
    cy.login("matthew", "password");
    cy.url().should("include", "/");
    cy.findByRole("link", { name: /matthew/ }).click();
    cy.url().should("include", "/profile");
  });
});
