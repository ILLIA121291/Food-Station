import { FC, useEffect, useState } from 'react';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import { IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import QuantityInput from '../../../14.5_FormsComponents/QuantityInput';

interface IProps {
  data: IPizza;
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
}

const QuantityCostWeightPanel: FC<IProps> = ({ order, setOrder }) => {
  const [qty, setQty] = useState<number>(1);

  useEffect(() => {
    setOrder(order => {
      return {
        ...order,
        total: {
          ...order.total,
          quantity: qty,
          weight: order.parameters.weight * qty,
        },

        cost: {
          ...order.cost,
          pizza: Number((order.parameters.price * qty).toFixed(2)),
        },
      };
    });
  }, [qty]);

  return (
    <div className=" mt15">
      <QuantityInput qty={qty} setQty={setQty} />
      ----------------------------------------
      <p>Price: {order.parameters.price}</p>
      <p>Weight: {order.parameters.weight}</p>
      ----------------------------------------
      <p>CostPizza: {order.cost.pizza}</p>
      <p>CostExtraingridiens: {order.cost.extraIngredients}</p>
      <p>WeightPizza: {order.total.weight}</p>
    </div>
  );
};

// PanelQuantity ----------------------------------------------------------

export default QuantityCostWeightPanel;
