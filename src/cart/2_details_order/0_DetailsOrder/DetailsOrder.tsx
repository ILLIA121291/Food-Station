import english from '../../../language/english';
import './DetailsOrder.scss';

import { FC } from 'react';

interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

const DetailsOrder: FC<IProps> = () => {
  return <div>DetailsOrder</div>;
};

export default DetailsOrder;
