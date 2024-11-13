import './HeaderApp.scss';
import HeaderAppMenu from '../1.3_HeaderAppMenu/HeaderAppMenu';
import HeaderAppMobileButton from '../1.5_HeaderAppMobileButton/HeaderAppMobileButton';
import HeaderAppMobileLogo from '../1.6_HeaderAppMobileLogo/HeaderAppMobileLogo';
// import { FC, useState, MouseEvent } from 'react';
import { FC, useState } from 'react';
import HeaderAppCart from '../1.7_HeaderAppCart/HeaderAppCart';
import LogoDelivery from '../1.8_LogoDeilvery/13.2.8.1_LogoDelivery/LogoDelivery';
import PhoneCallMe from '../1.9_PhoneCallMe/PhoneCallMe';
import CurrencyLanguageLogin from '../1.10_CurrencyLanguageLogin/CurrencyLanguageLogin';
import LanguagePanel from '../../../components/Panels/LanguagePanel/LanguagePanel';
import CurrencyPanel from '../../../components/Panels/CurrencyPanel/CurrencyPanel';
import HeaderAppLogin from '../1.4_HeaderAppLogin/1.4.1_HeaderAppLogin/13.2.4.1.1_HeaderAppLogin/HeaderAppLogin';

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
