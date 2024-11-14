describe('로그인을 하지 않은 경우에 접근할 수 없는 ProvideRoute 통합 테스트', () => {
  it('로그인을 하지 않은 경우, /profile 페이지로 접근할 수 없음', () => {
    cy.visit('profile');
    cy.url().should('include', '/login');
  });

  it('로그인을 한 경우에, 보호된 페이지로 접근하면, 해당 페이지로 이동할 수 있음', () => {
    // 로그인 함수
    cy.login('유민', 'password');

    // 홈페이지로 이동
    cy.url().should('include', '/');

    // 유민이라는 텍스트의 a태그가 있는지 체크
    cy.findByRole('link', { name: /유민/ }).click();

    // profile 페이지 접근
    cy.url().should('include', '/profile');
  });
});
