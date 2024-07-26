import { UserType } from '../src/models/UserType.ts';
import { calculateDiscount } from '../src/services/calculateDiscount.ts';

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

  it('Should calculate total discount of a register user with 2 product', () => {
    const result = calculateDiscount(
      [createSampleProduct(100, 2)],
      UserType.REGISTER
    );

    expect(result).toBe(10);
  });

  it('Should calculate total discount of a VIP user with 1 product', () => {
    const result = calculateDiscount(
      [createSampleProduct(100, 1)],
      UserType.VIP
    );

    expect(result).toBe(10);
  });
});

function createSampleProduct(price: number, a_quantity: number) {
  return {
    name: 'Test product',
    quantity: a_quantity,
    price: price,
    image: 'https://a_product/a.png',
  };
}
