import './HeaderAppMenu.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const productListNamse = ['pizza', 'rolls', 'sushi', 'soup', 'snacks', 'sauces', 'drinks', 'dessert', 'sets'];

const HeaderAppMenu: FC = () => {
  return (
    <nav className="header-app__menu">
      <ul className="header-app__menu-list">
        {productListNamse.map(productName => {
          return (
            <li className="header-app__menu-item" key={productName}>
              <Link className="header-app__link"  to={`/${productName}`}>
                {productName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderAppMenu;
