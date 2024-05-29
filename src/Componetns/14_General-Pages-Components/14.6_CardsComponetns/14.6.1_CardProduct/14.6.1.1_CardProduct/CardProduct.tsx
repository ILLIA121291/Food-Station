import PizzaCardProduct from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import './CardProduct.scss';

import { FC } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import BasicCardProduct from '../14.6.3_BasicCardProduct/BasicCardProduct';
import { TAllProducts } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

interface IProps {
  data: TAllProducts | IPizza;
  langugeApp: typeof english;
}

const CardProduct: FC<IProps> = ({ data, langugeApp }) => {
  let displayCardProduct;

  switch (data.dishType) {
    case 'pizza':
      displayCardProduct = <PizzaCardProduct data={data} langugeApp={langugeApp} />;
      break;
    default:
      displayCardProduct = <BasicCardProduct data={data} langugeApp={langugeApp} />;
  }

  return <div>{displayCardProduct}</div>;
};

export default CardProduct;
