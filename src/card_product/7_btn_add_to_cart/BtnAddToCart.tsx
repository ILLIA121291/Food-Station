import { FC } from 'react';
import english from '../../language/english';
import { useSelector, useDispatch } from 'react-redux';
import { addOrderToOrderList } from '../../cart/0_CartPage/sliceCart';
import { IStateStore } from '../../app/stateStore';
import IOrder from '../../interfaces/IOrder';
import { nanoid } from '@reduxjs/toolkit';
import checkingIsOrderInOrderList from './functions/checkingIsOrderInOrderList';

// Props Interface --------------------------------------------------
interface IProps {
  order: IOrder;
  langugeApp: typeof english;
}

// COMPONENT ---------------------------------------------------------
const BtnAddToCart: FC<IProps> = ({ order, langugeApp }) => {
  const dispatch = useDispatch();
  const orderList = useSelector<IStateStore, IOrder[]>(state => state.cart.orderList);
  const text = langugeApp.textCardProduct.textGeneral;

  const addOrderToCart = (): void => {
    // Создание свойства idOrderList;
    const idOrderList = nanoid();

    // Пустой orderList, добовляем первый order;
    if (orderList.length == 0) {
      order.idOrderList = idOrderList;
      dispatch(addOrderToOrderList([order]));
      return;
    }

    // Не пустой orderList, проверям новый order на уже существании в корзине;
    const { checkingOrderList, thisOrderInOrderList } = checkingIsOrderInOrderList(order, orderList);

    // Добовление нового order в orderList если данного order там нет;
    if (thisOrderInOrderList == false) {
      // Добовление новогo order в массив checkingOrderList;
      checkingOrderList.push({ ...order, idOrderList });

      // Обновлениее голобального сосояния добовление обновленного orderList;
      dispatch(addOrderToOrderList(checkingOrderList));
      return;
    }
    // Обновление количетсва order в orderList так как данный заказ уже есть в orderList;
    dispatch(addOrderToOrderList(checkingOrderList));
    return;
  };

  // RENDERING COMPONET -------------------------------------------------------------
  return (
    <button onClick={addOrderToCart} className="bd mt15 wt280 p5 bdr10 fs16 fw600 bkgr__tra  bkgr-col__orn-wh">
      {text.addToCar}
    </button>
  );
};

export default BtnAddToCart;
