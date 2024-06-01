import { FC, useState } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import ImagePanel from '../14.6.1.0_GeneralComponentsCardProduct/1_ImagePanel';
import TitlePanel from '../14.6.1.0_GeneralComponentsCardProduct/2_TitlePanel';
import QuantityCostWeightPanel from '../14.6.1.0_GeneralComponentsCardProduct/5_QuantityCostWeightPanel';
import BtnAddToCart from '../14.6.1.0_GeneralComponentsCardProduct/6_BtnAddToCart';
import SizePanelBasic from '../14.6.1.0_GeneralComponentsCardProduct/4_SizePanelBasic';
import { TAllProducts } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IRoll } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.2_Rolls/dataRolls';
import { ISushi } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.3_Sushi/dataSushi';
import { IOrderItem } from '../14.6.1.1_CardProduct/CardProduct';
import { IDrink } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.7_Drinks/dataDrinks';

// Interface --------------------------------------------------

interface IProps {
  data: TAllProducts;
  langugeApp: typeof english;
}

const BasicCardProduct: FC<IProps> = ({ data, langugeApp }) => {
  // Order Inisial State ---------------------------------------------
  const volume: number | 0 = (data as Extract<TAllProducts, IDrink>).volume ? (data as Extract<TAllProducts, IDrink>).volume : 0;
  const weight: number | 0 = (data as Exclude<TAllProducts, IDrink>).weight ? (data as Exclude<TAllProducts, IDrink>).weight : 0;
  const quantity: number | 0 = (data as Extract<TAllProducts, IRoll | ISushi>).quantity ? (data as Extract<TAllProducts, IRoll | ISushi>).quantity : 0;

  const inisialOrder: IOrderItem = {
    name: data.name,
    price: data.price,
    priceExtra: 0,
    quantity: 1,
    dishType: data.dishType,

    parameters: {
      weight,
      volume,
      quantity,
    },
  };

  const [order, setOrder] = useState<IOrderItem>(inisialOrder);

  return (
    <div className="wt310 p15 bdr15">
      <ImagePanel dishType={data.dishType} image={data.img} alt={data.name} tags={data.tags} ingredients={data.ingredients} />
      <TitlePanel titel={data.name} />
      {(data as IRoll | ISushi).quantity ? <SizePanelBasic data={data} langugeApp={langugeApp} /> : null}
      <QuantityCostWeightPanel order={order} setOrder={setOrder} langugeApp={langugeApp} />
      <BtnAddToCart order={order} langugeApp={langugeApp} />
    </div>
  );
};

export default BasicCardProduct;
