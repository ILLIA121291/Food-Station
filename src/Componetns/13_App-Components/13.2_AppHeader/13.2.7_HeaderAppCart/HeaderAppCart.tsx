import './HeaderAppCart.scss';

import { FC } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

const HeaderAppCart: FC = () => {
  return (
    <NavLink end to="/cart" className="bd wt133 f_ac pos_rel cart__container">
      <span className="f_jc-ac wt25 ht25 bdr50 bkgr__ora fs16 wc cart__qty">99</span>
      <TiShoppingCart size={45} />
      <span className="fw600">0 000 USD</span>
    </NavLink>
  );
};

export default HeaderAppCart;
