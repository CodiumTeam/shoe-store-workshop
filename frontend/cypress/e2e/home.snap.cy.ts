describe('Home snapshot testing', () => {
  it('All page', () => {
    cy.visit('http://localhost:5173/');

    cy.get('#list').compareSnapshot('home-page-list');
  });
});
