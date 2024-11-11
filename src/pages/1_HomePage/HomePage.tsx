import './HomePage.scss';
import { FC } from 'react';
import english, { ITextObj } from '../../language/english';
import classesGlobal from '../../css/globalCCS.module.css';

import SliderProduct from '../../Componetns/14_General-Pages-Components/14.7_SliderComponents/14.7.1_SliderProduct/SliderProduct';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../Componetns/13_App-Components/13.1_App/stateStore';
import IProduct from '../../Interfaces/IProduct';
import { DISH_TYPE_NAMES } from '../../variables/variables';
import ITextObject from '../../Interfaces/ITextObject';

// Interface -------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT ----------------------------------
const HomePage: FC<IProps> = ({ langugeApp }) => {
  // Получение всех продуктов из глобального состояния;
  const allProducts = useSelector<IStateStore, IProduct[]>(state => state.app.allAppProducts);
  const textMenu: ITextObject = langugeApp.textGeneral.menu;

  // RENDER COMPONENT -------------------------
  return (
    <div className={classesGlobal.page_body_border}>
      {DISH_TYPE_NAMES.map(dishType => {
        // Фильтрация требуемого продукта;
        const productFilter = allProducts.filter(product => product.dishType == dishType);
        // Рендеринг слайдера с отфельтрованным продуктом;
        return <SliderProduct title={textMenu[dishType]} products={productFilter} langugeApp={langugeApp} key={dishType} />;
      })}
    </div>
  );
};

export default HomePage;
