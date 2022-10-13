import { render, screen } from '@testing-library/react';
import InputField from './InputField';

describe('Test InputField component', () => {
  it('renders the component and checks for the particular class', () => {
    render(<InputField variant="text" icon="left" />);
    const inputField = screen.getByTestId('input');
    expect(inputField).toHaveClass('text');
  });
  it('renders the component and checks for the particular class', () => {
    render(<InputField variant="number" icon="left" />);
    const inputField = screen.getByTestId('input');
    expect(inputField).toHaveClass('number');
  });
  it('renders the component and checks for the particular class', () => {
    render(<InputField variant="password" icon="both" />);
    const inputField = screen.getByTestId('input');
    expect(inputField).toHaveClass('password');
  });
  it('renders the component and checks for the particular class', () => {
    render(<InputField variant="date" />);
    const inputField = screen.getByTestId('input');
    expect(inputField).toHaveClass('date');
  });
});
