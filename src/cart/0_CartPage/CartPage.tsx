import classesGlobal from '../../css/globalCCS.module.css';
import { FC, useState } from 'react';

import english from '../../language/english';

import BlockOrderList from '../1_block_order_list/0_BlockOrderList/BlockOrderList';
import BlockDeliveryOrder from '../2_block_delivery_order/0_BlockDeliveryOrder/BlockDeliveryOrder';
import BlockPayment from '../3_block_payment_order/0_BlockPaymentOrder/BlockPaymentOrder';
import BlockCompletedOrder from '../4_block_completed_order/0_BlockCompletedOrder/BlockCompletedOrder';

// Interface -----------------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------------
const CartPage: FC<IProps> = ({ langugeApp }) => {
  let [component, setDisplayCartPageComponent] = useState<string>('Payment Block');

  switch (component) {
    case 'BlockCompletedOrder':
      return <BlockCompletedOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
    case 'BlockPaymentOrder':
      return <BlockPayment setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
    case 'BlockDeliveryOrder':
      return <BlockDeliveryOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
    default:
      return <BlockOrderList setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
  }
};

export default CartPage;
