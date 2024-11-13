import english from '../../../language/english';
import EditorOrder from '../1_editor_order/0_EditorOrder/EditorOrder';
import DetailsOrder from '../2_details_order/DetailsOrder';
import ConfirmationOrder from '../3_confirmation_order/ConfirmationOrder';
import classesGlobal from '../../../css/globalCCS.module.css'
import './CartPage.scss';

import { FC, useState } from 'react';

// Interface -----------------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------------
const CartPage: FC<IProps> = ({ langugeApp }) => {
  let [component, setComponent] = useState<string>('EditorOrder');

  let displayComponent;

  switch (component) {
    case 'ConfitmationOrder':
      displayComponent = <ConfirmationOrder langugeApp={langugeApp} />;
      break;
    case 'DetailsOrder':
      displayComponent = <DetailsOrder langugeApp={langugeApp} />;
      break;
    default:
      displayComponent = <EditorOrder langugeApp={langugeApp} />;
  }

  return <div className={classesGlobal.page_body_border}>{displayComponent}</div>;
};

export default CartPage;
