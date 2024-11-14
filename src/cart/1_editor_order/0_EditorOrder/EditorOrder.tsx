import './EditorOrder.scss';
import { FC } from 'react';
import english from '../../../language/english';

import { useSelector, useDispatch } from 'react-redux';
import { IStateStore } from '../../../app/stateStore';
import { clearOrderList } from '../../0_CartPage/sliceCart';
import OrderList from '../1_order_list/OrderList';
import IOrder from '../../../interfaces/IOrder';

// Props Interface ---------------------------------------------------
interface IProps {
  langugeApp: typeof english;
}

const EditorOrder: FC<IProps> = ({ langugeApp }) => {
  const dispatch = useDispatch();
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);
  const orderList = useSelector<IStateStore, IOrder[]>(state => state.cart.orderList);

  const sendOrderList = () => {
    console.log(orderList)
  }

  return (
    <div className="fc_ac ht4000">
      <h3 className="mt30 fw600 fs30">Order</h3>
      <button onClick={() => dispatch(clearOrderList())} className="mt30 fw600 fs30 rc">
        Очистить
      </button>

      <OrderList orderList={orderList} langugeApp={langugeApp} currency={currency} />

      <button className="p15 fs20 mt30 fw600 bkgr__ora wc bdr15 wt100per " 
              style={{ maxWidth: '600px' }} 
              onClick={sendOrderList}
      >Go to order details </button>
    </div>
  );
};

export default EditorOrder;
