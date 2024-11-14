describe("로그인을 하지 않은 경우에 접근할 수 있는 protected route", () => {
  it("로그인을 하지 않은 경우, /profile 페이지로 접근할 수 없음", () => {
    cy.visit("/profile");
    cy.url().should("include", "/login");
  });

  it("로그인을 한 경우, 보호된 페이지로 접근하면 해당 페이지로 이동가능", () => {
    // 로그인 함수
    cy.login("chanmin", "password");
    // 홈페이지로 이동
    cy.url().should("include", "/");
    // chanmin이라는 텍스트 a태그가 있는지
    cy.findAllByRole("link", { name: /chanmin/ }).click();
    // profile 페이지 접근
    cy.url().should("include", "/profile");
  });
});
