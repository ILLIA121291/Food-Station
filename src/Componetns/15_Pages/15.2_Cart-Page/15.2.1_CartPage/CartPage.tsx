import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import EditorOrder from '../15.2.2_EditorOrder/15.2.2.1_EditorOrder/EditorOrder';
import DetailsOrder from '../15.2.3_DetailsOrder/DetailsOrder';
import ConfirmationOrder from '../15.2.4_ConfirmationOrder/ConfirmationOrder';
import './CartPage.scss';

import { FC, useState } from 'react';

// Interface -----------------------------------------
interface IProps {
  langugeApp: typeof english;
}

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

  return <div className="gbs__border">{displayComponent}</div>;
};

export default CartPage;
