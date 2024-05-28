import { FC, } from 'react';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import { IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import QuantityInput from '../../../14.5_FormsComponents/QuantityInput';
import toFixedNumber from '../../../../10_Utilities/toFixedNumber';

interface IProps {
  data: IPizza;
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
}

const QuantityCostWeightPanel: FC<IProps> = ({ order, setOrder }) => {
  const onSetQuantity = (num: number): void => {
    let quantity = order.total.quantity;

    if (num < 1) {
      quantity - 1 < 1 ? (quantity = 1) : (quantity -= 1);
    } else {
      quantity += 1;
    }

    setOrder(order => {
      return {
        ...order,
        total: {
          ...order.total,
          quantity,
        },
      };
    });
  };

  return (
    <div className="mt15 f_jc_sb">
      <QuantityInput calFunction={onSetQuantity} displayNumber={order.total.quantity} />

      <div className=" wt150 tx-al-c">
        <p className="">{order.parameters.weight * order.total.quantity} g.</p>
        <p className="mt10 fs20 fw900">{toFixedNumber((order.parameters.price + order.parameters.priceExtraIngredients) * order.total.quantity)} USD</p>
      </div>
    </div>
  );
};

// PanelQuantity ----------------------------------------------------------

export default QuantityCostWeightPanel;
