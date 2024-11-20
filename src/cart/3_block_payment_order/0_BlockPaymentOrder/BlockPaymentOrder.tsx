import classesGlobal from '../../../css/globalCCS.module.css';
import classes from './BlockPaymentOrder.module.css';
import { FC, useState } from 'react';
import english from '../../../language/english';
import PanelPaymentMethods from '../1_panel_payment_methods/PanelPaymentMethods';
import FormCardPaymentMethod from '../2_form_card_payment_methods/0_FormCardPaymentMethod/FormCardPaymentMethod';
import FormCashPaymentMethod from '../3_form_cash_payment_method/FormCashPaymentMethod';

// Interface -------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT -------------------------
const BlockPaymentOrder: FC<IProps> = ({ langugeApp }) => {
  let [paymentMethod, setPaymentMethod] = useState<string>('CardPaymentMethod');
  let displayPaymentMethod: JSX.Element;

  // Reduser --------------------------------------------------------------------------
  switch (paymentMethod) {
    // Cash Payment Method;
    case 'CashPaymentMethod':
      displayPaymentMethod = <FormCashPaymentMethod langugeApp={langugeApp} />;
      break;
    // Card Payment Method;
    default:
      displayPaymentMethod = <FormCardPaymentMethod langugeApp={langugeApp} />;
      break;
  }

  // RENDERING OREDER --------------------------------------------------------------------------------------
  return (
    <div className={`${classesGlobal.pageBodyBorder}  ${classes.container}`}>
      <PanelPaymentMethods langugeApp={langugeApp} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      {displayPaymentMethod}
    </div>
  );
};

export default BlockPaymentOrder;
