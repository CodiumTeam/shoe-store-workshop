import { UserType } from '../src/models/UserType.ts';
import { Product } from '../src/products.ts';

describe('calculateDiscount', () => {
  it('Should calculate total discount of a guest user', () => {
    const result = calculateDiscount([], UserType.GUEST);

    expect(result).toBe(0);
  });

  it('Should calculate total discount of a register user with 1 product', () => {
    const result = calculateDiscount(
      [createSampleProduct(100, 1)],
      UserType.REGISTER
    );

    expect(result).toBe(2);
  });
});

function calculateDiscount(products: Array<Product>, userType: UserType) {
  if (UserType.isRegister(userType)) {
    return 2;
  }

  return 0;
}

function createSampleProduct(price: number, a_quantity: number) {
  return {
    name: 'Test product',
    quantity: a_quantity,
    price: price,
    image: 'https://a_product/a.png',
  };
}
