import { FC } from 'react';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import QuantityInput from '../../../../../../14_General-Pages-Components/14.5_FormsComponents/QuantityInput';

// Props Interface -----------------------------------

interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
}

const QuantityOrderItem: FC<IProps> = ({ updatedOrder, setUpdateOrder }) => {
  // Update Quantity Item ----------------------------------------------
  const onUpdateQuantityItem = (num: 1 | -1) => {
    let quantity = updatedOrder.quantity;

    if (num == -1) {
      quantity - 1 < 1 ? (quantity = 1) : (quantity -= 1);
    } else {
      quantity += 1;
    }

    setUpdateOrder(updatedOrder => {
      return {
        ...updatedOrder,
        quantity,
      };
    });
  };

  return <QuantityInput calFunction={onUpdateQuantityItem} displayNumber={updatedOrder.quantity} />;
};

export default QuantityOrderItem;
