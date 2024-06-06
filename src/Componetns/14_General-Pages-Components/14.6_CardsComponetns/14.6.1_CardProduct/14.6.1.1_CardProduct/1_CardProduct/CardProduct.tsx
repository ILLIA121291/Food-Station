import './CardProduct.scss';

import { FC, useState, MouseEvent } from 'react';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import { IBasis, IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

import ImagePanel from '../3_ImagePanel/3.1_ImagePanel';
import TitlePanel from '../4_TitlePanel/4.1_TitlePanel';
import ExtraIngredientsPanel from '../5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel';
import BtnAddToCart from '../10_BtnAddToCart/BtnAddToCart';
import pizzaInisialState from '../2_InitialState/pizzaInitialState';
import basicInitialState from '../2_InitialState/basicInitialState';
import BasisPanel from '../6_BasisPanel/BasisPanel';
import SizePanel from '../7_SizePanel/SizePanel';
import InfoPanel from '../8_InfoPanel/InfoPanel';
import onChangeBasis from '../6_BasisPanel/onChangeBasis';
import onChangeSize from '../7_SizePanel/onChangeSize';
import QuantityPanel from '../9_QuantityPanel/QuantityPanel';

export interface IAddExtraIngredient {
  name: string;
  price: number;
  quantity: number;
  cost: number;
}

// Interface -------------------------------------------
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
    volume: number;
    diameter: number;
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
  let initialState;

  if (data.dishType == 'pizza') {
    initialState = pizzaInisialState(data);
  } else {
    initialState = basicInitialState(data);
  }

  let [order, setOrder] = useState(initialState);

  // Change Order -------------------------------
  type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;

  const onChange = (e: TE) => {
    if ((e.target as HTMLButtonElement).dataset.basis) {
      onChangeBasis(e, setOrder);
    } else if ((e.target as HTMLButtonElement).dataset.diameter) {
      onChangeSize(e, setOrder);
    }
  };

  const extraIngredientsPanel =
    data.extraIngredients.length != 0 ? (
      <div className="mt15">
        <ExtraIngredientsPanel order={order} setOrder={setOrder} data={data} langugeApp={langugeApp} />
      </div>
    ) : null;
  const basisPanel =
    data.basis.length != 0 ? (
      <div className="mt15">
        <BasisPanel data={data} order={order} langugeApp={langugeApp} />
      </div>
    ) : null;
  const sizePanel = data.size.length > 1 ? <SizePanel data={data} order={order} langugeApp={langugeApp} /> : null;
  const infoPanel = data.size[0].quantity > 1 ? <InfoPanel data={data} order={order} langugeApp={langugeApp} /> : null;

  return (
    <div style={{ paddingLeft: `${paddingLeft}px` }}>
      <div className="wt310 p15 bdr15 " onClick={e => onChange(e)}>
        <ImagePanel data={data} order={order} />
        <TitlePanel titel={data.name} />
        {extraIngredientsPanel}
        {basisPanel}
        {sizePanel}
        {infoPanel}
        <div className="mt15">
          <QuantityPanel order={order} setOrder={setOrder} langugeApp={langugeApp} />
        </div>
        <BtnAddToCart order={order} langugeApp={langugeApp} />
      </div>
    </div>
  );
};

export default CardProduct;
