import classes from './CostOrder.module.css';
import { FC } from 'react';
import displayPriceInCurrency from '../../../../panels/CurrencyPanel/displayPriceInCurrency';

// Props Interface -------------------------------
interface IProps {
  currency: string;
  price: number;
}

const CostOrder: FC<IProps> = ({ currency, price }) => {
  return <div className={classes.container}>{displayPriceInCurrency(currency, price)}</div>;
};

export default CostOrder;
