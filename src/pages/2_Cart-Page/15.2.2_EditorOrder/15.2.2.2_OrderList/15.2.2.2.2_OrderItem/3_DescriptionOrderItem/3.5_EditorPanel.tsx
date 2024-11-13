import { FC } from 'react';
import './3.5_EditorPanel.scss';
import BasisPanel from '../../../../../../components/cards/CardProduct/5_BasisPanel/BasisPanel';
import SizePanel from '../../../../../../components/cards/CardProduct/6_SizePanel/SizePanel';
import english from '../../../../../../language/english';
import onChangeOrder from '../../../../../../components/cards/CardProduct/1_CardProduct/onChangeOrder';
import ExtraIngredientsPanel from '../../../../../../components/cards/CardProduct/4_ExtraIngredientsPanel/4.1_ExtraIngredientsPanel/ExtraIngredientsPanel';
import IOrder from '../../../../../../Interfaces/IOrder';

// Props Interface ---------------------
interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  currency: string;
  langugeApp: typeof english;
  hiddenEditorPanel: string;
  displayEditorPanel: boolean;
}

const EditorPanel: FC<IProps> = ({ updatedOrder, setUpdateOrder, hiddenEditorPanel, displayEditorPanel, langugeApp }) => {
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

export default EditorPanel;
