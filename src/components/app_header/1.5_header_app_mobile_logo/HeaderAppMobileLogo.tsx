import HeaderAppLogo from '../1_header_app_Logo/HeaderAppLogo';
import './HeaderAppMobileLogo.scss';
import { FC } from 'react';

const HeaderAppMobileLogo: FC = () => {
  return (
    <div className="header-app__mobile-logo">
      <HeaderAppLogo />
    </div>
  );
};

export default HeaderAppMobileLogo;
