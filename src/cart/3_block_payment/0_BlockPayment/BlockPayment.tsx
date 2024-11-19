import classesGlobal from '../../../css/globalCCS.module.css';
import { FC } from 'react';
import english from '../../../language/english';

// Interface -------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT -------------------------
const PaymentBlock: FC<IProps> = ({ setDisplayCartPageComponent }) => {
  // RENDERING OREDER ----------------
  return (
    <div className={classesGlobal.pageBodyBorder}>
      Payment Block
      <button onClick={() => setDisplayCartPageComponent('BlockCompletedOrder')}>Block confirmation order</button>
    </div>
  );
};

export default PaymentBlock;
