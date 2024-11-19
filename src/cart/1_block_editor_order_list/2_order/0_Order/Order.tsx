import classes from './Order.module.css'
import { FC, useState, useEffect } from 'react';

import english from '../../../../language/english';
import ImageOrderItem from '../1_image_order/0_ImageOrder/ImageOrder';
import DescriptionOrderItem from '../2_description_order/0_DescriptionOrder/DescriptionOrder';
import CostOrderItem from '../4_cost_order/CostOrder';
import RemoveOrderItem from '../5_remove_order/RemoveOrder';
import QuantityOrderItem from '../3_quantity_order/QuantityOrder';
import { useDispatch } from 'react-redux';
import { updateOrderList } from '../../../0_CartPage/sliceCart';
import IOrder from '../../../../interfaces/IOrder';

// Props Interface ------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  order: IOrder;
  orderList: IOrder[];
  currency: string;
}

// COMPONENT -----------------------------------------------------
const Order: FC<IProps> = ({ order, orderList, currency, langugeApp }) => {
  const dispatch = useDispatch();
  const [updatedOrder, setUpdateOrder] = useState<IOrder>(order);

  // Updated Order List After Changing --------------------------------------------
  const updateOrderListAfterChangingInCart = () => {
    const newOrderList = orderList.map(value => {
      // Действия если id
      if (value.idOrderList == updatedOrder.idOrderList) {
        return updatedOrder;
      }

      return value;
    });
    dispatch(updateOrderList(newOrderList));
  };

  useEffect(() => {
    updateOrderListAfterChangingInCart();
  }, [updatedOrder]);

  return (
    <li className={classes.container}>
      <ImageOrderItem updatedOrder={updatedOrder} />
      <DescriptionOrderItem updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} currency={currency} langugeApp={langugeApp} />
      <QuantityOrderItem updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} />
      <CostOrderItem currency={currency} price={(updatedOrder.price + updatedOrder.priceExtra) * updatedOrder.quantity} />
      <RemoveOrderItem idOrderList={updatedOrder.idOrderList} />
    </li>
  );
};

export default Order;
