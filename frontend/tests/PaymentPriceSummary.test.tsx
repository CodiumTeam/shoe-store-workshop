import { render, screen } from '@testing-library/react';
import { Product } from '../src/products.ts';
import { PaymentPriceSummary } from '../src/pages/Payment.tsx';
import { UserType } from '../src/models/UserType.ts';

describe('PaymentPriceSummary', () => {
  it('Should render savings text', () => {
    const product: Product = createSampleProduct(100, 1);

    render(
      <PaymentPriceSummary products={[product]} userType={UserType.GUEST} />
    );

    expect(screen.getByText('Savings')).toBeVisible();
  });

  it('Should render discount calculation text', () => {
    const product: Product = createSampleProduct(100, 1);

    render(
      <PaymentPriceSummary products={[product]} userType={UserType.GUEST} />
    );

    expect(screen.getByText('0 €')).toBeVisible();
  });

  it('Should render discount calculation text as register user with 1 product', () => {
    const product: Product = createSampleProduct(100, 1);

    render(
      <PaymentPriceSummary products={[product]} userType={UserType.REGISTER} />
    );

    expect(screen.getByText('2 €')).toBeVisible();
  });

  it('Should render total to pay with discount', () => {
    const product: Product = createSampleProduct(100, 1);

    render(
      <PaymentPriceSummary products={[product]} userType={UserType.REGISTER} />
    );

    expect(screen.getByText('98 €')).toBeVisible();
  });
});

function createSampleProduct(price: number, quantity: number) {
  return {
    name: 'Test product',
    quantity: quantity,
    price: price,
    image: 'https://a_product/a.png',
  };
}
