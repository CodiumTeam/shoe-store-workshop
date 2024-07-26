import { render, screen } from '@testing-library/react';
import { CartPriceSummary } from '../src/pages/Cart.tsx';
import { Product } from '../src/products.ts';
import { UserType } from '../src/models/UserType.ts';

describe('CartPriceSummary', () => {
  it('Should render discount text', () => {
    const product: Product = {
      name: 'Test product',
      quantity: 1,
      price: 100,
      image: 'https://a_product/a.png',
    };

    render(<CartPriceSummary products={[product]} userType={UserType.GUEST} />);

    expect(screen.getByText('Discount')).toBeVisible();
  });

  it('Should render total discount', () => {
    const product: Product = {
      name: 'Test product',
      quantity: 1,
      price: 100,
      image: 'https://a_product/a.png',
    };

    render(<CartPriceSummary products={[product]} userType={UserType.GUEST} />);

    expect(screen.getByText('0.00 €')).toBeVisible();
  });

  it('Should render total discount for register user with 1 product', () => {
    const product: Product = {
      name: 'Test product',
      quantity: 1,
      price: 100,
      image: 'https://a_product/a.png',
    };

    render(
      <CartPriceSummary products={[product]} userType={UserType.REGISTER} />
    );

    expect(screen.getByText('2.00 €')).toBeVisible();
  });

  it('Should render total discount for register user with 1 product', () => {
    const product: Product = {
      name: 'Test product',
      quantity: 1,
      price: 100,
      image: 'https://a_product/a.png',
    };

    render(<CartPriceSummary products={[product]} userType={UserType.VIP} />);

    expect(screen.getByText('10.00 €')).toBeVisible();
  });

  it('Should render total discount with two decimals', () => {
    const product: Product = {
      name: 'Test product',
      quantity: 1,
      price: 119.99,
      image: 'https://a_product/a.png',
    };

    render(<CartPriceSummary products={[product]} userType={UserType.VIP} />);

    expect(screen.getByText('12.00 €')).toBeVisible();
  });

  it('Should render total to pay with two decimals', () => {
    const product: Product = {
      name: 'Test product',
      quantity: 1,
      price: 100,
      image: 'https://a_product/a.png',
    };

    render(
      <CartPriceSummary products={[product]} userType={UserType.REGISTER} />
    );

    expect(screen.getByText('98.00 €')).toBeVisible();
  });
});
