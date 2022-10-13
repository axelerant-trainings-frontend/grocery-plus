import { render, screen } from '@testing-library/react';
import Searchbox from './Searchbox';

describe('Test Searchbox component', () => {
  it('renders the component and check whether it has specific class or not', () => {
    render(<Searchbox variant="active" />);
    const searchbox = screen.getByTestId('searchbox');
    expect(searchbox).toHaveClass('active');
  });
  it('renders the component and check whether it has specific class or not', () => {
    render(<Searchbox variant="inactive" />);
    const searchbox = screen.getByTestId('searchbox');
    expect(searchbox).toHaveClass('inactive');
  });
});
