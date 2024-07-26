import { calculateTotal, Product } from '../products.ts';
import { UserType } from '../models/UserType.ts';
import { calculateDiscount } from './calculateDiscount.ts';

export function calculateTotalWithDiscount(
  products: Array<Product>,
  userType: UserType
) {
  const total = calculateTotal(products);
  const discount = calculateDiscount(products, userType);

  return total - discount;
}
