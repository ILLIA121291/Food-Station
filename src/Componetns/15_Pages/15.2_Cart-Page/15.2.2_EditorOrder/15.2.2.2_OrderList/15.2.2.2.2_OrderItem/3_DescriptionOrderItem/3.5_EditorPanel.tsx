import { FC } from 'react';
import BasisPanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/6_BasisPanel/BasisPanel';
import SizePanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/7_SizePanel/7.1_SizePanel';
import ExtraIngredientsPanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import onChangeOrder from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/onChangeOrder';

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
