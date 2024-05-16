import './HeaderAppLogo.scss';
import { FC } from 'react';

const HeaderAppLogo: FC = () => {
  return (
    <a className="header-app__logo" href="#">
      <span className="header-app__food">Food</span>
      <span className="header-app__station">Station</span>
    </a>
  );
};

export default HeaderAppLogo;
