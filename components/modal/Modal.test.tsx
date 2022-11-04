import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Test Modal component', () => {
  it('renders the component', () => {
    render(<Modal setOpenModal="false" label="text data" />);
    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
