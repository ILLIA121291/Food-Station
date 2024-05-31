import { FC } from 'react';
import { IExtraIngredient, IOrderPizza } from '../14.6.2_PizzaCardProduct/PizzaCardProduct';
import english from '../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { IOrderBasic } from '../14.6.3_BasicCardProduct/BasicCardProduct';

interface IProps {
  order: IOrderPizza | IOrderBasic;
  langugeApp: typeof english;
}

const BtnAddToCart: FC<IProps> = ({ order, langugeApp }) => {
  const text = langugeApp.textCardProduct.textGeneral;

  const addOrderToCart = () => {
    if (!localStorage.getItem('order')) {
      const arrOrder = [];
      arrOrder.push(order);

      localStorage.setItem('order', JSON.stringify(arrOrder));
    } else {
      const arrOrder = JSON.parse(localStorage.getItem('order')!);
      let thisDishInArrOrder = false;

      const checkingOrderArrMatches = arrOrder.map((value: IOrderPizza | IOrderBasic) => {
        if (value.parameters.name == order.parameters.name) {
          if (order.parameters.dishType != 'pizza') {
            thisDishInArrOrder = true;
            const quantity = value.total.quantity + order.total.quantity;

            return {
              ...value,
              total: {
                ...value.total,
                quantity,
              },
            };
          } else {
            const size = (order as IOrderPizza).parameters.size == (value as IOrderPizza).parameters.size;
            const basis = (order as IOrderPizza).parameters.basis == (value as IOrderPizza).parameters.basis;
            const extraIngredientsZero = (order as IOrderPizza).parameters.extraIngredients.length + (value as IOrderPizza).parameters.extraIngredients.length != 0;
            const extraIngredientsLenght = (order as IOrderPizza).parameters.extraIngredients.length == (value as IOrderPizza).parameters.extraIngredients.length;

            if (size && basis && extraIngredientsZero == false) {
              thisDishInArrOrder = true;
              const quantity = value.total.quantity + order.total.quantity;

              return {
                ...value,
                total: {
                  ...value.total,
                  quantity,
                },
              };
            } else if (size && basis && extraIngredientsLenght) {
              const chekingArr = [];

              (value as IOrderPizza).parameters.extraIngredients.forEach((value: IExtraIngredient) => {
                for (let i = 0; i < (order as IOrderPizza).parameters.extraIngredients.length; i++) {
                  const name = value.name == (order as IOrderPizza).parameters.extraIngredients[i].name;
                  const qty = value.quantity == (order as IOrderPizza).parameters.extraIngredients[i].quantity;

                  if (name && qty) chekingArr.push(true);
                }
              });

              if (chekingArr.length == (order as IOrderPizza).parameters.extraIngredients.length) {
                thisDishInArrOrder = true;
                const quantity = value.total.quantity + order.total.quantity;

                return {
                  ...value,
                  total: {
                    ...value.total,
                    quantity,
                  },
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

      localStorage.setItem('order', JSON.stringify(checkingOrderArrMatches));
    }
  };

  return (
    <button onClick={addOrderToCart} className="bd mt15 wt270 p5 bdr10 fs16 fw600 bkgr__tra  bkgr-col__orn-wh">
      {text.addToCar}
    </button>
  );
};

export default BtnAddToCart;
