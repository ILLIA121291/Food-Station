import './CardProduct.scss';

import { FC, useState } from 'react';
import english from '../../../../language/english';

import IProduct from '../../../../Interfaces/IProduct';

import ImagePanel from '../3_ImagePanel/3.1_ImagePanel/ImagePanel';
import TitlePanel from '../4_TitlePanel/4.1_TitlePanel';
import ExtraIngredientsPanel from '../5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel';
import BtnAddToCart from '../9_BtnAddToCart/BtnAddToCart';
import BasisPanel from '../6_BasisPanel/BasisPanel';
import SizePanel from '../7_SizePanel/7.1_SizePanel';
import QuantityPanel from '../8_QuantityPanel/QuantityPanel';
import orderInitialState from './orderInitialState';
import onChangeOrder from './onChangeOrder';

// Component Props Interface --------------------------------------
interface IProps {
  data: IProduct;
  langugeApp: typeof english;
  paddingLeft?: string;
}

// COMPONENT --------------------------------------------
const CardProduct: FC<IProps> = ({ data, langugeApp, paddingLeft = 0 }) => {
  // CardProduct initial state -----------------------------------------------
  const initialStateCardProduct = orderInitialState(data);

  // State of product order --------------------------------------------------
  let [order, setOrder] = useState(initialStateCardProduct);

  // Added ExtraIngredientsPanel in CardProduct -----------------------------
  const extraIngredientsPanel = data.extraIngredients.length != 0 ? <ExtraIngredientsPanel order={order} setOrder={setOrder} data={data} langugeApp={langugeApp} className="mt15" /> : null;

  // Added BasisPanel in CardProduct ----------------------------------------
  const basisPanel = data.basis.length != 0 ? <BasisPanel data={data} order={order} langugeApp={langugeApp} className="mt15" /> : null;

  // RENDERING COMPONENT ------------------------------------------------------
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
