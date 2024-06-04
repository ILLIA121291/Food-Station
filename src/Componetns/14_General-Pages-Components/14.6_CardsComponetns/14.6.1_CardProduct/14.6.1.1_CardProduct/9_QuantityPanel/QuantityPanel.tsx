import { FC } from 'react';
import QuantityInput from '../../../../14.5_FormsComponents/QuantityInput';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import useDisplayPriceInCurrency from '../../../../14.2_CurrencyPanel/useDisplayPriceInCurrency';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../../../13_App-Components/13.1_App/stateStore';
import { IOrder } from '../1_CardProduct/CardProduct';
import onSetQuantity from './onSetQuantity';

// Interface --------------------------------------------------------
interface IProps {
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  langugeApp: typeof english;
}

const QuantityPanel: FC<IProps> = ({ order, setOrder, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);

  const totalPrice = (order.price + order.priceExtra) * order.quantity;

  const onSetQuantity = (num: number): void => {
    let quantity = order.quantity;

    if (num == -1) {
      quantity - 1 < 1 ? (quantity = 1) : (quantity -= 1);
    } else {
      quantity += 1;
    }

    setOrder(order => {
      return {
        ...order,
        quantity,
      };
    });
  };

  return (
    <div className="f_jc_sb us-se wt270">
      <QuantityInput calFunction={onSetQuantity} displayNumber={order.quantity} />

      <div className=" wt150 tx-al-c">
        <p>
          {order.parameters.weight != 0 && `${order.parameters.weight * order.quantity} ${text.grams}`}
          {order.parameters.volume != 0 && `${order.parameters.volume * order.quantity} ${text.letters}`}
        </p>
        <p className="mt10 fs20 fw900">{useDisplayPriceInCurrency(currency, totalPrice)}</p>
      </div>
    </div>
  );
};

export default QuantityPanel;
