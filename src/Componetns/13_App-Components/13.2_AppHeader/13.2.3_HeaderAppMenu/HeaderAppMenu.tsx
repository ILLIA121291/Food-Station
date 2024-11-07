import './HeaderAppMenu.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const productListNamse = ['pizzas', 'rolls', 'sushi', 'soups', 'snacks', 'sauces', 'drinks', 'desserts', 'sets'];
const dishTypeNames = ['pizza', 'roll', 'sushi', 'soup', 'snack', 'sauce', 'drink', 'dessert', 'set'];

const HeaderAppMenu: FC = () => {
  return (
    <nav className="header-app__menu">
      <ul className="header-app__menu-list">
        {dishTypeNames.map(typeName => {
          return (
            <li className="header-app__menu-item" key={typeName}>
              <Link className="header-app__link" to={`/menu/${typeName}_list`}>
                {typeName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderAppMenu;
