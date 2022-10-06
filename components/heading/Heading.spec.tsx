import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Text', () => {
  it('renders the component', () => {
    render(<Heading title="Hello" variant="small" />);
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveClass('small');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Heading title="Hello" variant="medium" />);
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveClass('medium');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Heading title="Hello" variant="large" />);
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveClass('large');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Heading title="Hello" variant="small-bold" />);
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveClass('small-bold');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Heading title="Hello" variant="medium-bold" />);
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveClass('medium-bold');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Heading title="Hello" variant="large-bold" />);
    const text = screen.getByRole('heading', { level: 1 });
    expect(text).toHaveClass('large-bold');
  });
});
