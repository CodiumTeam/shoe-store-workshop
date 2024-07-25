import { UserType } from '../src/models/UserType.ts';
import { Product } from '../src/products.ts';

describe('calculateDiscount', () => {
  it('Should calculate total discount of a guest user', () => {
    const result = calculateDiscount([], UserType.GUEST);

    expect(result).toBe(0);
  });
});

function calculateDiscount(products: Array<Product>, userType: UserType) {
  return 0;
}
