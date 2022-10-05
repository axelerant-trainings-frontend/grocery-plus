import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="small" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('small');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="medium" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('medium');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="large" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('large');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="xlarge" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('xlarge');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="small-bold" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('small-bold');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="medium-bold" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('medium-bold');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="large-bold" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('large-bold');
  });
});
describe('Text', () => {
  it('renders the component', () => {
    render(<Text title="Hello" variant="xlarge-bold" />);
    const text = screen.getByRole('heading', { level: 2 });
    expect(text).toHaveClass('xlarge-bold');
  });
});
