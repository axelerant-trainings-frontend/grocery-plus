import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  calculateCartItems,
  clearCart,
  decrementItem,
  incrementItem,
  removeItem,
  selectCart,
} from '../../redux/features/cart';

const Cart = () => {
  const { items: cartItems, amount, total } = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCartItems());
  }, [cartItems, dispatch]);
  return (
    <>
      <h1 className="mb-3 text-xl">Our Cart</h1>
      <div className="mb-4 flex w-1/3">
        <button
          onClick={() => dispatch(clearCart())}
          className="w-1/2 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Clear Cart
        </button>
        <button
          onClick={() =>
            dispatch(
              addItem({ id: 3, title: 'Face Wash', count: 1, price: 10 }),
            )
          }
          className="w-1/2 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Add Face Wash
        </button>
        <button
          onClick={() => dispatch(removeItem({ id: 3, title: 'Face wash' }))}
          className="ml-1 w-1/2 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Remove Face Wash
        </button>
      </div>

      <h1>Total: {total}</h1>
      <ul className="mb-4 flex w-1/3 flex-col">
        {cartItems.map((cartItem, index) => {
          return (
            <li key={index} className="flex border-2 border-gray-200 py-6">
              <div className="flex-1 py-6 px-4 sm:px-6">
                <h3>Item: </h3>
                <p>{cartItem['title']}</p>
              </div>
              <div className="flex-1 py-6 px-4 sm:px-6">
                <h3>Quantity:</h3>
                <p>{cartItem['count']}</p>
              </div>
              <div className="flex-1">
                <button onClick={() => dispatch(incrementItem(cartItem.id))}>
                  Increment
                </button>
                <button
                  onClick={() => dispatch(decrementItem(cartItem.id))}
                  disabled={cartItem.count === 0}
                >
                  Decrement
                </button>
                <button onClick={() => dispatch(removeItem(cartItem.id))}>
                  Remove Item
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
