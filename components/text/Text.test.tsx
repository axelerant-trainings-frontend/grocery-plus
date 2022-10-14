import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('renders the component with variant small', () => {
    render(<Text title="Hello" variant="small" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-normal text-md leading-xs');
  });
  it('renders the component with variant medium', () => {
    render(<Text title="Hello" variant="medium" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-normal text-lg leading-sm');
  });
  it('renders the component with variant', () => {
    render(<Text title="Hello" variant="large" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-normal text-xl leading-lg');
  });
  it('renders the component with variant xlarge', () => {
    render(<Text title="Hello" variant="xlarge" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-normal text-2xl leading-xl');
  });
  it('renders the component with variant small-bold', () => {
    render(<Text title="Hello" variant="small-bold" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-bold text-md leading-xs');
  });
  it('renders the component with variant medium-bold', () => {
    render(<Text title="Hello" variant="medium-bold" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-bold text-lg leading-sm');
  });
  it('renders the component with variant large-bold', () => {
    render(<Text title="Hello" variant="large-bold" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-bold text-xl leading-lg');
  });
  it('renders the component with variant xlarge-bold', () => {
    render(<Text title="Hello" variant="xlarge-bold" />);
    const text = screen.getByTestId('text');
    expect(text).toHaveClass('font-bold text-2xl leading-xl');
  });
});
