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

// Interface --------------------------------------------------

interface IProps {
  data: TAllProducts;
  langugeApp: typeof english;
}

const BasicCardProduct: FC<IProps> = ({ data, langugeApp }) => {
  // Order Inisial State ---------------------------------------------
  const inisialOrderPizza: IOrderItem = {
    name: data.name,
    price: data.price,
    quantity: 1,
    dishType: data.dishType,

    parameters: {
      weight: data.weight,
    },
  };

  const [order, setOrder] = useState<IOrderItem>(inisialOrderPizza);

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
