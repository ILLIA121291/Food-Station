import './HeaderAppCart.scss';

import { FC } from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const HeaderAppCart: FC = () => {
  return (
    <button type="button" className="cart__container">
      <span className="gbs__flc cart__qty">99</span>
      <TiShoppingCart size={45} />
      <span className="cart__cost">0 000 USD</span>
    </button>
  );
};

export default HeaderAppCart;
