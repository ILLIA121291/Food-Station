import './CartPage.scss';
import classesGlobal from '../../css/globalCCS.module.css';
import { FC, useState } from 'react';

import english from '../../language/english';

import EditorOrderList from '../1_editor_order_list/0_EditorOrderList/EditorOrderList';
import DeliveryDetails from '../2_delivery_details/0_DeliveryDetails/DeliveryDetails';
import ConfirmationOrder from '../4_confirmation_order/0_ConfirmationOrder/ConfirmationOrder';

// Interface -----------------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------------
const CartPage: FC<IProps> = ({ langugeApp }) => {
  let [component, setDisplayCartPageComponent] = useState<string>('DeliveryDetails');

  // 'EditorOrder'

  let displayComponent: JSX.Element;

  switch (component) {
    case 'ConfitmationOrder':
      displayComponent = <ConfirmationOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    case 'DeliveryDetails':
      displayComponent = <DeliveryDetails setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    default:
      displayComponent = <EditorOrderList setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
  }

  return <div className={classesGlobal.pageBodyBorder}>{displayComponent}</div>;
};

export default CartPage;
