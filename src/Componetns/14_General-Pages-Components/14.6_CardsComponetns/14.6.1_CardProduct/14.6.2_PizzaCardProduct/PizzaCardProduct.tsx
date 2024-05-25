import ImagePanel from '../14.6.1.0_GeneralComponentsCardProduct/1_ImagePanel';
import './PizzaCardProduct.scss';

import { FC, useState } from 'react';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

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
  extraIngredients: IExtraIngredient[];
  costExtraIngredients: number;
  basis: 'standard' | 'thin';
  size: 26 | 30 | 40;
  quantity: number;
  weight: number;
  price: number;
}

interface IProps {
  dataPizza: IPizza;
}

const PizzaCardProduct: FC<IProps> = ({ dataPizza }) => {
  let pizzaSize: 26 | 30 | 40 = 30;
  let pizzaWeight: number = 0;
  let pizzaPrice: number = 0;

  for (let i = 0; i < dataPizza.size.length; i++) {
    if (dataPizza.size[i].size == 30) {
      pizzaSize = 30;
      pizzaWeight = dataPizza.size[i].weight;
      pizzaPrice = dataPizza.size[i].price;
      break;
    } else {
      pizzaSize = dataPizza.size[0].size as 26 | 30 | 40;
      pizzaWeight = dataPizza.size[0].weight;
      pizzaPrice = dataPizza.size[0].price;
    }
  }

  let pizzaBasis = 'standard';

  for (let i = 0; i < dataPizza.basis.length; i++) {
    if (dataPizza.basis[i] == pizzaBasis) {
      pizzaBasis = 'standard';
      break;
    } else {
      pizzaBasis = dataPizza.basis[0];
    }
  }

  const inisialStatePizza: IOrderdPizza = {
    name: dataPizza.name,
    costExtraIngredients: 0,
    extraIngredients: [],
    size: pizzaSize as 26 | 30 | 40,
    basis: pizzaBasis as 'standard' | 'thin',
    quantity: 1,
    weight: pizzaWeight,
    price: pizzaPrice,
  };

  const [orderdPizza, setOrderdPizza] = useState<IOrderdPizza>(inisialStatePizza);

  return (
    <div className="wt310 pt30">
      <ImagePanel image={dataPizza.img} alt={dataPizza.name} />
      <TitlePanel titel={dataPizza.name} />
      <IngredientsPanel orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} />
      <SizePanel dataPizza={dataPizza} orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} />
      <QuantityCostWeightPanel dataPizza={dataPizza} orderdPizza={orderdPizza} setOrderdPizza={setOrderdPizza} />
      {/* <BtnAddToCart/> */}
    </div>
  );
};

export default PizzaCardProduct;
