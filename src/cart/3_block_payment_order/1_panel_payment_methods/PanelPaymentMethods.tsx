import { FC } from 'react';
import english from '../../../language/english';
import classes from './PanelPaymentMethods.module.css';
import paymentMethods from './addition/paymentsMethods';
import btnCssClass from './addition/btnCssClass';

// Interface --------------------------------------

interface IProps {
  langugeApp: typeof english;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT ---------------------------------------
const PanelPaymentMethods: FC<IProps> = ({ paymentMethod, setPaymentMethod, langugeApp }) => {
  const text = langugeApp.textCart.textPanelPaymentMethods;

  // RENDERING COMPONENT ---------------------------
  return (
    <div className={classes.container}>
      {paymentMethods.map(method => {
        return (
          <button
            key={method.type}
            className={btnCssClass(paymentMethod, method.paymentMethod)}
            onClick={() => {
              setPaymentMethod(method.paymentMethod);
            }}
          >
            {method.imge}
            {text[method.type]}
          </button>
        );
      })}
    </div>
  );
};

export default PanelPaymentMethods;
