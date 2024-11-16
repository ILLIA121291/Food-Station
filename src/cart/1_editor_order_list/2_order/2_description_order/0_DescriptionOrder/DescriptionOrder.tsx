import { FC, useEffect, useState } from 'react';
import english from '../../../../../language/english';
import IOrder from '../../../../../interfaces/IOrder';

import TitelDescription from '../1_titel_description/TitelDescription';
import ExtraIngredientListDescription from '../2_extra_ingredient_list_description/ExtraIngredientListDescription';
import TotalDescription from '../3_total_description/TotalDescription';
import EditorPanelDescription from '../4_editor_panel_description/EditorPanelDescription';

// Props Interface --------------------------------------------
interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  currency: string;
  langugeApp: typeof english;
}

const DescriptionOrder: FC<IProps> = ({ updatedOrder, setUpdateOrder, currency, langugeApp }) => {
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
      <TitelDescription updatedOrder={updatedOrder} name={updatedOrder.name} disabled={btnEditor} setDisplayEditorPanel={setDisplayEditorPanel} displayEditorPanel={displayEditorPanel} />
      <ul>
        {size}
        {weight}
        {basis}
        <ExtraIngredientListDescription data={updatedOrder.data} list={updatedOrder.parameters.extraIngredients} displayEditorPanel={displayEditorPanel} langugeApp={langugeApp} />
        <TotalDescription updatedOrder={updatedOrder} currency={currency} langugeApp={langugeApp} displayEditorPanel={displayEditorPanel} />
      </ul>
      <EditorPanelDescription updatedOrder={updatedOrder} setUpdateOrder={setUpdateOrder} currency={currency} langugeApp={langugeApp} displayEditorPanel={displayEditorPanel} hiddenEditorPanel={hiddenEditorPanel} />
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

export default DescriptionOrder;
