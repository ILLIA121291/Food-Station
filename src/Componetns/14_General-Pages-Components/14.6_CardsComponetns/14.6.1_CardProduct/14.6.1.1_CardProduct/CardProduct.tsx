import PizzaCardProduct from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import './CardProduct.scss';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

import { FC } from 'react';

interface IProps {
  data: IPizza;
}

const CardProduct: FC<IProps> = ({ data }) => {
  let displayCardProduct;

  switch (data.dishType) {
    default:
      displayCardProduct = <PizzaCardProduct data={data} />;
  }

  return <div>{displayCardProduct}</div>;
};

export default CardProduct;
