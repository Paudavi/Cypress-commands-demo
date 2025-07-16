
/// <reference types="cypress" />
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

Cypress.Commands.add( 'getByTestId', (testId: string, options?: Partial<Cypress.Timeoutable & Cypress.Loggable>) => {
  return cy.get(`[data-testid="${testId}"]`, options);
  });

Cypress.Commands.add('clickOnProduct', (position: number) => {
  return cy.getByTestId('ProductElement').eq(position).click();
});

Cypress.Commands.add('addToCart', () => {
  return cy.getByTestId('AddToCartButton').click();
});

Cypress.Commands.add('findByPlaceholderText', (text: string) => {
  return cy.get(`[placeholder="${text}"]`).should('be.visible');
});

