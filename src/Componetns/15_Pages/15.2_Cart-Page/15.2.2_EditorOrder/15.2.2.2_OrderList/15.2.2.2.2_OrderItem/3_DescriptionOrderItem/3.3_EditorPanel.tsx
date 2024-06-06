import { FC, MouseEvent } from 'react';
import BasisPanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/6_BasisPanel/BasisPanel';
import SizePanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/7_SizePanel/SizePanel';
import ExtraIngredientsPanel from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/5_ExtraIngredientsPanel/5.1_ExtraIngredientsPanel';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import english from '../../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import onChangeBasis from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/6_BasisPanel/onChangeBasis';
import onChangeSize from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/7_SizePanel/onChangeSize';

// Props Interface ---------------------

interface IProps {
  updatedOrder: IOrder;
  setUpdateOrder: React.Dispatch<React.SetStateAction<IOrder>>;
  currency: string;
  langugeApp: typeof english;
}

const EditorPanel: FC<IProps> = ({ updatedOrder, setUpdateOrder, langugeApp }) => {
  // Change Order -------------------------------
  type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;

  const onChange = (e: TE) => {
    if ((e.target as HTMLButtonElement).dataset.basis) {
      onChangeBasis(e, setUpdateOrder);
    } else if ((e.target as HTMLButtonElement).dataset.diameter) {
      onChangeSize(e, setUpdateOrder);
    }
  };

  return (
    <div onClick={e => onChange(e)} className="wt285">
      <BasisPanel data={updatedOrder.data} order={updatedOrder} langugeApp={langugeApp} />
      <SizePanel data={updatedOrder.data} order={updatedOrder} langugeApp={langugeApp} />
      <ExtraIngredientsPanel className="mt15" order={updatedOrder} setOrder={setUpdateOrder} data={updatedOrder.data} langugeApp={langugeApp} />
    </div>
  );
};

export default EditorPanel;
