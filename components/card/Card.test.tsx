import { render, screen } from '@testing-library/react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import cartReducer, { addItem, removeItem } from '../../redux/features/cart';

jest.mock('react-redux');

describe('Card', () => {
  beforeEach(() => {
    // useDispatch.mockImplementation()
  });
  it('Renders Primary Card', () => {
    render(
      <Card
        cardImage="https://picsum.photos/200/300.jpg"
        cardLabel="Fruits & Vegetables"
        variant="primary"
      />,
    );
    const card = screen.getByTestId('primary-card');
    expect(card).toBeInTheDocument();
  });

  it('Renders Secondary Card', () => {
    render(
      <Card
        cardImage="https://picsum.photos/200/300.jpg"
        cardLabel="Fruits & Vegetables"
        variant="secondary"
        originalPrice={300}
      />,
    );
    const card = screen.getByTestId('secondary-card');
    expect(card).toBeInTheDocument();
  });

  it('Renders TertiarySearch Card', () => {
    render(
      <Card
        cardImage="https://picsum.photos/200/300.jpg"
        cardLabel="Fruits & Vegetables"
        variant="tertiarySearch"
        originalPrice={300}
      />,
    );
    const card = screen.getByTestId('tertiarySearch-card');
    expect(card).toBeInTheDocument();
  });

  it('Renders TertiaryBag Card', () => {
    render(
      <Card
        cardImage="https://picsum.photos/200/300.jpg"
        cardLabel="Fruits & Vegetables"
        variant="tertiaryBag"
        originalPrice={300}
        count={1}
      />,
    );
    const card = screen.getByTestId('tertiaryBag-card');
    expect(card).toBeInTheDocument();
  });

  it('should return initial state when passed empty action', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = cartReducer(initialState, action);
    expect(result).toEqual({ items: [], amount: 0, total: 0 });
  });

  it('should add and remove item to and from cart', () => {
    const initialState = undefined;
    const addAction = addItem({
      id: 3,
      title: 'Face Wash',
      img: 'https://picsum.photos/id/237/200/300',
      count: 1,
      price: 10,
    });
    const addResult = cartReducer(initialState, addAction);
    expect(addResult).toEqual({
      items: [
        {
          id: 3,
          title: 'Face Wash',
          img: 'https://picsum.photos/id/237/200/300',
          count: 1,
          price: 10,
        },
      ],
      amount: 0,
      total: 0,
    });
    expect(Object.keys(addResult.items).length).toBe(1);
    const removeAction = removeItem({
      id: 3,
      title: 'Face Wash',
      img: 'https://picsum.photos/id/237/200/300',
      count: 1,
      price: 10,
    });
    const removeResult = cartReducer(initialState, removeAction);
    expect(removeResult).toEqual({ items: [], amount: 0, total: 0 });
  });
});
