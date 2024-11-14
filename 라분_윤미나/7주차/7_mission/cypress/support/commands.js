//<reference types="cypress" />;
import "@testing-library/cypress/add-commands";

/*
const USER_DB = { email: "asdf@asdf.com", password: "asdfasdf" };

const login = (email= "asdf@asdf.com", password= "asdfasdf") => {
  cy.visit("/login");
  cy.findByLabelText("email").type(email);
  cy.findByLabelText("password").type(password);
  cy.findByRole("button", { name: /로그인/ }).click();
  cy.url().should("eq", Cypress.config().baseUrl + "profile");
};
*/

Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.findByLabelText("email").type(email);
  cy.findByLabelText("password").type(password);
  cy.get("form").within(() => {
    cy.get("button").should("not.be.disabled").click();
  });
  cy.url().should("eq", Cypress.config().baseUrl);

  //cy.findByRole("button", { name: /로그인/ }).click();
  //cy.url().should("eq", Cypress.config().baseUrl + "profile");
});

// ***********************************************
// This example commands.js shows you how to
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

/*
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
    }
  }
}

*/
