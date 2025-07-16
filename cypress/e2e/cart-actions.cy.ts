describe('Cart actions', () => {

  beforeEach(() =>{
    cy.visit('/');
  });

  it('Add to cart', () =>{
  let productName: string;
  let productPrice: string;

  cy.getByTestId('ProductElement').first().within(() => {
    cy.get('h3').invoke('text').then((name) => {
      productName = name.trim();
    });

    cy.getByTestId('ProductElement_PriceRange').invoke('text').then((price) => {
      productPrice = price.trim();
    });
    }).then(() => {
      cy.getByTestId('ProductElement').first().click();
      cy.url().should('contain', 'products');
      cy.getByTestId('ProductElement_Name').should('have.text', productName);
      cy.getByTestId('ProductElement_Price').should('have.text', productPrice);
      cy.percySnapshot('Product details');
      cy.getByTestId('VariantSelector', { timeout: 0}).then(($el) => {
        if ($el.length > 0) {
          cy.wrap($el)
          .find('a')
          .first()
          .click()
        }
      });
      cy.getByTestId('AddToCartButton')
      .click()
      .should('contain.text', 'Processing...');
      cy.getByTestId('CartCountItem').should('contain.text', '1');
    });
  });
});
