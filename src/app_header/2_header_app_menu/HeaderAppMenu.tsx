import classes from './HeaderAppMenu.module.css';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { DISH_TYPE_NAMES } from '../../variables/variables';
import english from '../../language/english';
import ITextObject from '../../interfaces/ITextObject';

// Interface ----------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT ------------------------------------
const HeaderAppMenu: FC<IProps> = ({ langugeApp }) => {
  // Get Text
  const textMenu: ITextObject = langugeApp.textGeneral.menu;

  // RENDERING COMPONENT --------------------------------------------
  return (
    <nav className={classes.menu}>
      <ul className={classes.list}>
        {DISH_TYPE_NAMES.map(typeName => {
          return (
            <li className={classes.item} key={typeName}>
              <NavLink className={({ isActive }): string => `${classes.link} ${isActive ? classes.active : null}`} to={`/menu/${typeName}_list`}>
                {textMenu[typeName]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderAppMenu;
