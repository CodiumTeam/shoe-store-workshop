import { render, screen } from '@testing-library/react';
import { Product } from '../src/products.ts';
import { PaymentPriceSummary } from '../src/pages/Payment.tsx';

describe('PaymentPriceSummary', () => {
  it('Should render savings text', () => {
    const product: Product = createSampleProduct(100, 1);

    render(<PaymentPriceSummary products={[product]} />);

    expect(screen.getByText('Savings')).toBeVisible();
  });

  it('Should render discount calculation text', () => {
    const product: Product = createSampleProduct(100, 1);

    render(<PaymentPriceSummary products={[product]} />);

    expect(screen.getByText('0 €')).toBeVisible();
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
