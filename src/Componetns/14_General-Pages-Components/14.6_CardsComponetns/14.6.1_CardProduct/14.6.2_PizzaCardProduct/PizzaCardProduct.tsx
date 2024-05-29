import ImagePanel from '../14.6.1.0_GeneralComponentsCardProduct/1_ImagePanel';
import './PizzaCardProduct.scss';

import { FC, useState } from 'react';
import { IPizza } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

import TitlePanel from '../14.6.1.0_GeneralComponentsCardProduct/2_TitlePanel';
import IngredientsPanel from '../14.6.1.0_GeneralComponentsCardProduct/3_IngredientsPanel';
import SizePanelPizza from '../14.6.1.0_GeneralComponentsCardProduct/4_SizePanelPizza';
import QuantityCostWeightPanel from '../14.6.1.0_GeneralComponentsCardProduct/5_QuantityCostWeightPanel';
import BtnAddToCart from '../14.6.1.0_GeneralComponentsCardProduct/6_BtnAddToCart';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

export interface IExtraIngredient {
  name: string | undefined;
  price: number;
  quantity: number;
  cost: number;
}

export interface IOrderPizza {
  parameters: {
    dishType: string;
    name: string;
    extraIngredients: IExtraIngredient[];
    basis: 'standard' | 'thin';
    size: 26 | 30 | 40;
    weight: number;
    price: number;
    priceExtraIngredients: number;
  };

  total: {
    quantity: number;
    weight: number;
  };

  cost: {
    pizza: number;
    extraIngredients: number;
    total: number;
  };
}

interface IProps {
  data: IPizza;
  langugeApp: typeof english;
}

const PizzaCardProduct: FC<IProps> = ({ data, langugeApp }) => {
  // Bassis Pizza Inisial ----------------------------------------------
  let basis: 'standard' | 'thin' = 'standard';

  for (let i = 0; i < data.basis.length; i++) {
    if (data.basis[i] == basis) {
      basis = 'standard';
      break;
    } else {
      basis = data.basis[0] as 'standard' | 'thin';
    }
  }

  // Size Weight Price Pizza Inisial ---------------------------
  let size: 26 | 30 | 40 = 30;
  let weight: number = 0;
  let price: number = 0;

  for (let i = 0; i < data.size.length; i++) {
    if (data.size[i].size == 30) {
      size = 30;
      weight = data.size[i].weight;
      price = data.size[i].price;
      break;
    } else {
      size = data.size[0].size as 26 | 30 | 40;
      weight = data.size[0].weight;
      price = data.size[0].price;
    }
  }

  // Order Inisial State ---------------------------------------------
  const inisialOrderPizza: IOrderPizza = {
    parameters: {
      dishType: data.dishType,
      name: data.name,
      extraIngredients: [],
      size,
      basis,
      weight,
      price,
      priceExtraIngredients: 0,
    },

    total: {
      quantity: 1,
      weight: weight,
    },

    cost: {
      pizza: 0,
      extraIngredients: 0,
      total: 0,
    },
  };

  const [order, setOrder] = useState<IOrderPizza>(inisialOrderPizza);

  return (
    <div className="wt310 p15 bdr15 ">
      <ImagePanel image={data.img} alt={data.name} />
      <TitlePanel titel={data.name} />
      <IngredientsPanel order={order} setOrder={setOrder} langugeApp={langugeApp} />
      <SizePanelPizza data={data} order={order} setOrder={setOrder} langugeApp={langugeApp} />
      <QuantityCostWeightPanel data={data} order={order} setOrder={setOrder} langugeApp={langugeApp} />
      <BtnAddToCart order={order} setOrder={setOrder} langugeApp={langugeApp} />
    </div>
  );
};

export default PizzaCardProduct;
