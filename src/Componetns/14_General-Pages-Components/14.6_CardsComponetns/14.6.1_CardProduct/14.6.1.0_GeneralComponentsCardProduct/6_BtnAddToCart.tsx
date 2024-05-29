import { FC } from 'react';
import { IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import toFixedNumber from '../../../../10_Utilities/toFixedNumber';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderBasic } from '../14.6.3_BasicCardProduct/BasicCardProduct';

interface IProps {
  order: IOrderPizza | IOrderBasic;
  setOrder: React.Dispatch<React.SetStateAction<IOrderPizza>> | React.Dispatch<React.SetStateAction<IOrderBasic>>;
  langugeApp: typeof english;
}

const BtnAddToCart: FC<IProps> = ({ order, setOrder, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;

  const addOrderToCart = () => {
    // Order Pizza ----------------------------------------
    if (order.parameters.dishType == 'pizza') {
      let pizza = toFixedNumber((order as IOrderPizza).parameters.price * order.total.quantity);
      let extraIngredients = toFixedNumber((order as IOrderPizza).parameters.priceExtraIngredients * order.total.quantity);

      setOrder((order: any) => {
        return {
          ...order,
          cost: {
            pizza,
            extraIngredients,
            total: pizza + extraIngredients,
          },
        };
      });
    } else {
      // Order Basic ------------------------------------
      setOrder((order: any) => {
        return {
          ...order,
          cost: {
            total: toFixedNumber(order.parameters.price * order.total.quantity),
          },
        };
      });
    }
    console.log(order);
  };

  return (
    <button onClick={addOrderToCart} className="bd mt15 wt270 p5 bdr10 fs16 fw600 bkgr__tra  bkgr-col__orn-wh">
      {text.addToCar}
    </button>
  );
};

export default BtnAddToCart;
