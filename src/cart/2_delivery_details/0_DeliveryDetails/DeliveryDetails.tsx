import { FC } from 'react';
import classes from './DeliveryDetails.module.css';
import classesGlobal from '../../../css/globalCCS.module.css';
import english from '../../../language/english';
import FormDeliveryDetails from '../../../forms/FormDeliveryDetails/FormDeliveryDetails';

// Interface -------------------------------------------------------------
interface IProps {
  langugeApp: typeof english;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT -----------------------------------------------------------------
const DeliveryDetails: FC<IProps> = ({ langugeApp, setDisplayCartPageComponent }) => {

  // RENDERING COMPONENT -----------------------------------------------------
  return (
    <div className={`${classesGlobal.pageBodyBorder} ${classes.container}`}>
      <FormDeliveryDetails setDisplayCartPageComponent={setDisplayCartPageComponent} langugeApp={langugeApp} />
    </div>
  );
};

export default DeliveryDetails;
