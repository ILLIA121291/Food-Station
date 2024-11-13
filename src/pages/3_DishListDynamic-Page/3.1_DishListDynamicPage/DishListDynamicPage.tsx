import { FC } from 'react';
import classes from './DishListDynamicPage.module.css';
import classesGlobal from '../../../css/globalCCS.module.css';
import english from '../../../language/english';
import { useParams } from 'react-router-dom';

import CardProduct from '../../../components/cards/CardProduct/1_CardProduct/CardProduct';
import { useSelector } from 'react-redux';

import IProduct from '../../../Interfaces/IProduct';
import { IStateStore } from '../../../app/stateStore';

// Props Interfase ----------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -------------------------------
const DishListDynamicPage: FC<IProps> = ({ langugeApp }) => {
  // Получение названия типа болюда из URL для фильтрации;
  const { dishListName } = useParams();

  // Получение всех продуктов из глобального состояния;
  const allProducts = useSelector<IStateStore, IProduct[]>(state => state.app.allAppProducts);

  // Прокрутка страницы на самый вер при рендеренге;
  document.documentElement.scrollTop = 0;

  // RENDERING COMPONENT -------------------------------------------
  return (
    <div className={`${classesGlobal.page_body_border} ${classes.body}`}>
      {allProducts
        // Фильтрация и получение массива только с требуемыми продуктами;
        .filter(product => product.dishType == dishListName?.replace('_list', ''))
        // Рендеринг массива продуктов на странице;
        .map(product => {
          return <CardProduct data={product} key={product.name} langugeApp={langugeApp} />;
        })}
    </div>
  );
};

export default DishListDynamicPage;
