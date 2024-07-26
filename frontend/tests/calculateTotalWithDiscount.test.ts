import { UserType } from '../src/models/UserType.ts';
import { calculateTotalWithDiscount } from '../src/services/calculateTotalWithDiscount.ts';

describe('calculateTotalWithDiscount', () => {
  it('Should calculate the total with discount for guest user', () => {
    const result = calculateTotalWithDiscount(
      [createSampleProduct(100, 1)],
      UserType.GUEST
    );

    expect(result).toBe(100);
  });

  it('Should calculate the total with discount for register user', () => {
    const result = calculateTotalWithDiscount(
      [createSampleProduct(100, 1)],
      UserType.REGISTER
    );

    expect(result).toBe(98);
  });

  it('Should calculate the total with discount for VIP user', () => {
    const result = calculateTotalWithDiscount(
      [createSampleProduct(100, 1)],
      UserType.VIP
    );

    expect(result).toBe(90);
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
