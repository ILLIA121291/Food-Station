import { FC } from 'react';
import useDisplayPriceInCurrency from '../../../../../../14_General-Pages-Components/14.2_CurrencyPanel/useDisplayPriceInCurrency';

// Props Interface -------------------------------
interface IProps {
  currency: string;
  price: number;
}

const CostOrderItem: FC<IProps> = ({ currency, price }) => {
  return <div className="f_jc-ac wt110 fw600 editor-order__item-cost">{useDisplayPriceInCurrency(currency, price)}</div>;
};

export default CostOrderItem;
