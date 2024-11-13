import './OrderList.scss';
import { FC } from 'react';
import english from '../../../../language/english';
import OrderItem from '../2_order_Item/0_OrderItem/OrderItem';
import IOrder from '../../../../interfaces/IOrder';
// Props Interface -------------------------------

interface IProps {
  orderList: IOrder[];
  langugeApp: typeof english;
  currency: string;
}

const OrderList: FC<IProps> = ({ orderList, langugeApp, currency }) => {
  let displayComponent: JSX.Element;

  if (orderList.length == 0) {
    displayComponent = <div className="fs20 bd mt30 p5 fw900">Order list is empty</div>;
  } else {
    displayComponent = (
      <ul className="mt30 mwt700 wt100per">
        {orderList.map(value => {
          return <OrderItem key={value.id} order={value} orderList={orderList} langugeApp={langugeApp} currency={currency} />;
        })}
      </ul>
    );
  }

  return <>{displayComponent}</>;
};

export default OrderList;
