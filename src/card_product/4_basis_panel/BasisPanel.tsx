import { FC } from 'react';
import IProduct from '../../interfaces/IProduct';
import IOrder from '../../interfaces/IOrder';
import english from '../../language/english';

//Props Interfase --------------------------------

interface IProps {
  data: IProduct;
  order: IOrder;
  langugeApp: typeof english;
  className?: string;
}

const BasisPanel: FC<IProps> = ({ data, order, langugeApp, className = '' }) => {
  const text: { [key: string]: string } = langugeApp.textCardProduct.textGeneral;

  return (
    <div className={`f_jc ${className}`}>
      {data.basis.map((value, i) => {
        const activeBtn = value.name == order.parameters.basis.name ? 'btn__active' : 'bkgr__br-lt';

        return (
          <button key={i} className={`fw600 wt139 fs16 bd bdr5  ${activeBtn}`} data-basis={value.name} data-price={value.price}>
            {text[value.name]}
          </button>
        );
      })}
    </div>
  );
};

export default BasisPanel;
