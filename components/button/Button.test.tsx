import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Test Button component', () => {
  it('renders the component', () => {
    render(<Button variant="primary" text="Test data"></Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders the correct child data', () => {
    render(<Button variant="primary" text="Test data"></Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/test data/i);
  });

  it('display an alert onClick', () => {
    render(
      <Button
        variant="primary"
        text="test data"
        onClick={(event) => {
          event.currentTarget.classList.add('clicked');
        }}
      />,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveClass('clicked');
  });

  it('renders the component based on variant primary', () => {
    render(<Button variant="primary" text="Test data" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-green-primary h-12');
  });

  it('renders the component based on variant primary-small', () => {
    render(<Button variant="primary-small" text="Test data" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-green-primary h-9');
  });
  it('renders the component based on variant secondary', () => {
    render(<Button variant="secondary" text="Test data" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-primary h-12');
  });
  it('renders the component based on variant secondary-small', () => {
    render(<Button variant="secondary-small" text="Test data" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-red-primary h-9');
  });
  it('renders the component based on variant tertiary', () => {
    render(<Button variant="tertiary" text="Test data" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-light-off h-12');
  });
  it('renders the component based on variant tertiary-small', () => {
    render(<Button variant="tertiary-small" text="Test data" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-light-off h-9');
  });
});
