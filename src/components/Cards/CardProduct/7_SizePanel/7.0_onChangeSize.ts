import { MouseEvent } from 'react';
import IOrder from '../../../../Interfaces/IOrder';
// Types ------------------------------------------

type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;
type TSetOrder = React.Dispatch<React.SetStateAction<IOrder>>;

// Function --------------------------------------

const onChangeSize = (e: TE, setOrder: TSetOrder) => {
  if ((e.target as HTMLButtonElement).dataset.size) {
    const size = Number((e.target as HTMLButtonElement).dataset.size);
    const units = (e.target as HTMLButtonElement).dataset.units!;
    const price = Number((e.target as HTMLButtonElement).dataset.price);
    const weight = Number((e.target as HTMLButtonElement).dataset.weight);

    setOrder(order => {
      return {
        ...order,
        price,
        parameters: {
          ...order.parameters,
          size,
          units,
          weight,
        },
      };
    });
  }
};

export default onChangeSize;
