import { FC } from 'react';
import QuantityInput from '../../../../forms/FormsComponents/QuantityInput';
import IOrder from '../../../../interfaces/IOrder';

// Props Interface -----------------------------------
interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
}

// COMPONENT --------------------------------------------
const QuantityOrder: FC<IProps> = ({ updatedOrder, setUpdateOrder }) => {

  
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

  // RENDERING COMPONENT ---------------------------------------------
  return <QuantityInput calFunction={onUpdateQuantityItem} displayNumber={updatedOrder.quantity} />;
};

export default QuantityOrder;
