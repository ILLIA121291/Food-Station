import { FC } from 'react';
import BasisPanel from '../../../../../card_product/4_basis_panel/BasisPanel';
import SizePanel from '../../../../../card_product/5_size_panel/0_SizePanel/SizePanel';
import english from '../../../../../language/english';
import onChangeOrder from '../../../../../card_product/0_CardProduct/onChangeOrder';
import ExtraIngredientsPanel from '../../../../../card_product/3_extra_Ingredients_panel/0_ExtraIngredientsPanel/ExtraIngredientsPanel';
import IOrder from '../../../../../interfaces/IOrder';

// Props Interface ---------------------
interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  currency: string;
  langugeApp: typeof english;
  hiddenEditorPanel: string;
  displayEditorPanel: boolean;
}

const EditorPanelDescription: FC<IProps> = ({ updatedOrder, setUpdateOrder, hiddenEditorPanel, displayEditorPanel, langugeApp }) => {
  return (
    <div className={`tran__ht1000 mt15 wt285 ${hiddenEditorPanel}`} style={displayEditorPanel ? { height: '120px' } : { height: '0px' }}>
      <div onClick={e => onChangeOrder(e, setUpdateOrder)} className="wt285">
        <BasisPanel data={updatedOrder.data} order={updatedOrder} langugeApp={langugeApp} />
        <SizePanel data={updatedOrder.data} order={updatedOrder} langugeApp={langugeApp} />
        <ExtraIngredientsPanel className="mt15" order={updatedOrder} setOrder={setUpdateOrder} data={updatedOrder.data} langugeApp={langugeApp} />
      </div>
    </div>
  );
};

export default EditorPanelDescription;
