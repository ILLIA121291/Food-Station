import './OrderList.scss';
import { FC } from 'react';
import english from '../../../language/english';

import IOrder from '../../../interfaces/IOrder';
import OrderItem from '../2_order_item/0_OrderItem/OrderItem';

// Props Interface -------------------------------
interface IProps {
  orderList: IOrder[];
  langugeApp: typeof english;
  currency: string;
}

// COMPONETN -------------------------------------
const OrderList: FC<IProps> = ({ orderList, langugeApp, currency }) => {
  let displayComponent: JSX.Element;

  // Компонет если orderList пустой;
  if (orderList.length == 0) {
    displayComponent = <div className="fs20 bd mt30 p5 fw900">Order list is empty</div>;
  } else {
    displayComponent = (
      <ul className="mt30 mwt700 wt100per">
        {orderList.map(value => {
          return <OrderItem key={value.idOrderList} 
                            order={value} 
                            orderList={orderList} 
                            langugeApp={langugeApp} 
                            currency={currency} />;
        })}
      </ul>
    );
  }

  // RNDERING COMPONENT -------------------------------
  return <>{displayComponent}</>;
};

export default OrderList;
