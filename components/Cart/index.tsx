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
