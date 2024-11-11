import './EditorOrder.scss';
import { FC } from 'react';
import english from '../../../../language/english';

import { useSelector, useDispatch } from 'react-redux';
import { IStateStore } from '../../../../Componetns/13_App-Components/13.1_App/stateStore';
import { clearOrderList } from '../../2.1_CartPage/sliceCart';
import OrderList from '../15.2.2.2_OrderList/15.2.2.2.1_OrderList/OrderList';
import IOrder from '../../../../Interfaces/IOrder';

// Props Interface ---------------------------------------------------
interface IProps {
  langugeApp: typeof english;
}

const EditorOrder: FC<IProps> = ({ langugeApp }) => {
  const dispatch = useDispatch();
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);
  const orderList = useSelector<IStateStore, IOrder[]>(state => state.cart.orderList);

  return (
    <div className="fc_ac ht4000">
      <h3 className="mt30 fw600 fs30">Order</h3>
      <button onClick={() => dispatch(clearOrderList())} className="mt30 fw600 fs30 rc">
        Очистить
      </button>

      <OrderList orderList={orderList} langugeApp={langugeApp} currency={currency} />

      <button className="p15 fs20 mt30 fw600 bkgr__ora wc bdr15 wt100per " style={{ maxWidth: '600px' }}>
        Go to order details
      </button>
    </div>
  );
};

export default EditorOrder;
