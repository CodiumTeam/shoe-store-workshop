import { calculateTotal, payCart, Product } from '../products.ts';
import { useCart } from '../context/cart.tsx';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PaymentPriceSummary({
  products,
}: {
  products: Array<Product>;
}) {
  return (
    <div className='space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6'>
      <div className='space-y-2'>
        <dl className='flex items-center justify-between gap-4'>
          <dt className='text-base font-normal text-gray-500'>
            Original price
          </dt>
          <dd
            className='text-base font-medium text-gray-900'
            id='originalPrice'
          >
            {calculateTotal(products).toFixed(2)} €
          </dd>
        </dl>
      </div>

      <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2'>
        <dt className='text-base font-bold text-gray-900' id='totalPrice'>
          Savings
        </dt>
        <dd
          className='text-base font-bold text-gray-900 dark:text-white'
          id='totalPrice'
        >
          0 €
        </dd>
      </dl>

      <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2'>
        <dt className='text-base font-bold text-gray-900'>Total</dt>
        <dd className='text-base font-bold text-gray-900' id='totalPrice'>
          {calculateTotal(products).toFixed(2)} €
        </dd>
      </dl>
    </div>
  );
}

export function PaymentPage() {
  const { products } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      navigate('/');
    }
  }, []);

  async function handlePayment(evt: FormEvent) {
    setIsLoading(true);
    evt.preventDefault();

    await payCart(products);
    sessionStorage.removeItem('products');
    setIsLoading(false);
    setIsSuccess(true);
  }

  return (
    <section className='bg-white py-8 antialiased md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='text-xl font-semibold text-gray-900 sm:text-2xl'>
            Payment
          </h2>

          {!isSuccess && (
            <div className='mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12'>
              <form
                onSubmit={handlePayment}
                className='w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8'
              >
                <div className='mb-6 grid grid-cols-2 gap-4'>
                  <div className='col-span-2 sm:col-span-1'>
                    <label
                      htmlFor='full_name'
                      className='mb-2 block text-sm font-medium text-gray-900'
                    >
                      {' '}
                      Full name (as displayed on card)*{' '}
                    </label>
                    <input
                      disabled={isLoading}
                      type='text'
                      id='full_name'
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500'
                      placeholder='Bonnie Green'
                      required
                    />
                  </div>

                  <div className='col-span-2 sm:col-span-1'>
                    <label
                      htmlFor='card-number-input'
                      className='mb-2 block text-sm font-medium text-gray-900'
                    >
                      {' '}
                      Card number*{' '}
                    </label>
                    <input
                      disabled={isLoading}
                      type='text'
                      id='card-number-input'
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500 '
                      placeholder='xxxx-xxxx-xxxx-xxxx'
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='card-expiration-input'
                      className='mb-2 block text-sm font-medium text-gray-900'
                    >
                      Card expiration*{' '}
                    </label>
                    <div className='relative'>
                      <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5'>
                        <svg
                          className='h-4 w-4 text-gray-500'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <input
                        disabled={isLoading}
                        id='card-expiration-input'
                        type='text'
                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                        placeholder='12/23'
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='cvv-input'
                      className='mb-2 flex items-center gap-1 text-sm font-medium text-gray-900'
                    >
                      CVV*
                    </label>
                    <input
                      type='number'
                      id='cvv-input'
                      aria-describedby='helper-text-explanation'
                      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500'
                      placeholder='•••'
                      required
                    />
                  </div>
                </div>

                <button
                  id={'pay-now'}
                  type='submit'
                  className='flex w-full items-center justify-center rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4  focus:ring-gray-300'
                >
                  {isLoading && (
                    <svg
                      aria-hidden='true'
                      role='status'
                      className='inline w-4 h-4 me-3 text-white animate-spin'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='#E5E7EB'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentColor'
                      />
                    </svg>
                  )}
                  {isLoading ? 'Loading...' : 'Pay now'}
                </button>
                <button className=''></button>
              </form>

              <div className='mt-6 grow sm:mt-8 lg:mt-0'>
                <PaymentPriceSummary products={products} />

                <div className='mt-6 flex items-center justify-center gap-8'>
                  <img className='h-8 w-auto' src='/images/paypal.svg' alt='' />
                  <img className='h-8 w-auto' src='/images/visa.svg' alt='' />
                  <img
                    className='h-8 w-auto'
                    src='/images/mastercard.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          )}

          {isSuccess && (
            <div>
              <section className='py-24 relative'>
                <div className='w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto'>
                  <h2 className='font-manrope font-bold text-4xl leading-10 text-black text-center'>
                    Payment Successful
                  </h2>
                  <p className='mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center'>
                    Thanks for making a purchase
                  </p>
                  <div className='main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full'>
                    <div className='flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200'>
                      <div className='data'>
                        <p className='font-semibold text-base leading-7 text-black'>
                          Order Id:{' '}
                          <span className='text-indigo-600 font-medium'>
                            #10234987
                          </span>
                        </p>
                        <p className='font-semibold text-base leading-7 text-black mt-4'>
                          Order Payment :{' '}
                          <span className='text-gray-400 font-medium'>
                            {' '}
                            {new Date()
                              .toLocaleDateString('es', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })
                              .charAt(0)
                              .toUpperCase()}
                            {new Date()
                              .toLocaleDateString('es', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })
                              .slice(1)}
                          </span>
                        </p>
                      </div>
                      <button className='rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400'>
                        Track Your Order
                      </button>
                    </div>
                    <div className='w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between '>
                      <div className='flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200'>
                        <button className='flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600'>
                          <svg
                            className='stroke-black transition-all duration-500 group-hover:stroke-indigo-600'
                            xmlns='http://www.w3.org/2000/svg'
                            width='22'
                            height='22'
                            viewBox='0 0 22 22'
                            fill='none'
                          >
                            <path
                              d='M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5'
                              stroke=''
                              strokeWidth='1.6'
                              strokeLinecap='round'
                            />
                          </svg>
                          Cancel Order
                        </button>
                      </div>
                      <p className='font-semibold text-lg text-black py-6'>
                        Status: PAID
                      </p>
                    </div>
                  </div>
                  <div className={'text-center mt-24 underline'}>
                    <a href={'/'} id={'home'}>
                      Go to home
                    </a>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
