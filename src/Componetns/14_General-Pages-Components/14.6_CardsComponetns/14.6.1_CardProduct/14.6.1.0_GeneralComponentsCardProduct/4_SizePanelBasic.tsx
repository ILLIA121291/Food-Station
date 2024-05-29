import { FC } from 'react';
import { IRoll } from '../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.2_Rolls/dataRolls';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

interface IProps {
  data: IRoll;
  langugeApp: typeof english;
}

const SizePanelBasic: FC<IProps> = ({ data }) => {
  return <div className="tx-al-c fs18 mt10">{data.quantity} pc.</div>;
};

export default SizePanelBasic;
