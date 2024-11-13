import { FC } from 'react';
import QuantityInput from '../../../forms/FormsComponents/QuantityInput';
import english from '../../../../language/english';
import useDisplayPriceInCurrency from '../../../panels/CurrencyPanel/useDisplayPriceInCurrency';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../../app/stateStore';
import IOrder from '../../../../Interfaces/IOrder';

// Interface --------------------------------------------------------
interface IProps {
  order: IOrder;
  setOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  langugeApp: typeof english;
  className?: string;
}

const QuantityPanel: FC<IProps> = ({ order, setOrder, langugeApp, className = 0 }) => {
  const text = langugeApp.textCardProduct.textGeneral;
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);

  const totalPrice = (order.price + order.priceExtra) * order.quantity;
  const totalWeight =
    order.parameters.weight != 0 ? (
      <p>
        {order.parameters.weight * order.quantity} {text.grams}
      </p>
    ) : null;

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
    <div className={`f_jc_sb us-se wt270 ${className}`}>
      <QuantityInput calFunction={onSetQuantity} displayNumber={order.quantity} />

      <div className=" wt150 tx-al-c">
        {totalWeight}
        <p className="mt10 fs20 fw900">{useDisplayPriceInCurrency(currency, totalPrice)}</p>
      </div>
    </div>
  );
};

export default QuantityPanel;
