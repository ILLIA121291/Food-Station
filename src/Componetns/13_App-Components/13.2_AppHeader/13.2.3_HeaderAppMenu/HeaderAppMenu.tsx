import './HeaderAppMenu.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { DISH_TYPE_NAMES } from '../../../../variables/variables';
import english from '../../../../language/english';
import ITextObject from '../../../../Interfaces/ITextObject';

// Interface ----------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT ------------------------------------
const HeaderAppMenu: FC<IProps> = ({ langugeApp }) => {
  const textMenu: ITextObject = langugeApp.textGeneral.menu;

  return (
    <nav className="header-app__menu">
      <ul className="header-app__menu-list">
        {DISH_TYPE_NAMES.map(typeName => {
          return (
            <li className="header-app__menu-item" key={typeName}>
              <Link className="header-app__link" to={`/menu/${typeName}_list`}>
                {textMenu[typeName]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderAppMenu;
