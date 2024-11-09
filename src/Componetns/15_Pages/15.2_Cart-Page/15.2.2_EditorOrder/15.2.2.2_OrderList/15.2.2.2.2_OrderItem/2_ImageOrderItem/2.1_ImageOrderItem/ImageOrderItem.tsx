import './ImageOrderItem.scss';
import { FC } from 'react';
import { IOrder } from '../../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import { DOMAIN_NAME } from '../../../../../../../10_Utilities/variables';

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
