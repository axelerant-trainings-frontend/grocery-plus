import { render, screen } from '@testing-library/react';
import Time from '../time/Time';

describe('Test Time component', () => {
  it('renders the component and checks for the specific class', () => {
    const StartTime = '10PM';
    const EndTime = '10AM';
    render(<Time start={StartTime} end={EndTime} variant="active" />);
    const time = screen.getByRole('button');
    expect(time).toHaveClass('text-red-primary');
  });
  it('renders the component and checks for the specific class', () => {
    const StartTime = '10PM';
    const EndTime = '10AM';
    render(<Time start={StartTime} end={EndTime} variant="inactive" />);
    const time = screen.getByRole('button');
    expect(time).toHaveClass('text-charcoal');
  });
});
