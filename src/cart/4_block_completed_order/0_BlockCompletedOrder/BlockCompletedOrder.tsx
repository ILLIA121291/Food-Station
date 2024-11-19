import classes from './BlockCompletedOrder.module.css';
import english from '../../../language/english';

import { FC } from 'react';

interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

const BlockCompletedOrder: FC<IProps> = () => {
  return <div>BlockCompletedOrder</div>;
};

export default BlockCompletedOrder;
