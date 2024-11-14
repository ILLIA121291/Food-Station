import { FC } from 'react';
import english from '../../../../../language/english';
import useDisplayPriceInCurrency from '../../../../../components/panels/CurrencyPanel/useDisplayPriceInCurrency';
import IOrder from '../../../../../interfaces/IOrder';

// Props Interface --------------------------------

interface IProps {
  updatedOrder: IOrder;
  currency: string;
  langugeApp: typeof english;
  displayEditorPanel: boolean;
}

const TotalDescription: FC<IProps> = ({ updatedOrder, currency, displayEditorPanel }) => {
  const closeSize = updatedOrder.priceExtra == 0 ? '19px' : '57px';

  return (
    <li className="mt15">
      <ul
        className="tran__ht1000 over-hid"
        style={{
          height: displayEditorPanel ? '57px' : closeSize,
        }}
      >
        <li>Price: {useDisplayPriceInCurrency(currency, updatedOrder.price)}</li>
        <li>Extra: {useDisplayPriceInCurrency(currency, updatedOrder.priceExtra)}</li>
        <li>Total: {useDisplayPriceInCurrency(currency, updatedOrder.priceExtra + updatedOrder.price)}</li>
      </ul>
    </li>
  );
};

export default TotalDescription;
