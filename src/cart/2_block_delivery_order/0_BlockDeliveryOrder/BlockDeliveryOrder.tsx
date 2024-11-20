import { FC } from 'react';
import classes from './BlockDeliveryOrder.module.css';
import english from '../../../language/english';
import FormDeliveryDetails from '../1_form_delivery_details/FormDeliveryDetails';
import BtnBackInCart from '../../0_CartPage/component/BtnBackInCart/BtnBackInCart';
import TitleBlockComponentInCart from '../../0_CartPage/component/TitleBlockComponentInCart/TitleBlockComponentInCart';

// Interface -------------------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT -----------------------------------------------------------------
const BlockDeliveryOrder: FC<IProps> = ({ langugeApp, setDisplayCartPageComponent }) => {
  // RENDERING COMPONENT -----------------------------------------------------
  return (
    <div className={` ${classes.container}`}>
      <TitleBlockComponentInCart title="Delivery Details" />
      <div className={classes.btnBack}>
        <BtnBackInCart backTo="BlockOrderList" setDisplayCartPageComponent={setDisplayCartPageComponent} />
      </div>
      <FormDeliveryDetails setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />
    </div>
  );
};

export default BlockDeliveryOrder;
