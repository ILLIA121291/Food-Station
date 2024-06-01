import './HeaderAppCart.scss';

import { FC } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import toFixedNumber from '../../../10_Utilities/toFixedNumber';

import { useSelector } from 'react-redux';
import { IStateStore } from '../../13.1_App/stateStore';
import { IOrderItem } from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';

const HeaderAppCart: FC = () => {
  const cartState = useSelector<IStateStore, IOrderItem[]>(state => state.cart.orderList);

  console.log(cartState);

  let quantity: number = 0;
  let cost: number = 0;

  if (cartState.length == 0) {
    quantity = 0;
    cost = 0;
  } else {
    cartState.forEach(value => {
      quantity += value.quantity;
      cost += value.price;
    });
  }

  return (
    <NavLink end to="/cart" className="wt133 f_ac pos_rel cart__container">
      <span className="f_jc-ac wt25 ht25 bdr50 bkgr__ora fs16 wc cart__qty">{quantity}</span>
      <TiShoppingCart size={45} />
      <span className="fw600">{cost}</span>
    </NavLink>
  );
};

export default HeaderAppCart;
