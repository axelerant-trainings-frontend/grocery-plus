import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../app/reduxStore/store'

const Cart = () => {
    const cartItemCount = useSelector((state: RootState) => state.cart.value)
  return (
    <div>Cart Page {cartItemCount}</div>
  )
}

export default Cart