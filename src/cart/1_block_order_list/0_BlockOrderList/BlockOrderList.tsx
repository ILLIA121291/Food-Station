import classes from './BlockOrderList.module.css';
import classesGlobal from '../../../css/globalCCS.module.css';
import { FC } from 'react';

import english from '../../../language/english';
import IOrder from '../../../interfaces/IOrder';

import { useSelector, useDispatch } from 'react-redux';
import { IStateStore } from '../../../app/stateStore';
import { clearOrderList } from '../../0_CartPage/sliceCart';

import OrderList from '../1_order_list/OrderList';
import displayPriceInCurrency from '../../../panels/CurrencyPanel/displayPriceInCurrency';
import TitleBlockComponentInCart from '../../0_CartPage/component/TitleBlockComponentInCart/TitleBlockComponentInCart';

// Props Interface ---------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT --------------------------------------------------------
const BlockOrderList: FC<IProps> = ({ langugeApp, setDisplayCartPageComponent }) => {
  const dispatch = useDispatch();
  const currency = useSelector<IStateStore, string>(state => state.currencyPanel.currencyApp);
  const orderList = useSelector<IStateStore, IOrder[]>(state => state.cart.orderList);

  // Cart Cost & Quantity -----------------
  let quantity: number = 0;
  let cost: number = 0;

  if (orderList.length == 0) {
    quantity = 0;
    cost = 0;
  } else {
    orderList.forEach(value => {
      quantity += value.quantity;
      cost += (value.price + value.priceExtra) * value.quantity;
    });
  }

  // const sendOrderList = () => {
  //   console.log(orderList)
  // }

  // RENDERING COMPONENT -------------------------------------------
  return (
    <div className={classes.container}>
      <TitleBlockComponentInCart title='Order'/>
      <button onClick={() => dispatch(clearOrderList())} className={classes.resetBtn}>
        Очистить
      </button>

      <OrderList orderList={orderList} langugeApp={langugeApp} currency={currency} />

      <div className={classes.total}>Total: {displayPriceInCurrency(currency, cost)} </div>
      <button
        className={`${classesGlobal.btn} ${classes.btn}`}
        onClick={() => {
          setDisplayCartPageComponent('BlockDeliveryOrder');
        }}
      >
        Go to order details
      </button>
    </div>
  );
};

export default BlockOrderList;
