import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IOrderItem } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import { updateOrderList } from '../../../../15.2.1_CartPage/sliceCart';
import QuantityInput from '../../../../../../14_General-Pages-Components/14.5_FormsComponents/QuantityInput';

// Props Interface -----------------------------------

interface IProps {
  order: IOrderItem;
  orderList: IOrderItem[];
}

const QuantityOrderItem: FC<IProps> = ({ order, orderList }) => {
  const dispatch = useDispatch();

  // Update Quantity Item ----------------------------------------------
  const onUpdateQuantity = (num: 1 | -1) => {
    const newOrderList = orderList.map(value => {
      const name = value.name == order.name;
      const qty = value.quantity == order.quantity;
      const price = value.price == order.price;
      const priceExtra = value.priceExtra == order.priceExtra;

      if (name && qty && price && priceExtra) {
        let quantity = order.quantity;

        if (num == -1) {
          quantity - 1 < 1 ? (quantity = 1) : (quantity -= 1);
        } else {
          quantity += 1;
        }

        return {
          ...value,
          quantity,
        };
      } else {
        return value;
      }
    });

    dispatch(updateOrderList(newOrderList));
  };

  return <QuantityInput calFunction={onUpdateQuantity} displayNumber={order.quantity} />;
};

export default QuantityOrderItem;
