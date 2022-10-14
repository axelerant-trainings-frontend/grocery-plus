import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading', () => {
  it('renders the component with variant small', () => {
    render(<Heading size={1} title="Heading" variant="small" />);
    const text = screen.getByTestId('heading');
    expect(text).toHaveClass('font-normal text-3xl leading-2xl');
  });
  it('renders the component with variant medium', () => {
    render(<Heading size={1} title="Heading" variant="medium" />);
    const text = screen.getByTestId('heading');
    expect(text).toHaveClass('font-normal text-4xl leading-3xl');
  });
  it('renders the component with variant large', () => {
    render(<Heading size={6} title="Heading" variant="large" />);
    const text = screen.getByTestId('heading');
    expect(text).toHaveClass('font-normal text-5xl leading-4xl');
  });
  it('renders the component with variant small bold', () => {
    render(<Heading size={1} title="Heading" variant="small-bold" />);
    const text = screen.getByTestId('heading');
    expect(text).toHaveClass('font-bold text-3xl leading-2xl');
  });
  it('renders the component with variant medium bold', () => {
    render(<Heading size={1} title="Heading" variant="medium-bold" />);
    const text = screen.getByTestId('heading');
    expect(text).toHaveClass('font-bold text-4xl leading-3xl');
  });
  it('renders the component with variant large bold', () => {
    render(<Heading size={1} title="Heading" variant="large-bold" />);
    const text = screen.getByTestId('heading');
    expect(text).toHaveClass('font-bold text-5xl leading-4xl');
  });
});
