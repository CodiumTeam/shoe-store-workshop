import { Product } from '../products.ts';
import { UserType } from '../models/UserType.ts';

export function DiscountBanner({
  products,
  userType,
}: {
  products: Array<Product>;
  userType: UserType;
}) {
  let totalQuantity = 0;
  let tmpDiscount = 0;
  let discount = 0;
  const MAX_REGISTER_DISCOUNT = 10;
  const MAX_VIP_DISCOUNT = 25;
  for (let index = 0; index < products.length; index++) {
    totalQuantity += products[index].quantity;
  }

  if (userType === UserType.VIP) {
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
    return (
      <div className='bg-indigo-900 text-center py-4 lg:px-4 mb-4'>
        <div
          className='p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex'
          role='alert'
        >
          <p className='flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3'>
            VIP
          </p>
          <p className='font-semibold mr-2 text-left flex-auto'>
            As a valued <strong>VIP member</strong>, enjoy a special discount of{' '}
            {discount}% on all purchases.{' '}
            {discount !== MAX_VIP_DISCOUNT && (
              <>
                <br />
                <span className='font-normal mr-2 mt-2 inline-block text-left flex-auto'>
                  Add more products to get {MAX_VIP_DISCOUNT}% on this purchase
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    );
  } else if (userType === UserType.REGISTER) {
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

    return (
      <div className='bg-gradient-to-r  from-purple-600 to-blue-600 font-[sans-serif] p-6 mb-5'>
        <div className='container mx-auto flex flex-col justify-center items-center'>
          <h2 className='text-white text-3xl font-bold mb-4'>
            Get more Discounts!
          </h2>
          <p className='text-white text-xs text-center mb-6'>
            <span className={'underline'}>
              You are getting {discount}% now.
              <br />
            </span>
            {discount !== MAX_REGISTER_DISCOUNT && (
              <span>
                Add more products to get {MAX_REGISTER_DISCOUNT}% on this
                purchase
              </span>
            )}
          </p>

          <p className='text-white text-base text-center mb-6'>
            Upgrade your account to VIP and get{' '}
            <span className='underline font-bold'>
              {MAX_VIP_DISCOUNT}% discount
            </span>{' '}
            for this purchase.
          </p>

          <a
            href='/login'
            className='inline-flex items-center justify-center rounded-md border-2 border-transparent bg-white px-12 py-3 text-center text-base font-bold text-gray-800 transition-all duration-200 ease-in-out focus:shadow hover:bg-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 mr-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z'
              />
            </svg>
            Upgrade account
          </a>
        </div>
      </div>
    );
  } else if (userType === UserType.GUEST) {
    const guestDiscount = 0;
    if (totalQuantity) {
      discount = guestDiscount;
      return (
        <div className='bg-gradient-to-r from-orange-600 to-red-600 font-[sans-serif] p-6 mb-5'>
          <div className='container mx-auto flex flex-col justify-center items-center'>
            <h2 className='text-white text-3xl font-bold mb-4'>
              Get Exclusive Discounts!
            </h2>
            <p className='text-white font-thin text-center mb-6 text-xs'>
              Hey! guest user. You are getting {discount}% discount
            </p>
            <p className='text-white text-base text-center mb-6'>
              Want a discount? Sign in now to get up to a{' '}
              <span className='underline font-bold'>
                {MAX_REGISTER_DISCOUNT}% discount
              </span>{' '}
              on this purchase.
            </p>
            <a
              href='/login'
              className='inline-flex items-center justify-center rounded-md border-2 border-transparent bg-white px-12 py-3 text-center text-base font-bold text-gray-800 transition-all duration-200 ease-in-out focus:shadow hover:bg-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 mr-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                />
              </svg>
              Sign in
            </a>
          </div>
        </div>
      );
    }
  }

  return null;
}
