import { render, screen } from '@testing-library/react';
import Location from './Location';

describe('location', () => {
  it('renders the component', () => {
    render(<Location variant="primary" address="Test data" />);
    const location = screen.getByTestId('location');
    expect(location).toBeInTheDocument();
  });

  it('renders the component based on variant primary', () => {
    render(<Location variant="primary" address="Test data" />);
    const location = screen.getByTestId('location');
    expect(location).toHaveClass(
      'flex items-center bg-flashWhite max-w-sm px-16 h-48',
    );
  });

  it('renders the component based on variant secondary', () => {
    render(<Location variant="secondary" address="Test data" />);
    const location = screen.getByTestId('location');
    expect(location).toHaveClass('py-12 rounded-full bg-blue-primary px-15');
  });
});
