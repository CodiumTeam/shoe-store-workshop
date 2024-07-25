import { getDiscount } from '../src/services/getDiscount.ts';
import { UserType } from '../src/models/UserType.ts';
import { Product } from '../src/products.ts';

describe('getDiscount', () => {
  it('Should return 0 when a guest user buy 0 product', () => {
    const result = getDiscount([], UserType.GUEST);

    expect(result).toEqual(0);
  });

  it('Should return 0 when a a guest user buy 1 product', () => {
    const a_quantity = 1;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.GUEST);

    expect(result).toBe(0);
  });

  it('Should return 0 when a guest user buy 2 product', () => {
    const a_quantity = 2;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.GUEST);

    expect(result).toEqual(0);
  });

  it('Should return 0 when a guest user buy 3 product', () => {
    const a_quantity = 3;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.GUEST);

    expect(result).toEqual(0);
  });

  it('Should return 0 when a guest user buy 4 product', () => {
    const a_quantity = 4;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.GUEST);

    expect(result).toEqual(0);
  });

  it('Should return 0 when a register user buy 0 product', () => {
    const result = getDiscount([], UserType.REGISTER);

    expect(result).toEqual(0);
  });

  it('Should return 2 when a register user buy 1 product', () => {
    const a_quantity = 1;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.REGISTER);

    expect(result).toEqual(2);
  });

  it('Should return 5 when a register user buy 2 product', () => {
    const a_quantity = 2;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.REGISTER);

    expect(result).toEqual(5);
  });

  it('Should return 10 when a register user buy 3 product', () => {
    const a_quantity = 3;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.REGISTER);

    expect(result).toEqual(10);
  });

  it('Should return 10 when a register user buy 4 product', () => {
    const a_quantity = 4;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.REGISTER);

    expect(result).toEqual(10);
  });

  it('Should return 0 when a VIP user buy 0 product', () => {
    const result = getDiscount([], UserType.VIP);

    expect(result).toEqual(0);
  });

  it('Should return 10 when a VIP user buy 1 product', () => {
    const a_quantity = 1;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.VIP);

    expect(result).toEqual(10);
  });

  it('Should return 15 when a VIP user buy 2 product', () => {
    const a_quantity = 2;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.VIP);

    expect(result).toEqual(15);
  });

  it('Should return 25 when a VIP user buy 3 product', () => {
    const a_quantity = 3;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.VIP);

    expect(result).toEqual(25);
  });

  it('Should return 25 when a VIP user buy 4 product', () => {
    const a_quantity = 4;
    const a_product: Product = createSampleProduct(a_quantity);

    const result = getDiscount([a_product], UserType.VIP);

    expect(result).toEqual(25);
  });
});

function createSampleProduct(a_quantity: number) {
  return {
    name: 'Test product',
    quantity: a_quantity,
    price: 10,
    image: 'https://a_product/a.png',
  };
}
