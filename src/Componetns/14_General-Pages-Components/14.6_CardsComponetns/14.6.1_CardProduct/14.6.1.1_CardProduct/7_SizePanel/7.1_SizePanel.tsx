import { FC } from 'react';
import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IOrder } from '../1_CardProduct/CardProduct';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import ManySizes from './7.3_ManySizes';
import OneSize from './7.2_OneSize';

//Props Interfase --------------------------------

interface IProps {
  data: IProduct;
  order: IOrder;
  langugeApp: typeof english;
  className?: string;
}

const SizePanel: FC<IProps> = ({ data, order, langugeApp, className = '' }) => {
  return <>{data.size.length > 1 ? <ManySizes data={data} order={order} langugeApp={langugeApp} className={className} /> : <OneSize data={data} order={order} langugeApp={langugeApp} className={'mt15'} />}</>;
};

export default SizePanel;
