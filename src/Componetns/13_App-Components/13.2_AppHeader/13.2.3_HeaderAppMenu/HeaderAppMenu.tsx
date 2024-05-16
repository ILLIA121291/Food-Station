import './HeaderAppMenu.scss';
import { FC } from 'react';

const HeaderAppMenu: FC = () => {
  return (
    <nav className="header-app__menu">
      <ul className="header-app__menu-list">
        <li className="header-app__menu-item">
          <a href="#">Pizza</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Rolls</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Sushi</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Soup</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Snacks</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Sauces</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Drinks</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Dessert</a>
        </li>
        <li className="header-app__menu-item">
          <a href="#">Sets</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderAppMenu;
