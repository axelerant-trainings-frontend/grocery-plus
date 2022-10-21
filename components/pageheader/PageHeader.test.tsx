import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';
import { BackwardIcon } from '../iconLibrary';

describe('Test PageHeader component', () => {
  it('renders the component and checks for correct url', () => {
    render(
      <PageHeader
        link="/profile"
        title="Hello"
        textVariant="large"
        icon={BackwardIcon}
      />,
    );
    const pageheader = screen.getByRole('link');
    expect(pageheader).toHaveAttribute('href', '/profile');
  });
  it('renders the component and checks it has icon', () => {
    render(
      <PageHeader
        link="/profile"
        title="Hello"
        textVariant="large"
        icon={BackwardIcon}
      />,
    );
    const pageheader = screen.getByTestId('pagetitle');
    expect(pageheader).toHaveClass(
      'flex items-center max-w-screen-sm mt-48 ml-16 header-with-icon',
    );
  });
  it('renders the component and checks it has icon', () => {
    render(<PageHeader title="Hello" textVariant="large" icon="" />);
    const pageheader = screen.getByTestId('pagetitle');
    expect(pageheader).toHaveClass(
      'flex items-center max-w-screen-sm mt-48 ml-16 header-without-icon',
    );
  });
});
