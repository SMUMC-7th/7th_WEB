/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

const USER_DB = { email: 'helllo@gmail.com', password: '12341234' };
const login = (email, password) => {
    cy.visit('/login');
    cy.findByPlaceholderText('이메일을 입력해주세요!').type(email);
    cy.findByPlaceholderText('비밀번호를 입력해주세요!').type(password);
    cy.findByRole('button', { name: /로그인/ }).click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
};
Cypress.Commands.add(
    'login',
    (email = USER_DB.email, password = USER_DB.password) => {
        login(email, password);
    }
);
// ***********************************************
// This example commands.ts shows you how to
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
declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>;
        }
    }
}
