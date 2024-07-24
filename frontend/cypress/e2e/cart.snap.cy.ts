describe('Cart snapshot testing', () => {
  describe('For guest user', () => {
    it('Can add 1 product without discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('guest-user-1-product');
    });

    it('Can add 2 product without discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('guest-user-2-product');
    });

    it('Can add 3 product without discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('guest-user-3-product');
    });

    it('Can add 4 product without discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('guest-user-4-product');
    });
  });

  describe('For register user', () => {
    it('Can add 1 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('jose@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('register-user-1-product');
    });

    it('Can add 2 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('jose@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('register-user-2-product');
    });

    it('Can add 3 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('jose@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('register-user-3-product');
    });

    it('Can add 4 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('jose@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('register-user-4-product');
    });
  });

  describe('For VIP user', () => {
    it('Can add 1 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('vip@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('vip-1-product');
    });

    it('Can add 2 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('vip@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('vip-2-product');
    });

    it('Can add 3 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('vip@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('vip-3-product');
    });

    it('Can add 4 product with discount', () => {
      cy.visit('http://localhost:5173/');
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get(
        'div.focus\\:outline-none div.flex > div:nth-of-type(1) button'
      ).click();
      cy.get('a:nth-of-type(2)').click();
      cy.get('#email').type('vip@codium.team');
      cy.get('#password').type('codium');
      cy.get('button').click();
      cy.get('#cart-link').click();
      cy.compareSnapshot('vip-4-product');
    });
  });
});
