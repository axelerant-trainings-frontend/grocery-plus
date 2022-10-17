import cartReducer, { addItem, removeItem } from './index';
describe('Cart', () => {
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
