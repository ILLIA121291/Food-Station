import { MouseEvent } from 'react';
import { IOrderItem } from '../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';

// Types ------------------------------------------

type TE = MouseEvent<HTMLDivElement> | MouseEvent<HTMLUListElement>;
type TSetOrder = React.Dispatch<React.SetStateAction<IOrderItem>>;

// Function --------------------------------------

const onChangBasisSizePizza = (e: TE, setOrder: TSetOrder) => {
  if ((e.target as HTMLButtonElement).dataset.basis) {
    setOrder(order => {
      return {
        ...order,
        parameters: {
          ...order.parameters,
          basis: (e.target as HTMLButtonElement).innerText as 'standard' | 'thin',
        },
      };
    });
  } else if ((e.target as HTMLButtonElement).dataset.pizzaPrice) {
    let price = Number((e.target as HTMLButtonElement).dataset.pizzaPrice);
    let weight = Number((e.target as HTMLButtonElement).dataset.pizzaWeight);

    setOrder(order => {
      return {
        ...order,
        price,
        parameters: {
          ...order.parameters,
          size: +(e.target as HTMLButtonElement).dataset.pizzaSize! as 26 | 30 | 40,
          weight,
        },
      };
    });
  }
};

export default onChangBasisSizePizza;
