import { render, screen } from '@testing-library/react';
import Searchbox from './Searchbox';

describe('Test Searchbox component', () => {
  it('renders the component', () => {
    render(<Searchbox variant="active" />);
    const searchbox = screen.getByRole('img');
    expect(searchbox).toHaveClass('active');
  });
});
describe('Test Searchbox component', () => {
  it('renders the component', () => {
    render(<Searchbox variant="inactive" />);
    const searchbox = screen.getByRole('img');
    expect(searchbox).toHaveClass('inactive');
  });
});
