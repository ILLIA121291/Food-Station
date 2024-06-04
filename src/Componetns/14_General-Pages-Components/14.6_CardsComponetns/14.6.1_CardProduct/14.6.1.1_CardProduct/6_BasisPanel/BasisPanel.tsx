import { FC } from 'react';
import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IOrderItem } from '../1_CardProduct/CardProduct';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

//Props Interfase --------------------------------

interface IProps {
  data: IProduct;
  order: IOrderItem;
  langugeApp: typeof english;
}

const BasisPanel: FC<IProps> = ({ data, order, langugeApp }) => {
  const text: { [key: string]: string } = langugeApp.textCardProduct.textGeneral;

  return (
    <div className="f_jc">
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
