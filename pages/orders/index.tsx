import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../app/reduxStore/store'

const Orders = () => {
    const orderCount = useSelector((state: RootState) => state.orders.value)
  return (
    <div>Orders Page {orderCount}</div>
  )
}

export default Orders