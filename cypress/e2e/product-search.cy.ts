
describe('Product Search', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the empty sate when no products match the search', () => {
    cy.findByPlaceholderText('Search for products...').type('car{enter}');
    cy.get('h1').should('have.text', 'Nothing found :(').and('be.visible');
    // cy.matchImageSnapshot('emptyStateSearch');
    cy.percySnapshot('Empty search state')
  });

  it('should display matching products when products match the search', () => {
    cy.findByPlaceholderText('Search for products...').type('shoes{enter}');
    cy.url().should('include', 'shoes');
    cy.getByTestId('ProductElement').each(($result) => {
      cy.wrap($result)
      .find('h3')
      .should('contain.text', 'Shoes');
    });
    cy.percySnapshot('Shoes results page');
  });

});
