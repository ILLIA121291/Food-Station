import { FC } from 'react';
import classes from './DishListDynamicPage.module.css';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { useParams } from 'react-router-dom';

import CardProduct from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../13_App-Components/13.1_App/stateStore';

import IProduct from '../../../../Interfaces/IProduct';

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

  // RENDERING COMPONENT -------------------------------------------
  return (
    <div className={classes.div}>
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
