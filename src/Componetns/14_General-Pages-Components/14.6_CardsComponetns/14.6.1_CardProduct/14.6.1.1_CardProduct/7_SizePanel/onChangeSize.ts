import { MouseEvent } from 'react';
import { IOrder } from '../1_CardProduct/CardProduct';

// Types ------------------------------------------

type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;
type TSetOrder = React.Dispatch<React.SetStateAction<IOrder>>;

// Function --------------------------------------

const onChangeSize = (e: TE, setOrder: TSetOrder) => {
  if ((e.target as HTMLButtonElement).dataset.diameter) {
    const price = Number((e.target as HTMLButtonElement).dataset.price);
    const weight = Number((e.target as HTMLButtonElement).dataset.weight);
    const diameter = Number((e.target as HTMLButtonElement).dataset.diameter);

    setOrder(order => {
      return {
        ...order,
        price,
        parameters: {
          ...order.parameters,
          diameter,
          weight,
        },
      };
    });
  }
};

export default onChangeSize;
