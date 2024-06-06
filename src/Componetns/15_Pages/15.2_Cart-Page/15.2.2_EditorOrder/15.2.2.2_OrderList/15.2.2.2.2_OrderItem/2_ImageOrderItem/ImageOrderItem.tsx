import { FC } from 'react';
import { IOrder } from '../../../../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';

// IProps ----------------------------------
interface IProps {
  updatedOrder: IOrder
}

const ImageOrderItem: FC<IProps> = ({ updatedOrder}) => {

  const pizzaBasis = updatedOrder.parameters.basis.name == 'standard' ? '' : 'pizza-thin'


  return <img className={`wt100 ht100 tran__all1000 ${pizzaBasis}`} src={updatedOrder.data.img} alt={updatedOrder.data.name} />;
};

export default ImageOrderItem;
