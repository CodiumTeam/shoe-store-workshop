describe('Cart', () => {
  it('tests Gues user can buy shoes', () => {
    cy.visit('http://localhost:5173/');
    cy.get(
      'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
    ).click();
    cy.get('nav span:nth-of-type(1)').click();
    cy.get('#subtotal').should('have.text', '119.99 €');
    cy.get('#total').should('have.text', '119.99 €');
    cy.get('#total').click();
    cy.get('p.font-thin').should(
      'have.text',
      'Hey! guest user. You are getting 0% discount'
    );
    cy.get('p.font-thin').click();
    cy.get('button').click();
    cy.location('href').should('eq', 'http://localhost:5173/payment');
    cy.get('#full_name').click();
    cy.get('#full_name').type('Test');
    cy.get('#card-number-input').type('41111111');
    cy.get('#card-expiration-input').type('12/24');
    cy.get('#cvv-input').type('123');
    cy.get('button.flex').click();
    cy.get('div.main-box > div.w-full > p').should('have.text', 'Status: PAID');
    cy.get('#home').click();
    cy.location('href').should('eq', 'http://localhost:5173/');
  });

  it('Register user can buy shoes', () => {
    cy.visit('http://localhost:5173/');
    cy.get(
      'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
    ).click();
    cy.get('nav span:nth-of-type(1)').click();
    cy.get('div.grid a').click();
    cy.location('href').should('eq', 'http://localhost:5173/login');
    cy.get('#email').type('jose@codium.team');
    cy.get('#password').type('softqrate');
    cy.get('button').click();
    cy.get('#cart-link').click();
    cy.get('p.text-xs > span.underline').should(
      'have.text',
      'You are getting 2% now.'
    );
    cy.get('p.text-xs > span.underline').click();
    cy.get('button').click();
    cy.location('href').should('eq', 'http://localhost:5173/payment');
    cy.get('#full_name').click();
    cy.get('#full_name').type('Test');
    cy.get('#card-number-input').click();
    cy.get('#card-number-input').type('4111111');
    cy.get('#card-expiration-input').click();
    cy.get('#card-expiration-input').type('12/24');
    cy.get('#cvv-input').click();
    cy.get('#cvv-input').type('123');
    cy.get('button.flex').click();
    cy.get('div.main-box > div.w-full > p').should('have.text', 'Status: PAID');
    cy.get('div.main-box > div.w-full > p').click();
    cy.get('#home').click();
    cy.location('href').should('eq', 'http://localhost:5173/');
  });
});
