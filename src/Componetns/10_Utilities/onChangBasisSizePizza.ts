import { MouseEvent } from 'react';
import { IOrder } from '../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
// Types ------------------------------------------

type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;
type TSetOrder = React.Dispatch<React.SetStateAction<IOrder>>;

// Function --------------------------------------

const onChangBasisSizePizza = (e: TE, setOrder: TSetOrder) => {
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
  } else if ((e.target as HTMLButtonElement).dataset.pizzaPrice) {
    const price = Number((e.target as HTMLButtonElement).dataset.pizzaPrice);
    const weight = Number((e.target as HTMLButtonElement).dataset.pizzaWeight);
    const diameter = Number((e.target as HTMLButtonElement).dataset.pizzaSize!);

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

export default onChangBasisSizePizza;
