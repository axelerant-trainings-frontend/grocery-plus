import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Test Button component', () => {
  it('renders the component', () => {
    render(<Button>Test data</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('renders the correct child data', () => {
    render(<Button text="Test data"></Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/test data/i);
  });
  it('renders the component based on variant', () => {
    render(<Button variant='primary' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-green-primary h-12');
  });
  it('renders the component based on variant', () => {
    render(<Button variant='primary-small' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-green-primary h-9');
  });
  it('renders the component based on variant', () => {
    render(<Button variant='secondary' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-primary h-12');
  });
  it('renders the component based on variant', () => {
    render(<Button variant='secondary-small' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-primary h-9');
  });
  it('renders the component based on variant', () => {
    render(<Button variant='tertiary' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-light-off h-12');
  });
  it('renders the component based on variant', () => {
    render(<Button variant='tertiary-small' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-light-off h-9');
  });
});

