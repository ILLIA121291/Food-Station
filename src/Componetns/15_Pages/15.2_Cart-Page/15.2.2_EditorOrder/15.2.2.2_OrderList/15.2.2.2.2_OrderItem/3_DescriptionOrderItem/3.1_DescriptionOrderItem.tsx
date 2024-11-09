import './3.1_DescriptionOrderItem.scss';
import { FC, useEffect, useState } from 'react';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import IOrder from '../../../../../../../Interfaces/IOrder';

import EditorPanel from './3.5_EditorPanel';
import TitelOrder from './3.2_TitelOrder';
import ExtraIngredientsList from './3.3_ExtraIngredientsList';
import TotalList from './3.4_TotalList';

// Props Interface --------------------------------------------
interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  currency: string;
  langugeApp: typeof english;
}

const DescriptionOrderItem: FC<IProps> = ({ updatedOrder, setUpdateOrder, currency, langugeApp }) => {
  const [displayEditorPanel, setDisplayEditorPanel] = useState<boolean>(false);
  const [hiddenEditorPanel, setHiddenEditorPanel] = useState<string>('over-hid');
  const [btnEditor, setBtnEditor] = useState<boolean>(false);

  const sizeText = `${updatedOrder.parameters.size} ${updatedOrder.parameters.units}`;
  const size =
    updatedOrder.parameters.size && sizeText != '1 qty' ? (
      <LI>
        Size: {updatedOrder.parameters.size} {updatedOrder.parameters.units}
      </LI>
    ) : null;
  const weight = updatedOrder.parameters.weight ? <LI>Weight: {updatedOrder.parameters.weight} g.</LI> : null;
  const basis = updatedOrder.parameters.basis.name ? <LI>Basis: {updatedOrder.parameters.basis.name}</LI> : null;

  useEffect(() => {
    if (displayEditorPanel) {
      setBtnEditor(true);
      setTimeout(() => {
        setHiddenEditorPanel('');
        setBtnEditor(false);
      }, 1000);
    } else {
      setHiddenEditorPanel('over-hid');
    }
  }, [displayEditorPanel]);

  return (
    <div className="wt270">
      <TitelOrder updatedOrder={updatedOrder} name={updatedOrder.name} disabled={btnEditor} setDisplayEditorPanel={setDisplayEditorPanel} displayEditorPanel={displayEditorPanel} />
      <ul>
        {size}
        {weight}
        {basis}
        <ExtraIngredientsList data={updatedOrder.data} list={updatedOrder.parameters.extraIngredients} displayEditorPanel={displayEditorPanel} langugeApp={langugeApp} />
        <TotalList updatedOrder={updatedOrder} currency={currency} langugeApp={langugeApp} displayEditorPanel={displayEditorPanel} />
      </ul>
      <EditorPanel updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} currency={currency} langugeApp={langugeApp} displayEditorPanel={displayEditorPanel} hiddenEditorPanel={hiddenEditorPanel} />
    </div>
  );
};

// LI --------------------------------------------------

interface ILI {
  children: any;
}

const LI: FC<ILI> = ({ children }) => {
  return <li className="mt5">{children}</li>;
};

export default DescriptionOrderItem;
