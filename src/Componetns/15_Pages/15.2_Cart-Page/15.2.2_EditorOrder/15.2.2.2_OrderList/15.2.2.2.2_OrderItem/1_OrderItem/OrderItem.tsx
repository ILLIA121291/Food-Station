import './OrderItem.scss';
import { FC, useState, useEffect } from 'react';

import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import ImageOrderItem from '../2_ImageOrderItem/2.1_ImageOrderItem/ImageOrderItem';
import DescriptionOrderItem from '../3_DescriptionOrderItem/3.1_DescriptionOrderItem';
import CostOrderItem from '../5_CostOrderItem/CostOrderItem';
import RemoveOrderItem from '../6_RemoveOrderItem/RemoveOrderItem';
import QuantityOrderItem from '../4_QuantityOrderItem/QuantityOrderItem';
import { useDispatch } from 'react-redux';
import { updateOrderList } from '../../../../15.2.1_CartPage/sliceCart';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';

// Props Interface ------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  order: IOrder;
  orderList: IOrder[];
  currency: string;
}

// COMPONENT -----------------------------------------------------
const OrderItem: FC<IProps> = ({ order, orderList, currency, langugeApp }) => {
  const dispatch = useDispatch();
  const [updatedOrder, setUpdateOrder] = useState<IOrder>(order);

  // Updated Order List After Changing --------------------------------------------
  const updateOrderListAfterChangingInCart = () => {
    const newOrderList = orderList.map(value => {
      if (value.id == updatedOrder.id) {
        return updatedOrder;
      } else {
        return value;
      }
    });
    dispatch(updateOrderList(newOrderList));
  };

  useEffect(() => {
    updateOrderListAfterChangingInCart();
  }, [updatedOrder]);

  return (
    <li className="f_jc_sb bd__b1-or p10 mt15 pos_rel editor-order__item">
      <ImageOrderItem updatedOrder={updatedOrder} />
      <DescriptionOrderItem updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} currency={currency} langugeApp={langugeApp} />
      <QuantityOrderItem updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} />
      <CostOrderItem currency={currency} price={(updatedOrder.price + updatedOrder.priceExtra) * updatedOrder.quantity} />
      <RemoveOrderItem name={updatedOrder.name} />
    </li>
  );
};

export default OrderItem;
