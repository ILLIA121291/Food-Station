import './ConfirmationOrder.scss';
import english from '../../../language/english';

import { FC } from 'react';

interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

const ConfirmationOrder: FC<IProps> = () => {
  return <div>DetailsOrder</div>;
};

export default ConfirmationOrder;
