import { calculateTotal, Product } from '../products.ts';
import { UserType } from '../models/UserType.ts';
import { getDiscount } from './getDiscount.ts';

export function calculateDiscount(
  products: Array<Product>,
  userType: UserType
) {
  const total = calculateTotal(products);
  const discount = getDiscount(products, userType);

  return total * (discount / 100);
}
