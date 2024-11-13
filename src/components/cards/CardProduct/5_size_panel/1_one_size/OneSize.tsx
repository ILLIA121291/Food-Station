import { FC } from 'react';
import IProduct from '../../../../Interfaces/IProduct';
import IOrder from '../../../../Interfaces/IOrder';
import english from '../../../../language/english';

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
