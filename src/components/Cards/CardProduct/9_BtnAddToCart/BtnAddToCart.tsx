import { FC } from 'react';
import english from '../../../../language/english';
import { useSelector, useDispatch } from 'react-redux';
import { addToOrderList } from '../../../../pages/2_Cart-Page/2.1_CartPage/sliceCart';
import { IStateStore } from '../../../../../src/app/stateStore';
import IOrder from '../../../../Interfaces/IOrder';
import IAddExtraIngredient from '../../../../Interfaces/IAddExtraIngredient';

// Props Interface --------------------------------------------------
interface IProps {
  order: IOrder;
  langugeApp: typeof english;
}

const BtnAddToCart: FC<IProps> = ({ order, langugeApp }) => {
  const dispatch = useDispatch();
  const orderList = useSelector<IStateStore, IOrder[]>(state => state.cart.orderList);
  const text = langugeApp.textCardProduct.textGeneral;

  const addOrderToCart = () => {
    if (orderList.length == 0) {
      dispatch(addToOrderList([order]));
    } else {
      let thisDishInOrderList = false;

      const checkingOrderList = orderList.map((value: IOrder) => {
        if (value.name == order.name) {
          if (order.dishType != 'pizza') {
            thisDishInOrderList = true;
            const quantity = value.quantity + order.quantity;

            return {
              ...value,
              quantity,
            };
          } else {
            const size = order.parameters.size == value.parameters.size;
            const basis = order.parameters.basis == value.parameters.basis;
            const extraIngredientsZero = order.parameters.extraIngredients.length + value.parameters.extraIngredients.length != 0;
            const extraIngredientsLenght = order.parameters.extraIngredients.length == value.parameters.extraIngredients.length;

            if (size && basis && extraIngredientsZero == false) {
              thisDishInOrderList = true;
              const quantity = value.quantity + order.quantity;

              return {
                ...value,
                quantity,
              };
            } else if (size && basis && extraIngredientsLenght) {
              const chekingArr = [];

              value.parameters.extraIngredients.forEach((value: IAddExtraIngredient) => {
                for (let i = 0; i < order.parameters.extraIngredients.length; i++) {
                  const name = value.name == order.parameters.extraIngredients[i].name;
                  const qty = value.quantity == order.parameters.extraIngredients[i].quantity;

                  if (name && qty) chekingArr.push(true);
                }
              });

              if (chekingArr.length == order.parameters.extraIngredients.length) {
                thisDishInOrderList = true;
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

      if (!thisDishInOrderList) {
        checkingOrderList.push(order);
        dispatch(addToOrderList(checkingOrderList));
      }

      dispatch(addToOrderList(checkingOrderList));
    }
  };

  return (
    <button onClick={addOrderToCart} className="bd mt15 wt280 p5 bdr10 fs16 fw600 bkgr__tra  bkgr-col__orn-wh">
      {text.addToCar}
    </button>
  );
};

export default BtnAddToCart;
