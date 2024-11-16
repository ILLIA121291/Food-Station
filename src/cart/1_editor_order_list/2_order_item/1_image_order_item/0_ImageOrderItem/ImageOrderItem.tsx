import './ImageOrderItem.scss';
import { FC } from 'react';
import { DOMAIN_NAME } from '../../../../../variables/variables';
import IOrder from '../../../../../interfaces/IOrder';

// IProps ----------------------------------
interface IProps {
  updatedOrder: IOrder;
}

// COMPONENT ----------------------------------------
const ImageOrderItem: FC<IProps> = ({ updatedOrder }) => {
  let pizzaBasis = '';

  if (updatedOrder.dishType == 'pizza') {
    pizzaBasis = updatedOrder.parameters.basis.name == 'standard' ? '' : 'pizza-thin';
  }

  return <img className={`wt100 ht100 tran__all1000 l ${pizzaBasis}`} src={DOMAIN_NAME + updatedOrder.data.img} alt={updatedOrder.data.name} />;
};

export default ImageOrderItem;
