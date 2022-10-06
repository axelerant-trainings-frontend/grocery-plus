import { render, screen } from '@testing-library/react';
import InputField from './InputField';

describe('Test InputField component', () => {
  it('renders the component', () => {
    render(<InputField variant="text" icon="left" />);
    const inputField = screen.getByRole('img');
    expect(inputField).toHaveClass('text');
  });
});
describe('Test InputField component', () => {
  it('renders the component', () => {
    render(<InputField variant="password" icon="left" />);
    const inputField = screen.getByRole('img');
    expect(inputField).toHaveClass('password');
  });
});
describe('Test InputField component', () => {
  it('renders the component', () => {
    render(<InputField variant="number" icon="left" />);
    const inputField = screen.getByRole('img');
    expect(inputField).toHaveClass('number');
  });
});
describe('Test InputField component', () => {
  it('renders the component', () => {
    render(<InputField variant="password" icon="both" />);
    const inputField = screen.getAllByRole('img')[0];
    const inputField2 = screen.getAllByRole('img')[1];
    expect(inputField).toHaveClass('both');
    expect(inputField2).toHaveClass('both');
  });
});
describe('Test InputField component', () => {
  it('renders the component', () => {
    render(<InputField variant="date" />);
    const inputField = screen.getByTestId(/date/i);
    expect(inputField).toHaveAttribute('type', 'date');
  });
});
