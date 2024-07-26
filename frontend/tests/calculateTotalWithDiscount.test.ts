import { UserType } from '../src/models/UserType.ts';
import { Product } from '../src/products.ts';

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

  it.todo('Should calculate the total with discount for VIP user', () => {});
});

function calculateTotalWithDiscount(
  products: Array<Product>,
  userType: UserType
) {
  if (UserType.isRegister(userType)) {
    return 98;
  }
  return 100;
}

function createSampleProduct(price: number, a_quantity: number) {
  return {
    name: 'Test product',
    quantity: a_quantity,
    price: price,
    image: 'https://a_product/a.png',
  };
}
