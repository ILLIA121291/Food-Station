import './HomePage.scss';
import { FC } from 'react';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import SliderProduct from '../../../14_General-Pages-Components/14.7_SliderComponents/14.7.1_SliderProduct/SliderProduct';
import { IProduct } from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { useSelector } from 'react-redux';
import { IStateStore } from '../../../13_App-Components/13.1_App/stateStore';

// Interface -------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT ----------------------------------
const HomePage: FC<IProps> = ({ langugeApp }) => {
  // Получение всех продуктов из глобального состояния;
  const allProducts = useSelector<IStateStore, IProduct[]>(state => state.app.products);

  const queueDisType = ['pizza', 'roll', 'sushi', 'snack', 'soup', 'sauce', 'drink', 'dessert', 'set'];

  // RENDER COMPONENT -------------------------
  return (
    <div className="gbs__border">
      {queueDisType.map(dishType => {
        // Фильтрация требуемого продукта;
        const productFilter = allProducts.filter(product => product.dishType == dishType);
        // Рендеринг слайдера с отфельтрованным продуктом;
        return <SliderProduct titel={dishType} products={productFilter} langugeApp={langugeApp} key={dishType} />;
      })}
    </div>
  );
};

export default HomePage;
