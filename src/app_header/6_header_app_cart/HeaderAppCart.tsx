import './HeaderAppCart.scss';

import { FC } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { IStateStore } from '../../app/stateStore';
import IOrder from '../../interfaces/IOrder';
import displayPriceInCurrency from '../../panels/CurrencyPanel/displayPriceInCurrency';

const HeaderAppCart: FC = () => {
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);
  const orderList = useSelector<IStateStore, IOrder[]>(state => state.cart.orderList);

  // Cart Cost & Quantity -----------------
  let quantity: number = 0;
  let cost: number = 0;

  if (orderList.length == 0) {
    quantity = 0;
    cost = 0;
  } else {
    orderList.forEach(value => {
      quantity += value.quantity;
      cost += (value.price + value.priceExtra) * value.quantity;
    });
  }

  // RENDERING COMPONENT ---------------------------------------------------------
  return (
    <NavLink end to="/cart" className="wt150 f_ac pos_rel cart__container" onClick={() => window.scrollTo(0, 0)}>
      <span className="f_jc-ac wt25 ht25 bdr50 bkgr__ora fs16 wc cart__qty">{quantity}</span>
      <TiShoppingCart size={45} />
      <span className="fw600">{displayPriceInCurrency(currency, cost)}</span>
    </NavLink>
  );
};

export default HeaderAppCart;
