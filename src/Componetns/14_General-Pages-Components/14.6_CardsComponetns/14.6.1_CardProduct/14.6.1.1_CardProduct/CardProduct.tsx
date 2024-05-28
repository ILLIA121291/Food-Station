import PizzaCardProduct from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import './CardProduct.scss';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

import { FC } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

interface IProps {
  data: IPizza;
  langugeApp: typeof english;
}

const CardProduct: FC<IProps> = ({ data, langugeApp }) => {
  let displayCardProduct;

  switch (data.dishType) {
    default:
      displayCardProduct = <PizzaCardProduct data={data} langugeApp={langugeApp} />;
  }

  return <div>{displayCardProduct}</div>;
};

export default CardProduct;
