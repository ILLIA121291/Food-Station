import './CardProduct.scss';

import { FC, useState } from 'react';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import { IBasis, IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

import ImagePanel from '../3_ImagePanel/3.1_ImagePanel/ImagePanel';
import TitlePanel from '../4_TitlePanel/4.1_TitlePanel';
import ExtraIngredientsPanel from '../5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel';
import BtnAddToCart from '../9_BtnAddToCart/BtnAddToCart';
import BasisPanel from '../6_BasisPanel/BasisPanel';
import SizePanel from '../7_SizePanel/7.1_SizePanel';
import QuantityPanel from '../8_QuantityPanel/QuantityPanel';
import orderInitialState from './orderInitialState';
import onChangeOrder from './onChangeOrder';

// Extra Ingredient -----------------------------------
export interface IAddExtraIngredient {
  name: string;
  price: number;
  quantity: number;
  cost: number;
}

// Order Interface -------------------------------------
export interface IOrder {
  id: string;
  name: string;
  price: number;
  data: IProduct;
  priceExtra: number;
  quantity: number;
  dishType: string;
  parameters: {
    extraIngredients: IAddExtraIngredient[];
    basis: IBasis;
    quantity: number;
    weight: number;
    size: number;
    units: string;
    [key: string]: any;
  };
}

// Props Interface --------------------------------------
interface IProps {
  data: IProduct;
  langugeApp: typeof english;
  paddingLeft?: string;
}

const CardProduct: FC<IProps> = ({ data, langugeApp, paddingLeft = 0 }) => {
  let initialState = orderInitialState(data);

  let [order, setOrder] = useState(initialState);

  const extraIngredientsPanel = data.extraIngredients.length != 0 ? <ExtraIngredientsPanel order={order} setOrder={setOrder} data={data} langugeApp={langugeApp} className="mt15" /> : null;

  const basisPanel = data.basis.length != 0 ? <BasisPanel data={data} order={order} langugeApp={langugeApp} className="mt15" /> : null;

  return (
    <div style={{ paddingLeft: `${paddingLeft}px` }}>
      <div className="wt310 p15 bdr15 " onClick={e => onChangeOrder(e, setOrder)}>
        <ImagePanel data={data} order={order} />
        <TitlePanel titel={data.name} />
        {extraIngredientsPanel}
        {basisPanel}
        <SizePanel data={data} order={order} langugeApp={langugeApp} />
        <QuantityPanel order={order} setOrder={setOrder} langugeApp={langugeApp} className={'mt15'} />
        <BtnAddToCart order={order} langugeApp={langugeApp} />
      </div>
    </div>
  );
};

export default CardProduct;
