import './HeaderAppLogo.scss';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderAppLogo: FC = () => {
  return (
    <NavLink end to="/" className="header-app__logo">
      <span className="header-app__food">Food</span>
      <span className="header-app__station">Station</span>
    </NavLink>
  );
};

export default HeaderAppLogo;
