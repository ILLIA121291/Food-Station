import { FC } from 'react';
import IProduct from '../../../interfaces/IProduct';
import IOrder from '../../../interfaces/IOrder';
import english from '../../../language/english';

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
      {order.size > 1 ? (
        <div className={`p5 fs20 fw600 tx-al-c ${className}`}>
          {order.size} {order.units}
        </div>
      ) : null}
    </>
  );
};

export default OneSize;
