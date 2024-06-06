import { FC } from 'react';
import { FaPencil } from 'react-icons/fa6';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';

// Props Interface ------------------------------

interface IProps {
  updatedOrder: IOrder;
  name: string;
  disabled: boolean;
  displayEditorPanel: boolean;
  setDisplayEditorPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const TitelOrder: FC<IProps> = ({ updatedOrder, name, disabled, displayEditorPanel, setDisplayEditorPanel }) => {
  return <>{updatedOrder.data.size.length > 1 || updatedOrder.data.extraIngredients.length != 0 || updatedOrder.data.basis.length != 0 ? <TitelBtn name={name} disabled={disabled} displayEditorPanel={displayEditorPanel} setDisplayEditorPanel={setDisplayEditorPanel} /> : <Titel name={name} />}</>;
};

// Titel ---------------------------------------------
interface ITitel {
  name: string;
}

const Titel: FC<ITitel> = ({ name }) => {
  return <h5 className="tx-tr-cap fw600 fs18 mb5 editor-order__item-titel mr5">{name}</h5>;
};

// Titel Buntton ---------------------------------------------

interface ITitelBtn {
  name: string;
  disabled: boolean;
  displayEditorPanel: boolean;
  setDisplayEditorPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const TitelBtn: FC<ITitelBtn> = ({ name, disabled, displayEditorPanel, setDisplayEditorPanel }) => {
  return (
    <button 
    disabled={disabled} 
    onClick={() => setDisplayEditorPanel(!displayEditorPanel)} 
    className="bkgr__tra f order-item__titel-btn">
      <Titel name={name} />
      <FaPencil />
    </button>
  );
};

export default TitelOrder;
