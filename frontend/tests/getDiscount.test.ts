import { getDiscount } from '../src/services/getDiscount.ts';
import { UserType } from '../src/models/UserType.ts';
import { Product } from '../src/products.ts';

describe('getDiscount', () => {
  it('Should return 0 when a guest user buy 0 product', () => {
    const result = getDiscount([], UserType.GUEST);

    expect(result).toEqual(0);
  });

  test.each([
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ])(
    'Should return %d when a guest user buy %d product',
    (expectedDiscount, quantity) => {
      const a_product: Product = createSampleProduct(quantity);

      const result = getDiscount([a_product], UserType.GUEST);

      expect(result).toBe(expectedDiscount);
    }
  );

  it('Should return 0 when a register user buy 0 product', () => {
    const result = getDiscount([], UserType.REGISTER);

    expect(result).toEqual(0);
  });

  test.each([
    [2, 1],
    [5, 2],
    [10, 3],
    [10, 4],
  ])(
    'Should return %d when a register user buy %d product',
    (expectedDiscount, quantity) => {
      const a_product: Product = createSampleProduct(quantity);

      const result = getDiscount([a_product], UserType.REGISTER);

      expect(result).toBe(expectedDiscount);
    }
  );

  it('Should return 0 when a VIP user buy 0 product', () => {
    const result = getDiscount([], UserType.VIP);

    expect(result).toEqual(0);
  });

  test.each([
    [10, 1],
    [15, 2],
    [25, 3],
    [25, 4],
  ])(
    'Should return %d when a VIP user buy %d product',
    (expectedDiscount, quantity) => {
      const a_product: Product = createSampleProduct(quantity);

      const result = getDiscount([a_product], UserType.VIP);

      expect(result).toBe(expectedDiscount);
    }
  );
});

function createSampleProduct(a_quantity: number) {
  return {
    name: 'Test product',
    quantity: a_quantity,
    price: 10,
    image: 'https://a_product/a.png',
  };
}
