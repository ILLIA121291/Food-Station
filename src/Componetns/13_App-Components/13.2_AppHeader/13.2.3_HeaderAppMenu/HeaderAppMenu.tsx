import './HeaderAppMenu.scss';
import { FC } from 'react';

const HeaderAppMenu: FC = () => {
  return (
    <nav className="header-app__menu">
      <ul className="header-app__menu-list">
        <li className="header-app__menu-item">
          <a href="#">Home</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">About us</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Services</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">News</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderAppMenu;
