import { MouseEvent } from 'react';
import { IOrder } from '../1_CardProduct/CardProduct';
// Types ------------------------------------------

type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;
type TSetOrder = React.Dispatch<React.SetStateAction<IOrder>>;

// Function --------------------------------------

const onChangeBasis = (e: TE, setOrder: TSetOrder) => {
  if ((e.target as HTMLButtonElement).dataset.basis) {
    setOrder(order => {
      return {
        ...order,
        parameters: {
          ...order.parameters,
          basis: {
            name: (e.target as HTMLButtonElement).dataset.basis!,
            price: 0,
          },
        },
      };
    });
  }
};

export default onChangeBasis;
