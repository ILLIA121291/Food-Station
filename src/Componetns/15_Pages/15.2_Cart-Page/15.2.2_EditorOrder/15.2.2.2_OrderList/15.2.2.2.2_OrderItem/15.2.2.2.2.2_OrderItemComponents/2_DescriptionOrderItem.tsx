import { FC } from 'react';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderItem } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import useDisplayPriceInCurrency from '../../../../../../14_General-Pages-Components/14.2_CurrencyPanel/useDisplayPriceInCurrency';

interface IProps {
  order: IOrderItem
  currency: string
  langugeApp: typeof english
}

const DescriptionOrderItem: FC<IProps> = ({ order, currency }) => {
  return (
    <div className='bd wt250'>
      <h6 className="tx-tr-cap fw600 fs18 mb5 editor-order__item-titel">{order.name}</h6>
      <p className="">Price: {useDisplayPriceInCurrency(currency, order.price)}</p>
      <p>Weight: {order.parameters.weight} g.</p>
      <p></p>
    </div>
  );
};

export default DescriptionOrderItem;
