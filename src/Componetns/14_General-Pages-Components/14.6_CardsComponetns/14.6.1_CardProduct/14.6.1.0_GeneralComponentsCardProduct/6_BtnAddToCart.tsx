import { FC } from 'react';
import { IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import toFixedNumber from '../../../../10_Utilities/toFixedNumber';

interface IProps {
  order: IOrderPizza;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>>;
}

const BtnAddToCart: FC<IProps> = ({ order, setOrder }) => {
  const addOrderToCart = () => {
    console.log(order);
    let pizza = toFixedNumber(order.parameters.price * order.total.quantity);
    let extraIngredients = toFixedNumber(order.parameters.priceExtraIngredients * order.total.quantity);

    setOrder(order => {
      return {
        ...order,
        cost: {
          pizza,
          extraIngredients,
          total: pizza + extraIngredients,
        },
      };
    });
  };

  return (
    <button onClick={addOrderToCart} className="bd mt15 wt270 p5 bdr10 fs16 fw600 bkgr__tra  bkgr-col__orn-wh">
      + Add to Cart
    </button>
  );
};

export default BtnAddToCart;
