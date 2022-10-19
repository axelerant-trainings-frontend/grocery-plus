import { render, screen } from '@testing-library/react';
import ProdDesc from './ProdDesc';

describe('description', () => {
  it('renders the component', () => {
    render(
      <ProdDesc
        label="test data"
        quantity="test data"
        price="test data"
        category="test data"
        summary="test data"
      />,
    );
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
  });
  it('renders the component whether having a specific class', () => {
    render(
      <ProdDesc
        label="test data"
        quantity="test data"
        price="test data"
        category="test data"
        summary="test data"
      />,
    );
    const description = screen.getByTestId('description');
    expect(description).toHaveClass(
      'flex flex-col max-w-sm px-15 py-16 bg-gray-light',
    );
  });
  it('renders the component whether having a specific class', () => {
    render(
      <ProdDesc
        label="test data"
        quantity="test data"
        price="test data"
        category="test data"
        summary="test data"
      />,
    );
    const description = screen.getByTestId('quantity');
    expect(description).toHaveClass('items-baseline');
  });
  it('renders the component whether having a specific class', () => {
    render(
      <ProdDesc
        label="test data"
        quantity="test data"
        price="test data"
        category="test data"
        summary="test data"
      />,
    );
    const description = screen.getByTestId('category');
    expect(description).toHaveClass('items-center');
  });
  it('renders the component whether having a specific class', () => {
    render(
      <ProdDesc
        label="test data"
        quantity="test data"
        price="test data"
        category="test data"
        summary="test data"
      />,
    );
    const description = screen.getByTestId('summary');
    expect(description).toHaveClass('flex');
  });
});
