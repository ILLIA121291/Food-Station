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

const SizePanel: FC<IProps> = ({ data, order, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;

  return (
    <div className="f_jc">
      {data.size
        .sort((a, b) => a.price - b.price)
        .map((value, i) => {
          const activeBtn = value.price == order.price ? 'btn__active' : 'bkgr__br-lt';

          return (
            <button key={i} data-diameter={value.diameter} data-price={value.price} data-weight={value.weight} 
            className={`fs16 fw600 bd bdr5 wt92 f_jc-ac ${activeBtn}`}>
              {value.diameter} {text.cm}
            </button>
          );
        })}
    </div>
  );
};

export default SizePanel;
