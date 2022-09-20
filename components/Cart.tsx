import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, add, remove } from "../redux/reduxSlices/cartSlice";
const Cart = () => {
  const cartItemCount = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <div>
      Cart Page
      <button onClick={() => dispatch(add())}>+</button>
      {cartItemCount}
      <button onClick={() => dispatch(remove())}>-</button>
    </div>
  );
};

export default Cart;
