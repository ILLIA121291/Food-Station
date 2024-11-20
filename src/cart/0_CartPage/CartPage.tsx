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
  let [component, setDisplayCartPageComponent] = useState<string>('BlockPaymentOrder');

  let desplayBlock: JSX.Element;

  switch (component) {
    // 4. Block Complered Order --------------------------------------------------------------------------------------------
    case 'BlockCompletedOrder':
      desplayBlock = <BlockCompletedOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    // 3. Block Payment Order --------------------------------------------------------------------------------------------
    case 'BlockPaymentOrder':
      desplayBlock = <BlockPayment setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    // 2. Block Delivery Order --------------------------------------------------------------------------------------------
    case 'BlockDeliveryOrder':
      desplayBlock = <BlockDeliveryOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    // 1. Block OrderList --------------------------------------------------------------------------------------------
    default:
      desplayBlock = <BlockOrderList setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
  }

  return <div className={classesGlobal.pageBodyBorder}>{desplayBlock}</div>;
};

export default CartPage;
