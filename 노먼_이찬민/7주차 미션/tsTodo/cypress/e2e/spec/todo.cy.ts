describe("todo 통합 테스트", (): void => {
  it("첫 렌더링 후 두개의 투두 리스트가 나옴", (): void => {
    // TODO: 1. '/'로 이동
    cy.visit("/");
    // TODO: 2. 리스트 로딩을 기다리고, 체크박스 2개가 생긴다.
    cy.findAllByRole("checkbox").should("have.length", 2);

    cy.findAllByRole("textbox").as("todoInput");
    cy.get("@todoInput").type("할 일 추가");

    cy.findByRole("button", { name: /추가/ }).click();
    cy.get("@todoInput").should("have.value", "");

    // 추가한 아이템 확인
    cy.findByText("할 일 추가").should("exist").as("todoItem");
    cy.get("@todoItem").click();
    cy.findByLabelText("할 일 추가").should("be.checked");

    // 삭제 확인
    cy.findByTestId("delete-button-3").click();
    cy.findAllByRole("checkbox").should("have.length", 2);
  });
  // it("투두를 추가한다", (): void => {

  // });
});
