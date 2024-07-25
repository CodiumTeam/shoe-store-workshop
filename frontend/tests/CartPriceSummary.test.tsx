import { render, screen } from '@testing-library/react';
import { CartPriceSummary } from '../src/pages/Cart.tsx';
import { Product } from '../src/products.ts';

describe('CartPriceSummary', () => {
  it('Should render discount text', () => {
    const product: Product = {
      name: 'Test product',
      quantity: 1,
      price: 100,
      image: 'https://a_product/a.png',
    };

    render(<CartPriceSummary products={[product]} />);

    expect(screen.getByText('Discount')).toBeVisible();
  });
});
