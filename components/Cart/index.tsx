import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCart,
  addToCart,
  removeFromCart,
} from '../../redux/features/cart';

const Cart = () => {
  const cartItemCount = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="mb-3 text-xl">Our Cart</h1>
      <div className="w-1/3 flex mb-4">
        <button
          onClick={() =>
            dispatch(addToCart({ id: 3, title: 'Face Wash', count: 1 }))
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2"
        >
          Add Face Wash
        </button>
        <button
          onClick={() =>
            dispatch(removeFromCart({ id: 3, title: 'Face wash' }))
          }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2 ml-1"
        >
          Remove Face Wash
        </button>
      </div>

      <ul className="w-1/3 flex mb-4 flex-col">
        {cartItemCount.map((cartItem, index) => {
          return (
            <li key={index} className="flex py-6 border-2 border-gray-200">
              <div className="flex-1 py-6 px-4 sm:px-6">
                <h3>Item: </h3>
                <p>{cartItem['title']}</p>
              </div>
              <div className="flex-1 py-6 px-4 sm:px-6">
                <h3>Quantity:</h3>
                <p>{cartItem['count']}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
