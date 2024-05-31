import './EditorOrder.scss';
import { FC, useState } from 'react';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { v4 as uuidv4 } from 'uuid';

import dataRolls from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.2_Rolls/dataRolls';
import { TAllProducts } from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IPizza } from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import QuantityInput from '../../../14_General-Pages-Components/14.5_FormsComponents/QuantityInput';
import toFixedNumber from '../../../10_Utilities/toFixedNumber';
import { IoMdClose } from 'react-icons/io';
import dataPizza from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

// Interface ---------------------------------------------------
interface IProps {
  langugeApp: typeof english;
}

const EditorOrder: FC<IProps> = ({ langugeApp }) => {
  let [orderList, setOrderList] = useState(dataPizza.products);

  return (
    <div className="fc_ac ht4000">
      <h3 className="mt30 fw600 fs30">Order</h3>

      <ul className="mt30 mwt600 wt100per">
        {orderList.map(value => {
          return <ItemOrder key={uuidv4()} data={value} setOrderList={setOrderList} langugeApp={langugeApp} />;
        })}
      </ul>

      <button className="p15 fs20 mt30 fw600 bkgr__ora wc bdr15 wt100per " style={{ maxWidth: '600px' }}>
        Go to order details
      </button>
    </div>
  );
};

// Item Order -------------------------------------

interface IItemOrder {
  langugeApp: typeof english;
  data: TAllProducts;
  setOrderList: React.Dispatch<React.SetStateAction<any[]>>;
}

const ItemOrder: FC<IItemOrder> = ({ data, setOrderList, langugeApp }) => {
  // Remove Item ----------------------------------------------
  const onRemoveItem = () => {
    setOrderList(orderList => orderList.filter(value => value.name != data.name));
  };

  return (
    <li className="f_jc_sb bd__b1-or p5 mt15 pos_rel editor-order__item">
      <img className="wt100 ht100" src={data.img} alt={data.name} />
      <div className=" wt200 editor-order__item-description">
        <p className="tx-tr-cap fw600 fs18 mb5 editor-order__item-titel">{data.name}</p>
        <p className="">Price: {data.price} usd</p>
        <p>Weight: {data.weight} g.</p>
        <p></p>
      </div>
      <QuantityInput calFunction displayNumber={3} />
      <div className="f_jc-ac fw600 editor-order__item-cost">{toFixedNumber(data.price * 3)} USD</div>
      <button className="bkgr__tra editor-order__item-remove" onClick={onRemoveItem}>
        <IoMdClose size={12} color="red" />
      </button>
    </li>
  );
};

export default EditorOrder;
