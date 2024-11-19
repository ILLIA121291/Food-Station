import { FC } from 'react';
import classes from './BlockDeliveryDetails.module.css';
import classesGlobal from '../../../css/globalCCS.module.css';
import english from '../../../language/english';
import FormDeliveryDetails from '../1_form_delivery_details/FormDeliveryDetails';

// Interface -------------------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT -----------------------------------------------------------------
const DeliveryDetailsBlock: FC<IProps> = ({ langugeApp, setDisplayCartPageComponent }) => {
  // RENDERING COMPONENT -----------------------------------------------------
  return (
    <div className={`${classesGlobal.pageBodyBorder} ${classes.container}`}>
      <FormDeliveryDetails setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />
    </div>
  );
};

export default DeliveryDetailsBlock;
