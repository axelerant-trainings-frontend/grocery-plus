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
import Card from '../card/Card';

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
              addItem({
                id: 3,
                title: 'Face Wash',
                img: 'https://picsum.photos/id/237/200/300',
                count: 1,
                price: 10,
              }),
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
      <ul className="flex mb-4 flex-col pl-0">
        {cartItems.map((cartItem, index) => {
          return (
            <Card
              key={index}
              cardImage={cartItem.image}
              cardLabel={cartItem.title}
              variant="tertiaryBag"
              discountAmount={cartItem.discount}
              originalPrice={cartItem.price}
              finalPrice={cartItem.discountedPrice}
              cartIncrement={() => dispatch(incrementItem(cartItem.id))}
              cartDecrement={() => dispatch(decrementItem(cartItem.id))}
              count={cartItem.count}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Cart;
