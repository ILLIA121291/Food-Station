import TitelTextDescriptionOrder from '../1_title_text_description/TitleTextDescriptionOrder';
import classes from './TitleBtnDescriptionOrder.module.css';
import { FC } from 'react';
import { FaPencil } from 'react-icons/fa6';

// Interface -----------------------------------------

interface IProps {
  name: string;
  disabled: boolean;
  displayEditorPanel: boolean;
  setDisplayEditorPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

// COMPONENT -----------------------------------------
const TitelBtnDescriptionOrder: FC<IProps> = ({ name, disabled, displayEditorPanel, setDisplayEditorPanel }) => {
  // RENDERING COMPONENT -------------------------------
  return (
    <button disabled={disabled} onClick={() => setDisplayEditorPanel(!displayEditorPanel)} className={classes.btn}>
      <TitelTextDescriptionOrder name={name} />
      <FaPencil />
    </button>
  );
};

export default TitelBtnDescriptionOrder;
