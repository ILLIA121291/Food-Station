import { MouseEvent } from 'react';
import IOrder from '../../../../Interfaces/IOrder';
import onChangeBasis from '../5_basis_panel/onChangeBasis';
import onChangeSize from '../6_size_panel/6.1_SizePanel/onChangeSize';

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
