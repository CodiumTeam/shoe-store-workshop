import { Product } from '../products.ts';
import { UserType } from '../models/UserType.ts';

export const MAX_REGISTER_DISCOUNT = 10;
export const MAX_VIP_DISCOUNT = 25;

function calculateVipDiscount(totalQuantity: number) {
  let tmpDiscount = 0;
  let result = 0;
  switch (totalQuantity) {
    case 0:
      result = 0;
      break;
    case 1:
      result = 5;
      break;
    case 2:
      result = 10;
      break;
    default:
      result = 20;
      break;
  }
  tmpDiscount = result;
  if (totalQuantity) {
    tmpDiscount += 5; // VIP customers get an additional 5% discount
  }
  return tmpDiscount;
}

function calculateRegisterDiscount(totalQuantity: number) {
  let discount = 0;

  let discountPercent = 0;
  if (totalQuantity <= 3) {
    if (totalQuantity === 1) {
      discountPercent = 2;
    } else if (totalQuantity === 2) {
      discountPercent = 5;
    } else if (totalQuantity === 3) {
      discountPercent = MAX_REGISTER_DISCOUNT;
    }
    if (totalQuantity) {
      discount = discountPercent;
    }
  } else {
    discountPercent = MAX_REGISTER_DISCOUNT;
    if (totalQuantity) {
      discount = discountPercent;
    }
  }
  return discount;
}

function calculateGuestDiscount(totalQuantity: number) {
  let discount = 0;

  const guestDiscount = 0;
  if (totalQuantity) {
    discount = guestDiscount;
  }
  return discount;
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
    discount = calculateGuestDiscount(totalQuantity);
  }

  return discount;
}
