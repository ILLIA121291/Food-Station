import { FC } from 'react';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import { IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import QuantityInput from '../../../14.5_FormsComponents/QuantityInput';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import useDisplayPriceInCurrency from '../../../14.2_CurrencyPanel/useDisplayPriceInCurrency';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../../13_App-Components/13.1_App/stateStore';
import { IOrderBasic } from '../14.6.3_BasicCardProduct/BasicCardProduct';
import { IRoll } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.2_Rolls/dataRolls';

interface IProps {
  data: IPizza | IRoll;
  order: IOrderPizza | IOrderBasic;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>> | React.Dispatch<React.SetStateAction<IOrderBasic>>;
  langugeApp: typeof english;
}

type TOrder = IOrderPizza | IOrderBasic;

const QuantityCostWeightPanel: FC<IProps> = ({ order, setOrder, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);

  let culTotalPrice;

  if (order.parameters.dishType == 'pizza') {
    culTotalPrice = (order.parameters.price + (order as IOrderPizza).parameters.priceExtraIngredients) * order.total.quantity;
  } else {
    culTotalPrice = order.parameters.price * order.total.quantity;
  }

  const onSetQuantity = (num: number): void => {
    let quantity = order.total.quantity;

    if (num < 1) {
      quantity - 1 < 1 ? (quantity = 1) : (quantity -= 1);
    } else {
      quantity += 1;
    }

    setOrder((order: TOrder) => {
      return {
        ...order,
        total: {
          ...order.total,
          quantity,
          weight: order.parameters.weight * quantity,
        },
      };
    });
  };

  return (
    <div className="mt15 f_jc_sb us-se wt270">
      <QuantityInput calFunction={onSetQuantity} displayNumber={order.total.quantity} />

      <div className=" wt150 tx-al-c">
        <p className="">
          {order.parameters.weight * order.total.quantity} {text.grams}
        </p>
        <p className="mt10 fs20 fw900">{useDisplayPriceInCurrency(currency, culTotalPrice)}</p>
      </div>
    </div>
  );
};

// PanelQuantity ----------------------------------------------------------

export default QuantityCostWeightPanel;
