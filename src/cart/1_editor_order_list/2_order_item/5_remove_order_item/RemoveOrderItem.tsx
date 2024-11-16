import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { removeFromOrderList } from '../../../0_CartPage/sliceCart';

// Props Interface ----------------------

interface IProps {
  idOrderList: string;
}

const RemoveOrderItem: FC<IProps> = ({ idOrderList }) => {
  const dispatch = useDispatch();

  return (
    <button className="bkgr__tra editor-order__item-remove" onClick={() => dispatch(removeFromOrderList(idOrderList))}>
      <IoMdClose size={12} color="red" />
    </button>
  );
};

export default RemoveOrderItem;
