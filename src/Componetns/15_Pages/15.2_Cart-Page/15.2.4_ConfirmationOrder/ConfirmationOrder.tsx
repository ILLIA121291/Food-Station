import './ConfirmationOrder.scss';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import { FC } from 'react';

interface IProps {
  langugeApp: typeof english;
}

const ConfirmationOrder: FC<IProps> = () => {
  return <div>DetailsOrder</div>;
};

export default ConfirmationOrder;
