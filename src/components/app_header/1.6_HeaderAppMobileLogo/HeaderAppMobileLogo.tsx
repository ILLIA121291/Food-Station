import HeaderAppLogo from '../1.2_HeaderAppLogo/HeaderAppLogo';
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
