import './HeaderApp.scss';
import HeaderAppMenu from '../2_header_app_menu/HeaderAppMenu';
import HeaderAppMobileButton from '../4_header_app_mobile_button/HeaderAppMobileButton';
import HeaderAppMobileLogo from '../5_header_app_mobile_logo/HeaderAppMobileLogo';
// import { FC, useState, MouseEvent } from 'react';
import { FC, useState } from 'react';
import HeaderAppCart from '../6_header_app_cart/HeaderAppCart';
import LogoDelivery from '../7_logo_deilvery/1.7_LogoDelivery/LogoDelivery';
import PhoneCallMe from '../8_phone_call_Me/PhoneCallMe';
import CurrencyLanguageLogin from '../9_currency_language_login/CurrencyLanguageLogin';
import LanguagePanel from '../../panels/LanguagePanel/LanguagePanel';
import CurrencyPanel from '../../panels/currencypanel/CurrencyPanel';
import HeaderAppLogin from '../3_header_app_login/0_HeaderAppLogin/HeaderAppLogin';

import english from '../../../language/english';

import classesGlobal from '../../../css/globalCCS.module.css';

interface IProps {
  langugeApp: typeof english;
  setLangugeApp: React.Dispatch<React.SetStateAction<typeof english>>;
  isUserAuthorized: boolean;
}

const HeaderApp: FC<IProps> = ({ langugeApp, setLangugeApp, isUserAuthorized }) => {
  const [mobileMenuState, setMobileMenuState] = useState<boolean>(false);

  if (mobileMenuState) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  let noDisplay = mobileMenuState ? '' : ' no_display';

  return (
    <>
      <header className="header-app__container">
        <HeaderAppMobileLogo />
        <HeaderAppMobileButton mobileMenuState={mobileMenuState} setMobileMenuState={setMobileMenuState} />
        <div
          className={`${classesGlobal.page_body_border} header-app${noDisplay}`}
          // onClick={(e: MouseEvent<HTMLDivElement>): void => {
          //   if (window.innerWidth <= 800 && !(e.target as HTMLDivElement).classList.contains('header-app')) {
          //     setMobileMenuState(false);
          //   }
          // }}
        >
          <div className="header-app__control-panel">
            <LogoDelivery />
            <PhoneCallMe />
            <CurrencyLanguageLogin langugeApp={langugeApp} setLangugeApp={setLangugeApp} isUserAuthorized={isUserAuthorized} />
          </div>
          <div className="header-app__menu-mobile">
            <HeaderAppMobileLogo />
            <PhoneCallMe />
            <HeaderAppCart />
            <HeaderAppMenu langugeApp={langugeApp} />
            <LanguagePanel langugeApp={langugeApp} setLangugeApp={setLangugeApp} />
            <CurrencyPanel langugeApp={langugeApp} />
            <HeaderAppLogin langugeApp={langugeApp} isUserAuthorized={isUserAuthorized} />
          </div>
        </div>
      </header>

      <div className={`${classesGlobal.page_body_border} header-app__menue-panel ${noDisplay}`}>
        <HeaderAppMenu langugeApp={langugeApp} />
        <HeaderAppCart />
      </div>
    </>
  );
};

export default HeaderApp;
