import { FC } from 'react';
import './3.5_EditorPanel.scss';
import BasisPanel from '../../../../../../Componetns/14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/6_BasisPanel/BasisPanel';
import SizePanel from '../../../../../../Componetns/14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/7_SizePanel/7.1_SizePanel';
import english from '../../../../../../language/english';
import onChangeOrder from '../../../../../../Componetns/14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/onChangeOrder';
import ExtraIngredientsPanel from '../../../../../../Componetns/14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel';
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