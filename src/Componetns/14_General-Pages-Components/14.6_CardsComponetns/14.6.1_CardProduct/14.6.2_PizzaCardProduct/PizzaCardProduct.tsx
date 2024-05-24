import ImagePanel from '../14.6.1.0_GeneralComponentsCardProduct/1_ImagePanel';
import './PizzaCardProduct.scss';

import { FC, useState } from 'react';

import dataPizza from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import TitlePanel from '../14.6.1.0_GeneralComponentsCardProduct/2_TitlePanel';
import IngredientsPanel from '../14.6.1.0_GeneralComponentsCardProduct/3_IngredientsPanel';
import SizePanel from '../14.6.1.0_GeneralComponentsCardProduct/4_SizePanel';
import QuantityCostWeightPanel from '../14.6.1.0_GeneralComponentsCardProduct/5_QuantityCostWeightPanel';
import BtnAddToCart from '../14.6.1.0_GeneralComponentsCardProduct/6_BtnAddToCart';

export interface IExtraIngredient {
  name: string;
  price: number | string;
  quantity: number;
}

export interface IOrderdPizza {
  name: string;
  size: number;
  extraIngredients: IExtraIngredient[];
  costExtraIngredients: number;
}

const PizzaCardProduct: FC = () => {
  const pizza = dataPizza[0];

  const inisialStatePizza = {
    name: pizza.name,
    size: 0,
    costExtraIngredients: 0,
    extraIngredients: [],
  };

  const [orderdPizza, setOrderdPizza] = useState<IOrderdPizza>(inisialStatePizza);

  return (
    <div className="wt310 pt30">
      <ImagePanel image={pizza.img} alt={pizza.name} />
      <TitlePanel titel={pizza.name} />
      <IngredientsPanel orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} />
      {/* <SizePanel/>
      <QuantityCostWeightPanel/>
      <BtnAddToCart/> */}
    </div>
  );
};

export default PizzaCardProduct;
