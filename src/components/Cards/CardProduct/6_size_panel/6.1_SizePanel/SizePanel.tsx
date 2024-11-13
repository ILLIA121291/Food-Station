import { FC } from 'react';
import IProduct from '../../../../../Interfaces/IProduct';
import IOrder from '../../../../../Interfaces/IOrder';
import english from '../../../../../language/english';
import ManySizes from '../6.3_many_size/ManySizes';
import OneSize from '../6.2_one_size/OneSize';

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
