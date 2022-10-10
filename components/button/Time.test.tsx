import { render, screen } from '@testing-library/react';
import Time from './Time';

describe('Test Time component', () => {
  it('renders the component and checks for the specific class', () => {
    render(<Time start="10pm" end="11pm" variant="active" />);
    const time = screen.getByRole('button');
    expect(time).toHaveClass('text-red-primary');
  });
  it('renders the component and checks for the specific class', () => {
    render(<Time start="10pm" end="11pm" variant="inactive" />);
    const time = screen.getByRole('button');
    expect(time).toHaveClass('text-charcoal');
  });
});
