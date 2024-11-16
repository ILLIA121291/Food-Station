import './CartPage.scss';
import classesGlobal from '../../css/globalCCS.module.css';
import { FC, useState } from 'react';

import english from '../../language/english';

import EditorOrderList from '../1_editor_order_list/0_EditorOrderList/EditorOrderList';
import DetailsOrder from '../2_details_order/0_DetailsOrder/DetailsOrder';
import ConfirmationOrder from '../3_confirmation_order/0_ConfirmationOrder/ConfirmationOrder';

// Interface -----------------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------------
const CartPage: FC<IProps> = ({ langugeApp }) => {
  let [component, setDisplayCartPageComponent] = useState<string>('EditorOrder');

  // 'EditorOrder'

  let displayComponent: JSX.Element;

  switch (component) {
    case 'ConfitmationOrder':
      displayComponent = <ConfirmationOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    case 'DetailsOrder':
      displayComponent = <DetailsOrder setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
      break;
    default:
      displayComponent = <EditorOrderList setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />;
  }

  return <div className={classesGlobal.page_body_border}>{displayComponent}</div>;
};

export default CartPage;
