import { FC } from 'react';
import './3.4_TotalList.scss'
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import useDisplayPriceInCurrency from '../../../../../../14_General-Pages-Components/14.2_CurrencyPanel/useDisplayPriceInCurrency';
import IOrder from '../../../../../../../Interfaces/IOrder';

// Props Interface --------------------------------

interface IProps {
  updatedOrder: IOrder;
  currency: string;
  langugeApp: typeof english;
  displayEditorPanel: boolean;
}

const TotalList: FC<IProps> = ({ updatedOrder, currency, displayEditorPanel }) => {
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

export default TotalList;
