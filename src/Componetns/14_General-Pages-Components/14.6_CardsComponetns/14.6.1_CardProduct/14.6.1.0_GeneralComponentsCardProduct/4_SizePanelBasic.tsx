import { FC } from 'react';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import { TAllProducts } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IRoll } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.2_Rolls/dataRolls';
import { ISushi } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.3_Sushi/dataSushi';

interface IProps {
  data: TAllProducts;
  langugeApp: typeof english;
}

const SizePanelBasic: FC<IProps> = ({ data }) => {
  return <div className="tx-al-c fs18 mt10">{(data as IRoll | ISushi).quantity} pc.</div>;
};

export default SizePanelBasic;
