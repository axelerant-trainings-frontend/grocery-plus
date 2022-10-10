import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrder } from '../../redux/features/order';

const Orders = () => {
  const orderCount = useSelector(selectOrder);
  return <div>Orders Page {orderCount}</div>;
};

export default Orders;
