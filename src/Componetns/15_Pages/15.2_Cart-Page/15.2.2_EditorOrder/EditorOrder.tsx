import './EditorOrder.scss';
import { FC } from 'react';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { v4 as uuidv4 } from 'uuid';

import QuantityInput from '../../../14_General-Pages-Components/14.5_FormsComponents/QuantityInput';
import { IoMdClose } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { IStateStore } from '../../../13_App-Components/13.1_App/stateStore';
import { IOrderItem } from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import { removeFromOrderList, clearOrderList, updateOrderList } from '../15.2.1_CartPage/sliceCart';
import useDisplayPriceInCurrency from '../../../14_General-Pages-Components/14.2_CurrencyPanel/useDisplayPriceInCurrency';

// Pops Interface ---------------------------------------------------
interface IProps {
  langugeApp: typeof english;
}

const EditorOrder: FC<IProps> = ({ langugeApp }) => {
  const dispatch = useDispatch();
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);
  const orderList = useSelector<IStateStore, IOrderItem[]>(state => state.cart.orderList);

  return (
    <div className="fc_ac ht4000">
      <h3 className="mt30 fw600 fs30">Order</h3>
      <button onClick={() => dispatch(clearOrderList())} className="mt30 fw600 fs30 rc">
        Очистить
      </button>

      <ul className="mt30 mwt600 wt100per">
        {orderList.map(value => {
          return <ItemOrder key={uuidv4()} order={value} orderList={orderList} langugeApp={langugeApp} currency={currency} />;
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
  order: IOrderItem;
  orderList: IOrderItem[];
  currency: string;
}

const ItemOrder: FC<IItemOrder> = ({ order, orderList, currency }) => {
  const dispatch = useDispatch();

  const onUpdateQuantity = (num: 1 | -1) => {
    const newOrderList = orderList.map(value => {
      const name = value.name == order.name;
      const qty = value.quantity == order.quantity;
      const price = value.price == order.price;
      const priceExtra = value.priceExtra == order.priceExtra;

      if (name && qty && price && priceExtra) {
        let quantity = order.quantity;

        if (num == -1) {
          quantity - 1 < 1 ? (quantity = 1) : (quantity -= 1);
        } else {
          quantity += 1;
        }

        return {
          ...value,
          quantity,
        };
      } else {
        return value;
      }
    });

    dispatch(updateOrderList(newOrderList));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <li className="f_jc_sb bd__b1-or p5 mt15 pos_rel editor-order__item">
      <img className="wt100 ht100" src={order.img} alt={order.name} />
      <div className=" wt200 editor-order__item-description">
        <p className="tx-tr-cap fw600 fs18 mb5 editor-order__item-titel">{order.name}</p>
        <p className="">Price: {order.price} usd</p>
        <p>Weight: {order.parameters.weight} g.</p>
        <p></p>
      </div>
      <QuantityInput calFunction={onUpdateQuantity} displayNumber={order.quantity} />
      <div className="f_jc-ac wt110 fw600 editor-order__item-cost">{useDisplayPriceInCurrency(currency, order.price * order.quantity)}</div>
      <button className="bkgr__tra editor-order__item-remove" onClick={() => dispatch(removeFromOrderList(order.name))}>
        <IoMdClose size={12} color="red" />
      </button>
    </li>
  );
};

export default EditorOrder;
