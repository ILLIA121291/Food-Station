import { MouseEvent } from 'react';
import { IOrder } from './CardProduct';
import onChangeBasis from '../6_BasisPanel/onChangeBasis';
import onChangeSize from '../7_SizePanel/7.0_onChangeSize';

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
