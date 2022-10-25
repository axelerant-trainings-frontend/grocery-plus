import { render, screen } from '@testing-library/react';
import Time from '../time/Time';

describe('Test Time component', () => {
  it('renders the component and checks for the specific class', () => {
    const startTime = '10PM';
    const endTime = '10AM';
    render(<Time start={startTime} end={endTime} variant="active" />);
    const time = screen.getByRole('button');
    expect(time).toHaveClass('text-red-primary');
  });

  it('renders the component and checks for the specific class', () => {
    const startTime = '10PM';
    const endTime = '10AM';
    render(<Time start={startTime} end={endTime} variant="inactive" />);
    const time = screen.getByRole('button');
    expect(time).toHaveClass('text-charcoal');
  });
});
