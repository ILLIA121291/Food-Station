import english from '../../language/english';
import EditorOrder from '../1_editor_order/0_EditorOrder/EditorOrder';
import DetailsOrder from '../2_details_order/0_DetailsOrder/DetailsOrder';
import ConfirmationOrder from '../3_confirmation_order/0_ConfirmationOrder/ConfirmationOrder';
import classesGlobal from '../../css/globalCCS.module.css';
import './CartPage.scss';

import { FC } from 'react';

// Interface -----------------------------------------
interface IProps {
  langugeApp: typeof english;
}

// COMPONENT -----------------------------------------
const CartPage: FC<IProps> = ({ langugeApp }) => {
  //let [component, setComponent] = useState<string>('EditorOrder');
  let component = 'EditorOrder';

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
