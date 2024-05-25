import { FC, useState } from 'react';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import { IOrderdPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import QuantityInput from '../../../14.5_FormsComponents/QuantityInput';

interface IProps {
  dataPizza: IPizza;
  orderdPizza: IOrderdPizza;
  setOrderdPizza: React.Dispatch<React.SetStateAction<IOrderdPizza>>;
}

const QuantityCostWeightPanel: FC<IProps> = ({ dataPizza, orderdPizza, setOrderdPizza }) => {
  console.log(orderdPizza);
  return (
    <div className=" mt15">
      <PanelQuantity orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} />
    </div>
  );
};

// PanelQuantity ----------------------------------------------------------

interface IPanelQuantity {
  orderdPizza: IOrderdPizza;
  setOrderdPizza: React.Dispatch<React.SetStateAction<IOrderdPizza>>;
}

const PanelQuantity: FC<IPanelQuantity> = () => {
  const [qty, setQty] = useState<number>(1);

  return (
    <div>
      <QuantityInput qty={qty} setQty={setQty} />
    </div>
  );
};

export default QuantityCostWeightPanel;
