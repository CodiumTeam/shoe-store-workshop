import { useUser } from '../context/user.tsx';
import { DiscountBanner } from '../components/DiscountBanner.tsx';
import { useCart } from '../context/cart.tsx';
import { calculateTotal, Product, reserveProducts } from '../products.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar.tsx';
import { CartStepper } from '../components/CartStepper.tsx';
import { CartShippingSelector } from '../components/CartShippingSelector.tsx';
import { CartProductSummary } from '../components/CartProductSummary.tsx';
import { UserType } from '../models/UserType.ts';
import { calculateDiscount } from '../services/calculateDiscount.ts';

export function CartPriceSummary({
  products,
  userType = UserType.GUEST,
}: {
  products: Array<Product>;
  userType?: UserType;
}) {
  return (
    <div className=''>
      <div className='mt-6 border-t border-b py-2'>
        <div className='flex items-center justify-between'>
          <p className='text-sm font-medium text-gray-900'>Subtotal</p>
          <p className='font-semibold text-gray-900' id='subtotal'>
            {calculateTotal(products).toFixed(2)} €
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <p className='text-sm font-medium text-gray-900'>Discount</p>
          <p className='font-semibold text-red-500' id='subtotal'>
            {calculateDiscount(products, userType)} €
          </p>
        </div>
      </div>
      <div className='mt-6 flex items-center justify-between'>
        <p className='text-sm font-medium text-gray-900'>Total</p>
        <p className='text-2xl font-semibold text-gray-900' id='total'>
          {calculateTotal(products).toFixed(2)} €
        </p>
      </div>
    </div>
  );
}

export function Cart() {
  const { type: userType } = useUser();
  const { products } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      navigate('/');
    }
  }, []);

  async function handleConfirm() {
    await reserveProducts();
    window.location.assign('/payment');
  }

  return (
    <div className='w-full'>
      <Navbar />
      <CartStepper />

      <div className='grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32'>
        <div className='px-4 pt-8'>
          <p className='text-xl font-medium'>Order Summary</p>
          <p className='text-gray-400'>
            Check your items. And select a suitable shipping method.
          </p>
          <div className='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6'>
            {products.map((product) => {
              return (
                <CartProductSummary key={product.name} product={product} />
              );
            })}
          </div>

          <p className='mt-8 text-lg font-medium'>Shipping Methods</p>
          <CartShippingSelector />
        </div>
        <div className='mt-10 bg-gray-50 px-4 pt-8 lg:mt-0'>
          <DiscountBanner products={products} userType={userType} />
          <p className='text-xl font-medium'>Payment Details</p>
          <p className='text-gray-400'>
            Complete your order by providing your payment details.
          </p>
          <CartPriceSummary products={products} />
          <button
            className='mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white'
            onClick={handleConfirm}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
