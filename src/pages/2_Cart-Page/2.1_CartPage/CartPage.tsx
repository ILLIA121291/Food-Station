import english from '../../../language/english';
import EditorOrder from '../15.2.2_EditorOrder/15.2.2.1_EditorOrder/EditorOrder';
import DetailsOrder from '../15.2.3_DetailsOrder/DetailsOrder';
import ConfirmationOrder from '../15.2.4_ConfirmationOrder/ConfirmationOrder';
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
