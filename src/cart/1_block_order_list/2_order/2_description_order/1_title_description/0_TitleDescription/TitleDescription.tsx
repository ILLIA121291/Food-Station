//import classes from './TitleDescription.module.css';
import { FC } from 'react';
import IOrder from '../../../../../../interfaces/IOrder';
import TitelBtnDescriptionOrder from '../2_title_btn_description_order/TitleBtnDescriptionOrder';
import TitelTextDescriptionOrder from '../1_title_text_description/TitleTextDescriptionOrder';

// Props Interface ------------------------------
interface IProps {
  updatedOrder: IOrder;
  name: string;
  disabled: boolean;
  displayEditorPanel: boolean;
  setDisplayEditorPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

// COMPONENT -----------------------------------------
const TitleDescription: FC<IProps> = ({ updatedOrder, name, disabled, displayEditorPanel, setDisplayEditorPanel }) => {
  const size = updatedOrder.data.size.length > 1;
  const basis = updatedOrder.data.basis.length != 0;
  const extraIngredients = updatedOrder.data.extraIngredients.length != 0;

  const titelBtn = <TitelBtnDescriptionOrder name={name} disabled={disabled} displayEditorPanel={displayEditorPanel} setDisplayEditorPanel={setDisplayEditorPanel} />;
  const titelText = <TitelTextDescriptionOrder name={name} />;

  // RENDERING COMPONENT -----------------------------------------------------
  return <>{size || basis || extraIngredients ? titelBtn : titelText}</>;
};

export default TitleDescription;
