describe('로그인을 하지 않은 경우에는 접근할 수 없는 protected Route 통합 테스트', () => {
    it('', () => {
        cy.visit('profile');
        cy.url().should('include', '/login');
    });
    it('', () => {
        cy.login('matthew', 'password');
        cy.url().should('include', '/');
        cy.findByRole('link', { name: /matthew/ }).click();
        cy.url().should('include', '/profile');
    });
});
