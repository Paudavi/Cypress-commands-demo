
/// <reference types="cypress" />
/// <reference types="@percy/cypress" />

import { Placeholder, TestIdElements  } from "../typings/placeholders";

declare global {
  namespace Cypress {
    interface Chainable {

      clickOnProduct(position:number): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to get element by data-testid attribute.
       * @example cy.getByTestId('ProductElement')
       */
      getByTestId(testId: TestIdElements, options?: Partial<Cypress.Timeoutable & Cypress.Loggable> ): Chainable<JQuery<HTMLElement>>;

      addToCart(): Chainable<JQuery<HTMLElement>>;

      findByPlaceholderText(text:Placeholder): Chainable<JQuery<HTMLElement>>

      matchImageSnapshot(name?: string, options?: Partial<unknown>): void;
    }
  }
 }
