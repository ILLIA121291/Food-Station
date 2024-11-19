import classesGlobal from '../../css/globalCCS.module.css';
import { FC, useState } from 'react';

import english from '../../language/english';

import BlockEditorOrderList from '../1_block_editor_order_list/0_BlockEditorOrderList/BlockEditorOrderList';
import BlockDeliveryDetails from '../2_block_delivery_details/0_BlockDeliveryDetails/BlockDeliveryDetailsBlock';
import BlockPayment from '../3_block_payment/0_BlockPayment/BlockPayment';
import BlockCompletedOrder from '../4_block_completed_order/0_BlockCompletedOrder/BlockCompletedOrder';

// Interface -----------------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------------
const CartPage: FC<IProps> = ({ langugeApp }) => {
  let [component, setDisplayCartPageComponent] = useState<string>('Payment Block');

  // 'EditorOrder'

  let displayComponent: JSX.Element;

  switch (component) {
    case 'BlockCompletedOrder':
      displayComponent = <BlockCompletedOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    case 'BlockPayment':
      displayComponent = <BlockPayment setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    case 'BlockDeliveryDetails':
      displayComponent = <BlockDeliveryDetails setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    default:
      displayComponent = <BlockEditorOrderList setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
  }

  return <div className={classesGlobal.pageBodyBorder}>{displayComponent}</div>;
};

export default CartPage;
