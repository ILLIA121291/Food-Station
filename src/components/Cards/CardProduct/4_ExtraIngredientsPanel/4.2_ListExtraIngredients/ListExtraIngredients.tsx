import { FC, MouseEvent } from 'react';
import IOrder from '../../../../../Interfaces/IOrder';
import english from '../../../../../language/english';
import BlockErrorMessages from '../../../../forms/FormsComponents/BlockErrorMessages';
import ItemExtraIngredients from '../4.3_ItemExtraIngredients/ItemExtraIngredients';
import IProduct from '../../../../../Interfaces/IProduct';
import onOffBodyScroll from '../../../../../utilities/onOffBodyScroll';
// Props Interface -----------------------------------

interface IProps {
  data: IProduct;
  listState: boolean;
  order: IOrder;
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
