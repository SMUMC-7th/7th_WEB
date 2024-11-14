describe('todo 통합 테스트 ', () => {
  it('처음 렌더링 후 두 개의 투두 리스트가 나옴.', () => {
    // Todo 1: '/' 홈 경로로 이동.
    cy.visit('/');
    // Todo 2: 리스트 로딩을 기다리고, 체크박스가 두 개 생김
    cy.findAllByRole('checkbox').should('have.length', 2);

    // 할 일 추가
    cy.findByRole('textbox').as('todoInput');

    cy.get('@todoInput').type('할 일 추가');
    cy.findByRole('button', { name: /추가/ }).click();
    cy.findAllByRole('checkbox').should('have.length', 3);

    // 공백 테스트
    cy.get('@todoInput').should('have.value', '');

    // 추가한 아이템 확인, 이름: 할 일 추가
    cy.findByText('할 일 추가').should('exist').as('todoItem');
    cy.get('@todoItem').click();

    cy.findByLabelText('할 일 추가').should('be.checked');

    // 투두 삭제
    // cy.findByRole('button', { name: /삭제/ }).click();
    cy.findByTestId('delete-button-3').click();
    cy.findAllByRole('checkbox').should('have.length', 2);
  });
});
