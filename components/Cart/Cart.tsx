import { useState, useEffect } from 'react';
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
import Button from '../button/Button';
import InputField from '../inputField/InputField';
import Time from '../time/Time';
import Location from '../Location/Location';
import Heading from '../heading/Heading';
import Layout from '../layout/Layout';
import { ArrowForwardIcon } from '../iconLibrary';
const Cart = () => {
  const { items: cartItems, amount, total } = useSelector(selectCart);
  const dispatch = useDispatch();
  const [deliveryCharge, setDeliveryCharge] = useState(100);
  useEffect(() => {
    dispatch(calculateCartItems());
  }, [cartItems, dispatch]);
  return (
    <Layout hasNavbar={true} pageTitle="My Bag" link="/cart">
      <Heading
        title="Products"
        extraClasses="mt-25 ml-16"
        variant="small"
        size={3}
      />
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
      <Button
        variant="tertiary"
        text="Add More Product"
        extraClasses="w-343 mt-25 mx-auto"
        textClasses='!text-green-secondary'
      />
      <Heading
        title="Expected Date & TIme"
        extraClasses="mt-25 ml-16 mb-20"
        variant="small"
        size={3}
      />
      <div className="flex justify-center">
        <InputField variant="date" />
      </div>
      <div className="mx-auto mt-19 flex w-343 flex-wrap">
        <div className="w-1/3 text-left">
          <Time start="8 AM" end="11 AM" variant="inactive" />
        </div>
        <div className="w-1/3 text-center">
          <Time start="11 AM" end="12 PM" variant="active" />
        </div>
        <div className="w-1/3 text-right">
          <Time start="11 AM" end="12 PM" variant="inactive" />
        </div>
        <div className="w-1/3 pt-7 text-left">
          <Time start="11 AM" end="12 PM" variant="inactive" />
        </div>
        <div className="w-1/3 pt-7 text-center">
          <Time start="11 AM" end="12 PM" variant="inactive" />
        </div>
        <div className="w-1/3 pt-7 text-right">
          <Time start="11 AM" end="12 PM" variant="inactive" />
        </div>
      </div>
      <div className="mx-auto flex w-343 justify-between mt-35">
        <Heading
          title="Delivery Location"
          extraClasses="mt-25 ml-0 text-charcoal"
          variant="small"
          size={3}
        />
        <Heading
          title="Change"
          extraClasses="mt-25 ml-0 text-green-secondary"
          variant="small"
          size={3}
        />
      </div>
      <Location
        variant="secondary"
        address="Floor 4, Wakil Tower, Ta 131 Gulshan Badda Link Road"
      />
      <div className="cart-amount mt-48 mb-35">
        <div className="mx-auto flex w-343 justify-between">
          <Heading
            title="Subtotal"
            extraClasses="ml-0 text-charcoal mt-0"
            variant="small"
            size={3}
          />
          <Heading
            title={total}
            extraClasses="ml-0 text-charcoal"
            variant="small"
            size={3}
          />
        </div>
        <div className="mx-auto flex w-343 justify-between">
          <Heading
            title="Delivery Charge"
            extraClasses="ml-0 text-charcoal mt-0"
            variant="small"
            size={3}
          />
          <Heading
            title={deliveryCharge}
            extraClasses="ml-0 text-charcoal"
            variant="small"
            size={3}
          />
        </div>
        <div className="mx-auto flex w-343 justify-between">
          <Heading
            title="Total"
            extraClasses="ml-0 text-charcoal mt-0 font-medium"
            variant="small-medium"
            size={3}
          />
          <Heading
            title={total + deliveryCharge}
            extraClasses="ml-0 text-charcoal font-medium"
            variant="small-medium"
            size={3}
          />
        </div>
      </div>
      <Heading
        title="Payment Method"
        extraClasses="ml-16 mb-20"
        variant="small"
        size={3}
      />
      <div className="mx-auto w-343">
        <Location
          variant="tertiary"
          address="Tap Here to select your Payment Method"
        />
      </div>
      <Button
        variant="primary-dark"
        text="Place Order"
        iconPosition="right"
        icon={ArrowForwardIcon}
        extraClasses="mx-auto w-343 mt-[30px] mb-25"
      />
    </Layout>
  );
};

export default Cart;
