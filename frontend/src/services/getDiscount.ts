import { Product } from '../products.ts';
import { UserType } from '../models/UserType.ts';

export const MAX_REGISTER_DISCOUNT = 10;
export const MAX_VIP_DISCOUNT = 25;

export function getDiscount(
  products: Array<Product>,
  userType: UserType | UserType.REGISTER | UserType.GUEST
) {
  let totalQuantity = 0;
  let tmpDiscount = 0;
  let discount = 0;

  for (let index = 0; index < products.length; index++) {
    totalQuantity += products[index].quantity;
  }

  if (UserType.isVip(userType)) {
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
    discount = tmpDiscount;
  } else if (UserType.isRegister(userType)) {
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
  } else if (UserType.isGuest(userType)) {
    const guestDiscount = 0;
    if (totalQuantity) {
      discount = guestDiscount;
    }
  }
  return discount;
}
