import { MouseEvent } from 'react';
import IOrder from '../../interfaces/IOrder';
import onChangeBasis from '../4_basis_panel/onChangeBasis';
import onChangeSize from '../5_size_panel/0_SizePanel/onChangeSize';

type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;
type TSetOrder = React.Dispatch<React.SetStateAction<IOrder>>;

const onChangeOrder = (e: TE, setOrder: TSetOrder) => {
  if ((e.target as HTMLButtonElement).dataset.basis) {
    onChangeBasis(e, setOrder);
  } else if ((e.target as HTMLButtonElement).dataset.size) {
    onChangeSize(e, setOrder);
  }
};

export default onChangeOrder;
