import { FC } from 'react';
import { IExtraIngredient } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderItem } from '../14.6.1.1_CardProduct/CardProduct';

interface IProps {
  order: IOrderItem;
  langugeApp: typeof english;
}

const BtnAddToCart: FC<IProps> = ({ order, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;

  const addOrderToCart = () => {
    if (!localStorage.getItem('orderList')) {
      const arrOrder = [];
      arrOrder.push(order);

      localStorage.setItem('orderList', JSON.stringify(arrOrder));
    } else {
      const arrOrder = JSON.parse(localStorage.getItem('orderList')!);
      let thisDishInArrOrder = false;

      const checkingOrderArrMatches = arrOrder.map((value: IOrderItem) => {
        if (value.name == order.name) {
          if (order.dishType != 'pizza') {
            thisDishInArrOrder = true;
            const quantity = value.quantity + order.quantity;

            return {
              ...value,
              quantity,
            };
          } else {
            const size = (order as IOrderItem).parameters.size == (value as IOrderItem).parameters.size;
            const basis = (order as IOrderItem).parameters.basis == (value as IOrderItem).parameters.basis;
            const extraIngredientsZero = (order as IOrderItem).parameters.extraIngredients.length + (value as IOrderItem).parameters.extraIngredients.length != 0;
            const extraIngredientsLenght = (order as IOrderItem).parameters.extraIngredients.length == (value as IOrderItem).parameters.extraIngredients.length;

            if (size && basis && extraIngredientsZero == false) {
              thisDishInArrOrder = true;
              const quantity = value.quantity + order.quantity;

              return {
                ...value,
                quantity,
              };
            } else if (size && basis && extraIngredientsLenght) {
              const chekingArr = [];

              (value as IOrderItem).parameters.extraIngredients.forEach((value: IExtraIngredient) => {
                for (let i = 0; i < (order as IOrderItem).parameters.extraIngredients.length; i++) {
                  const name = value.name == (order as IOrderItem).parameters.extraIngredients[i].name;
                  const qty = value.quantity == (order as IOrderItem).parameters.extraIngredients[i].quantity;

                  if (name && qty) chekingArr.push(true);
                }
              });

              if (chekingArr.length == (order as IOrderItem).parameters.extraIngredients.length) {
                thisDishInArrOrder = true;
                const quantity = value.quantity + order.quantity;

                return {
                  ...value,
                  quantity,
                };
              } else {
                return value;
              }
            } else {
              return value;
            }
          }
        } else {
          return value;
        }
      });

      if (!thisDishInArrOrder) {
        checkingOrderArrMatches.push(order);
      }

      localStorage.setItem('orderList', JSON.stringify(checkingOrderArrMatches));
    }
  };

  return (
    <button onClick={addOrderToCart} className="bd mt15 wt270 p5 bdr10 fs16 fw600 bkgr__tra  bkgr-col__orn-wh">
      {text.addToCar}
    </button>
  );
};

export default BtnAddToCart;
