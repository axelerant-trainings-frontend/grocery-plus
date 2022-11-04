import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

describe('Test Calendar component', () => {
  it('renders the component', () => {
    render(<Calendar />);
    const calendar = screen.getByTestId('calendar');
    expect(calendar).toBeInTheDocument();
  });
});
