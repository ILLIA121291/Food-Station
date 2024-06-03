import './OrderList.scss';
import { FC } from 'react';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderItem } from '../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import OrderItem from '../15.2.2.2.2_OrderItem/15.2.2.2.2.1_OrderItem/OrderItem';

// Props Interface -------------------------------

interface IProps {
  orderList: IOrderItem[];
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
          return <OrderItem key={value.name} order={value} orderList={orderList} langugeApp={langugeApp} currency={currency} />;
        })}
      </ul>
    );
  }

  return <>{displayComponent}</>;
};

export default OrderList;
