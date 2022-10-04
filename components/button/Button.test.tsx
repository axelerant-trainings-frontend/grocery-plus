import { render, screen } from '@testing-library/react';

describe('Test Button component', () => {
  it('renders the component', () => {
    render(<button>Test data</button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('renders the correct child data', () => {
    render(<button>Test data</button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/test data/i);
  });
});
