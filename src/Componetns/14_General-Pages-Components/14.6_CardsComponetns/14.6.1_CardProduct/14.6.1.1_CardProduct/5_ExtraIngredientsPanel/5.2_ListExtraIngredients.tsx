import { FC, MouseEvent } from 'react';
import { IOrderItem } from '../1_CardProduct/CardProduct';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import BlockErrorMessages from '../../../../14.5_FormsComponents/BlockErrorMessages';
import ItemExtraIngredients from './5.3_ItemExtraIngredients';
import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import onOffBodyScroll from '../../../../../10_Utilities/onOffBodyScroll';
// Props Interface -----------------------------------

interface IProps {
  data: IProduct;
  listState: boolean;
  order: IOrderItem;
  langugeApp: typeof english;
  currency: string;
  refUl: React.RefObject<HTMLUListElement>;
  displayInfoMessage: { display: boolean; message: string };
  addRemoveIngredient: (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLUListElement>) => void;
}

const ListExtraIngredients: FC<IProps> = ({ data, listState, order, langugeApp, currency, refUl, displayInfoMessage, addRemoveIngredient }) => {
  return (
    <>
      <div className="extra-ingre__container bdr10 zindex150 bkgr__wh fw600 " style={listState ? { height: '250px', border: '1px solid #000' } : { height: '0px', border: '0px solid #000' }} onClick={e => e.stopPropagation()} onMouseEnter={() => onOffBodyScroll('hidden')} onMouseLeave={() => onOffBodyScroll('auto')}>
        <ul ref={refUl} className="wt280 p5" onClick={e => addRemoveIngredient(e)}>
          {data.extraIngredients.map((item, index) => {
            return <ItemExtraIngredients key={index} name={item.name} price={item.price} order={order} langugeApp={langugeApp} currency={currency} />;
          })}
        </ul>
      </div>
      <BlockErrorMessages name="extra-ingredient" color="blc" className="wt260" message={displayInfoMessage.message} display={displayInfoMessage.display} />
    </>
  );
};

export default ListExtraIngredients;
