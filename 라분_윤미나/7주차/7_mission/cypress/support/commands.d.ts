declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

export {}; // 글로벌 스코프에서 사용하기 위한 모듈 설정
