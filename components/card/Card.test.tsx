import { render, screen } from '@testing-library/react';
import Card from './Card';
import product_img_01 from '../../public/image-product-01.png';

describe('Card', () => {
  it('Renders Primary Card', () => {
    render(
      <Card
        cardImage={product_img_01}
        cardLabel="Fruits & Vegetables"
        variant="primary"
      />,
    );
    const card = screen.getByTestId('primary-card');
    expect(card).toBeInTheDocument();
  });
  it('Renders Secondary Card', () => {
    render(
      <Card
        cardImage={product_img_01}
        cardLabel="Fruits & Vegetables"
        variant="secondary"
        originalPrice={300}
      />,
    );
    const card = screen.getByTestId('secondary-card');
    expect(card).toBeInTheDocument();
  });
  it('Renders TertiarySearch Card', () => {
    render(
      <Card
        cardImage={product_img_01}
        cardLabel="Fruits & Vegetables"
        variant="tertiarySearch"
        originalPrice={300}
      />,
    );
    const card = screen.getByTestId('tertiarySearch-card');
    expect(card).toBeInTheDocument();
  });
  it('Renders TertiaryBag Card', () => {
    render(
      <Card
        cardImage={product_img_01}
        cardLabel="Fruits & Vegetables"
        variant="tertiaryBag"
        originalPrice={300}
        count={1}
      />,
    );
    const card = screen.getByTestId('tertiaryBag-card');
    expect(card).toBeInTheDocument();
  });
});
