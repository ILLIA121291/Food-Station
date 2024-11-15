import IAddExtraIngredient from '../../../../../interfaces/IAddExtraIngredient';
import IOrder from '../../../../../interfaces/IOrder';
import arraysComparisonExtraIngredients from './arraysСomparisonExtraIngredients';

// Interface Function Return ------------------------------------------------
interface IFunReturn {
  checkingOrderList: IOrder[];
  thisOrderInOrderList: boolean;
}

// FUNCTION --------------------------------------------------------------------
const checkingIsOrderInOrderList = (order: IOrder, orderList: IOrder[]): IFunReturn => {
  // Индикатор который сообщает о том существует уже данный order в orderList;
  let thisOrderInOrderList: boolean = false;

  // Перебераем orderList -------------------------------
  const checkingOrderList = orderList.map((value: IOrder) => {
    // Пропуск других order котрые не совпадают с новым order;
    if (order._id != value._id) {
      return value;
    } else {
      // Дейстивя если order с такми точно _id уже есть массиве order list;

      const size = order.parameters.size == value.parameters.size;
      const basis = order.parameters.basis.name == value.parameters.basis.name;
      const extraIngredients = arraysComparisonExtraIngredients(order.parameters.extraIngredients, value.parameters.extraIngredients);

      if (size && basis && extraIngredients) {
        thisOrderInOrderList = true;
        const quantity = value.quantity + order.quantity;
        return {
          ...value,
          quantity,
        };
      } else {
        console.log('I work');
        thisOrderInOrderList = false;
        return value;
      }
    }
  });

  // RETURN FUNCTION ------------------------------------
  return { checkingOrderList, thisOrderInOrderList };
};

export default checkingIsOrderInOrderList;
