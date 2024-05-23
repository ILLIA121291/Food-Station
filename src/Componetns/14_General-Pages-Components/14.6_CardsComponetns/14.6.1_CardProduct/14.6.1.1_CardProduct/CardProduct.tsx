import PizzaCardProduct from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import './CardProduct.scss';

import { FC } from 'react';

interface IProps {
  productType: string;
}

const CardProduct: FC<IProps> = ({ productType }) => {
  let displayCardProduct;

  switch (productType) {
    default:
      displayCardProduct = <PizzaCardProduct />;
  }

  return <div>{displayCardProduct}</div>;
};

export default CardProduct;
