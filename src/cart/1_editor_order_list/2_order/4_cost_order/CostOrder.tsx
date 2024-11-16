import { FC } from 'react';
import displayPriceInCurrency from '../../../../components/panels/CurrencyPanel/displayPriceInCurrency';

// Props Interface -------------------------------
interface IProps {
  currency: string;
  price: number;
}

const CostOrder: FC<IProps> = ({ currency, price }) => {
  return <div className="f_jc-ac wt110 fw600 editor-order__item-cost">{displayPriceInCurrency(currency, price)}</div>;
};

export default CostOrder;
