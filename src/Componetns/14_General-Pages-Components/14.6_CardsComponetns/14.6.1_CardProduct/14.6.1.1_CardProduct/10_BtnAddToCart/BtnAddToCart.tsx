import { FC } from 'react';
import { IExtraIngredient } from '../../14.6.2_PizzaCardProduct/PizzaCardProduct';
import english from '../../../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { useSelector, useDispatch } from 'react-redux';
import { addToOrderList } from '../../../../../15_Pages/15.2_Cart-Page/15.2.1_CartPage/sliceCart';
import { IStateStore } from '../../../../../13_App-Components/13.1_App/stateStore';
import { IOrderItem } from '../1_CardProduct/CardProduct';

// Props Interface --------------------------------------------------
interface IProps {
  order: IOrderItem;
  langugeApp: typeof english;
}

const BtnAddToCart: FC<IProps> = ({ order, langugeApp }) => {
  const dispatch = useDispatch();
  const orderList = useSelector<IStateStore, IOrderItem[]>(state => state.cart.orderList);
  const text = langugeApp.textCardProduct.textGeneral;

  const addOrderToCart = () => {
    if (orderList.length == 0) {
      dispatch(addToOrderList([order]));
    } else {
      let thisDishInOrderList = false;

      const checkingOrderList = orderList.map((value: IOrderItem) => {
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

              value.parameters.extraIngredients.forEach((value: IExtraIngredient) => {
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
