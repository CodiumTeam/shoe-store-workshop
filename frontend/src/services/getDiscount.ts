import { Product } from '../products.ts';
import { UserType } from '../models/UserType.ts';

export const MAX_REGISTER_DISCOUNT = 10;
export const MAX_VIP_DISCOUNT = 25;

function calculateVipDiscount(totalQuantity: number) {
  if (totalQuantity === 0) return 0;
  const EXTRA_VIP_DISCOUNT = 5;
  const discounts: Record<number, number> = {
    1: 5,
    2: 10,
  };

  return (discounts[totalQuantity] || 20) + EXTRA_VIP_DISCOUNT;
}

function calculateRegisterDiscount(totalQuantity: number) {
  if (totalQuantity === 0) return 0;

  const discounts: Record<number, number> = {
    1: 2,
    2: 5,
    3: MAX_REGISTER_DISCOUNT,
  };

  return discounts[totalQuantity] || MAX_REGISTER_DISCOUNT;
}

function calculateGuestDiscount() {
  return 0;
}

function calculateTotalQuantity(products: Array<Product>) {
  let totalQuantity = 0;
  for (let index = 0; index < products.length; index++) {
    totalQuantity += products[index].quantity;
  }
  return totalQuantity;
}

export function getDiscount(
  products: Array<Product>,
  userType: UserType | UserType.REGISTER | UserType.GUEST
) {
  const totalQuantity = calculateTotalQuantity(products);
  let discount = 0;

  if (UserType.isVip(userType)) {
    discount = calculateVipDiscount(totalQuantity);
  } else if (UserType.isRegister(userType)) {
    discount = calculateRegisterDiscount(totalQuantity);
  } else if (UserType.isGuest(userType)) {
    discount = calculateGuestDiscount();
  }

  return discount;
}
