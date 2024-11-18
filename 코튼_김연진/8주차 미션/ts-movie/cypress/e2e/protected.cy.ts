describe('로그인을 하지 않은 경우에는 접근할 수 없는 protected Route 통합 테스트', () => {
    it('로그인을 하지 않은 상태로 /proteced 접근 시 /login으로 리다이렉트', () => {
        cy.visit('protected');
        cy.url().should('include', '/login');
    });
    it('로그인을 한 경우에는 /protected 접근 시 접근이 성공해야함', () => {
        cy.login('helllo@gmail.com', '12341234');
        cy.url().should('include', '/');
        cy.visit('category');
        cy.get('a[href="/protected"]').click();
        cy.url().should('include', '/protected');
    });
});
