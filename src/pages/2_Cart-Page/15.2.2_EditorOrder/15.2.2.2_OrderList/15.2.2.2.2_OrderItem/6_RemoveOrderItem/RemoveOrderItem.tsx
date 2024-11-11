import { FC } from 'react';
import { IoMdClose } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { removeFromOrderList } from '../../../../2.1_CartPage/sliceCart';

// Props Interface ----------------------

interface IProps {
  name: string;
}

const RemoveOrderItem: FC<IProps> = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <button className="bkgr__tra editor-order__item-remove" onClick={() => dispatch(removeFromOrderList(name))}>
      <IoMdClose size={12} color="red" />
    </button>
  );
};

export default RemoveOrderItem;
