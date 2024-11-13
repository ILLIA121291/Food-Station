import './CardProduct.scss';

import { FC, useState } from 'react';
import english from '../../../../language/english';

import IProduct from '../../../../Interfaces/IProduct';

import ImagePanel from '../1_image_panel/0_ImagePanel/ImagePanel';
import TitlePanel from '../2_title_panel/TitlePanel';
import ExtraIngredientsPanel from '../3_extra_Ingredients_panel/0_ExtraIngredientsPanel/ExtraIngredientsPanel';
import BtnAddToCart from '../7_btn_add_to_cart/BtnAddToCart';
import BasisPanel from '../4_basis_panel/BasisPanel';
import SizePanel from '../5_size_panel/0_SizePanel/SizePanel';
import QuantityPanel from '../6_quantity_panel/QuantityPanel';
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
