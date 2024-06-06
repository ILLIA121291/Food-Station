import { FC } from 'react';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IOrder } from '../1_CardProduct/CardProduct';

// Props Interface ----------------------------------

interface IProps {
  data: IProduct;
  order: IOrder;
  langugeApp: typeof english;
  className?: string;
}

const OneSize: FC<IProps> = ({ order, className }) => {
  return (
    <>
      {order.parameters.size > 1 ? (
        <div className={`p5 fs20 fw600 tx-al-c ${className}`}>
          {order.parameters.size} {order.parameters.units}
        </div>
      ) : null}
    </>
  );
};

export default OneSize;
