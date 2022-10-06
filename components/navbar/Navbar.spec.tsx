import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[0];
    expect(navbar).toHaveAttribute('href', '/home');
  });
});
describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[1];
    expect(navbar).toHaveAttribute('href', '/dashboard');
  });
});
describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[2];
    expect(navbar).toHaveAttribute('href', '/bag');
  });
});
describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('link')[3];
    expect(navbar).toHaveAttribute('href', '/menu');
  });
});
describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('img')[0];
    expect(navbar).toHaveAttribute('alt', 'home');
  });
});
describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('img')[1];
    expect(navbar).toHaveAttribute('alt', 'dashboard');
  });
});
describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('img')[2];
    expect(navbar).toHaveAttribute('alt', 'bag');
  });
});
describe('Test Navbar component', () => {
  it('renders the component', () => {
    render(<Navbar />);
    const navbar = screen.getAllByRole('img')[3];
    expect(navbar).toHaveAttribute('alt', 'menu');
  });
});
