import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Test Navbar component', () => {
  it('renders the component and check the correct url /home', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[0];
    expect(navbar).toHaveAttribute('title', 'home');
    expect(navbar).toHaveAttribute('href', '/');
  });
  it('renders the component and check the correct url /dashboard', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[1];
    expect(navbar).toHaveAttribute('title', 'dashboard');
    expect(navbar).toHaveAttribute('href', '/dashboard');
  });
  it('renders the component and check the correct url /bag', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[2];
    expect(navbar).toHaveAttribute('title', 'bag');
    expect(navbar).toHaveAttribute('href', '/bag');
  });
  it('renders the component and check the correct url /menu', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[3];
    expect(navbar).toHaveAttribute('title', 'menu');
    expect(navbar).toHaveAttribute('href', '/menu');
  });
});
