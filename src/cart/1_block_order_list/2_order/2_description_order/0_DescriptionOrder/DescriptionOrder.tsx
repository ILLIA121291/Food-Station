import { FC, useEffect, useState } from 'react';
import english from '../../../../../language/english';
import IOrder from '../../../../../interfaces/IOrder';

import TitleDescription from '../1_title_description/0_TitleDescription/TitleDescription';
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

// COMPONENT -----------------------------------------------------
const DescriptionOrder: FC<IProps> = ({ updatedOrder, setUpdateOrder, currency, langugeApp }) => {
  // COMPONENT STATE --------------------------------------------------------------
  const [displayEditorPanel, setDisplayEditorPanel] = useState<boolean>(false);
  const [hiddenEditorPanel, setHiddenEditorPanel] = useState<string>('over-hid');
  const [btnEditor, setBtnEditor] = useState<boolean>(false);

  // -------------------------------------------------------------------------
  const sizeText = `${updatedOrder.size} ${updatedOrder.units}`;
  const size =
    updatedOrder.size && sizeText != '1 qty' ? (
      <LI>
        Size: {updatedOrder.size} {updatedOrder.units}
      </LI>
    ) : null;
  const weight = updatedOrder.weight ? <LI>Weight: {updatedOrder.weight} g.</LI> : null;
  const basis = updatedOrder.basis.name ? <LI>Basis: {updatedOrder.basis.name}</LI> : null;

  // useEffect -----------------------------------------------------------------
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

  // RENDERING COMPONENT --------------------------------------------------------
  return (
    <div className="wt270">
      <TitleDescription updatedOrder={updatedOrder} name={updatedOrder.data.name} disabled={btnEditor} setDisplayEditorPanel={setDisplayEditorPanel} displayEditorPanel={displayEditorPanel} />
      <ul>
        {size}
        {weight}
        {basis}
        <ExtraIngredientListDescription data={updatedOrder.data} list={updatedOrder.extraIngredients} displayEditorPanel={displayEditorPanel} langugeApp={langugeApp} />
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
