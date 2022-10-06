import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Test Tag component', () => {
  it('renders the component', () => {
    render(<Tag start="10pm" end="11pm" variant="active" />);
    const tag = screen.getByRole('button');
    expect(tag).toHaveClass('text-red-primary');
  });
});
describe('Test Tag component', () => {
  it('renders the component', () => {
    render(<Tag start="10pm" end="11pm" variant="inactive" />);
    const tag = screen.getByRole('button');
    expect(tag).toHaveClass('text-charcoal');
  });
});
