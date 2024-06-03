import './OrderItem.scss';
import { FC, useState, useEffect } from 'react';

import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderItem } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import ImageOrderItem from '../15.2.2.2.2.2_OrderItemComponents/1_ImageOrderItem';
import DescriptionOrderItem from '../15.2.2.2.2.2_OrderItemComponents/2_DescriptionOrderItem';
import CostOrderItem from '../15.2.2.2.2.2_OrderItemComponents/4_CostOrderItem';
import RemoveOrderItem from '../15.2.2.2.2.2_OrderItemComponents/5_RemoveOrderItem';
import QuantityOrderItem from '../15.2.2.2.2.2_OrderItemComponents/3_QuantityOrderItem';
import { useDispatch } from 'react-redux';
import { updateOrderList } from '../../../../15.2.1_CartPage/sliceCart';

// Props Interface ------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  order: IOrderItem;
  orderList: IOrderItem[];
  currency: string;
}

const OrderItem: FC<IProps> = ({ order, orderList, currency, langugeApp }) => {
  const dispatch = useDispatch();
  const [updatedOrder, setUpdateOrder] = useState<IOrderItem>(order);

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
    <li className="f_jc_sb bd__b1-or p5 mt15 pos_rel editor-order__item">
      <ImageOrderItem src={updatedOrder.data.img} alt={updatedOrder.name} />
      <DescriptionOrderItem updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} currency={currency} langugeApp={langugeApp} />
      <QuantityOrderItem updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder}  />
      <CostOrderItem currency={currency} price={(updatedOrder.price + updatedOrder.priceExtra) * updatedOrder.quantity} />
      <RemoveOrderItem name={updatedOrder.name} />
    </li>
  );
};

export default OrderItem;
