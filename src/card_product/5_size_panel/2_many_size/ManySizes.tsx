import './ManySizes.scss';
import { FC } from 'react';

import IProduct from '../../../interfaces/IProduct';
import IOrder from '../../../interfaces/IOrder';
import english from '../../../language/english';

// Props Interface -----------------------------------
interface IProps {
  data: IProduct;
  order: IOrder;
  langugeApp: typeof english;
  className?: string;
}

const ManySizes: FC<IProps> = ({ data, order, className = '' }) => {
  return (
    <div className={`f_jc ${className}`}>
      {data.size.map((value, i: number) => {
        const activeBtn = value.size == order.size ? 'btn__active' : 'bkgr__br-lt';

        return (
          <button key={i} data-size={value.size} data-units={value.units} data-price={value.price} data-weight={value.weight} className={`fs16 fw600 bd bdr5 wt92 f_jc-ac ${activeBtn}`}>
            {value.size} {value.units}
          </button>
        );
      })}
    </div>
  );
};

export default ManySizes;
