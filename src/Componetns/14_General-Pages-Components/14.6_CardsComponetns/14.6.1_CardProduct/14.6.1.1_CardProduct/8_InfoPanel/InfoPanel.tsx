import { FC } from 'react';
import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IOrder } from '../1_CardProduct/CardProduct';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

//Props Interfase --------------------------------
interface IProps {
  data: IProduct;
  order: IOrder;
  langugeApp: typeof english;
}

const InfoPanel: FC<IProps> = ({ order }) => {
  return <div className="p5 fs20 fw600 tx-al-c">{order.parameters.quantity} ps</div>;
};

export default InfoPanel;
