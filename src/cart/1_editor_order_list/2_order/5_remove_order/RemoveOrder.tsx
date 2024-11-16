import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { removeOrderFromOrderList } from '../../../0_CartPage/sliceCart';

// Props Interface ----------------------
interface IProps {
  idOrderList: string;
}

// COMPONENT --------------------------------
const RemoveOrder: FC<IProps> = ({ idOrderList }) => {
  const dispatch = useDispatch();

  // RENDERING COMPONENT -------------------
  return (
    <button className="bkgr__tra editor-order__item-remove" onClick={() => dispatch(removeOrderFromOrderList(idOrderList))}>
      <IoMdClose size={12} color="red" />
    </button>
  );
};

export default RemoveOrder;
