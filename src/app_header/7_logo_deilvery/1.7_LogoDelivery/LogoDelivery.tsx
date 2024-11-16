import HeaderAppLogo from '../../1_header_app_Logo/HeaderAppLogo';
import DeliveryLocation from '../1.7.1_delivery_location/DeliveryLocation';
import './LogoDelivery.scss';

import { FC } from 'react';

const LogoDelivery: FC = () => {
  return (
    <div className="f logo-delivery">
      <HeaderAppLogo />
      <div className="delivery__container">
        <DeliveryLocation />
        <a className="delivery__link" href="#">
          Беспланая доставка
        </a>
        <p className="delivery__time">c 08:00 до 05:00</p>
      </div>
    </div>
  );
};

export default LogoDelivery;
