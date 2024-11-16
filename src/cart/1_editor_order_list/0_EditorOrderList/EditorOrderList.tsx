import classes from './EditorOrderList.module.css'
import { FC } from 'react';

import english from '../../../language/english';
import IOrder from '../../../interfaces/IOrder';

import { useSelector, useDispatch } from 'react-redux';
import { IStateStore } from '../../../app/stateStore';
import { clearOrderList } from '../../0_CartPage/sliceCart';

import OrderList from '../1_order_list/OrderList';

// Props Interface ---------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT --------------------------------------------------------
const EditorOrderList: FC<IProps> = ({ langugeApp, setDisplayCartPageComponent }) => {
  const dispatch = useDispatch();
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);
  const orderList = useSelector<IStateStore, IOrder[]>(state => state.cart.orderList);

  // const sendOrderList = () => {
  //   console.log(orderList)
  // }

  // RENDERING COMPONENT -------------------------------------------
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Order</h3>
      <button onClick={() => dispatch(clearOrderList())} className={classes.resetBtn}>Очистить</button>

      <OrderList orderList={orderList} langugeApp={langugeApp} currency={currency} />

      <div>Total: </div>
      <button
        className={classes.orderDetailsBtn}
        style={{ maxWidth: '600px' }}
        onClick={() => {
          setDisplayCartPageComponent('DetailsOrder');
        }}
      >
        Go to order details{' '}
      </button>
    </div>
  );
};

export default EditorOrderList;
