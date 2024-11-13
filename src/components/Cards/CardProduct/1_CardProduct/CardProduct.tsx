import './CardProduct.scss';

import { FC, useState } from 'react';
import english from '../../../../language/english';

import IProduct from '../../../../Interfaces/IProduct';

import ImagePanel from '../2_image_panel/2.1_ImagePanel/ImagePanel';
import TitlePanel from '../3_TitlePanel/TitlePanel';
import ExtraIngredientsPanel from '../4_ExtraIngredientsPanel/4.1_ExtraIngredientsPanel/ExtraIngredientsPanel';
import BtnAddToCart from '../8_BtnAddToCart/BtnAddToCart';
import BasisPanel from '../5_BasisPanel/BasisPanel';
import SizePanel from '../6_SizePanel/SizePanel';
import QuantityPanel from '../7_QuantityPanel/QuantityPanel';
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
