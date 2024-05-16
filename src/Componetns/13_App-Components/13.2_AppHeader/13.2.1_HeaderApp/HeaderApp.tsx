import './HeaderApp.scss';
import HeaderAppLogo from '../13.2.2_HeaderAppLogo/HeaderAppLogo';
import HeaderAppMenu from '../13.2.3_HeaderAppMenu/HeaderAppMenu';
import HeaderAppLogin from '../13.2.4_HeaderAppLogin/HeaderAppLogin';
import HeaderAppMobileButton from '../13.2.5_HeaderAppMobileButton/HeaderAppMobileButton';
import HeaderAppMobileLogo from '../13.2.6_HeaderAppMobileLogo/HeaderAppMobileLogo';
import { FC, useState, MouseEvent } from 'react';

const HeaderApp: FC = () => {
  const [mobileMenuState, setMobileMenuState] = useState<boolean>(false);

  let noDisplay = mobileMenuState ? '' : ' no_display';

  return (
    <header className="header-app__container">
      <HeaderAppMobileLogo />
      <HeaderAppMobileButton mobileMenuState={mobileMenuState} setMobileMenuState={setMobileMenuState} />
      <div
        className={`gbs__border header-app${noDisplay}`}
        onClick={(e: MouseEvent<HTMLDivElement>): void => {
          if (window.innerWidth <= 800 && !e.target.classList.contains('header-app')) {
            console.log('I am work');
            setMobileMenuState(false);
          }
        }}
      >
        <HeaderAppLogo />
        <HeaderAppMenu />
        <HeaderAppLogin />
      </div>
    </header>
  );
};

export default HeaderApp;
