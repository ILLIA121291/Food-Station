import IOrder from '../../../../../interfaces/IOrder';
import arraysComparisonExtraIngredients from './arraysComparisonExtraIngredients';

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
    // Дейстивя если order с такми точно _id уже есть массиве orderList;
    if (order._id == value._id) {
      // Действия по сравнению параметров order и value;
      const size = order.parameters.size == value.parameters.size;
      const basis = order.parameters.basis.name == value.parameters.basis.name;
      const extraIngredients = arraysComparisonExtraIngredients(order.parameters.extraIngredients, value.parameters.extraIngredients);

      // Дейстия если параметры order и value несовпадают - это ознчает что это разные заказы;
      if (!size || !basis || !extraIngredients) {
        return value;
      }

      // Действия если сравниваемые order и value полностью одинаковые;
      if (size && basis && extraIngredients) {
        // Информирование о том что такой же точно order уже есть в orderList;
        thisOrderInOrderList = true;
        // Увеличение количества в уже существующем order который уже находиться в orderList;
        const quantity = value.quantity + order.quantity;
        // Возварт обновленного order в checkingOrderList;
        return {
          ...value,
          quantity,
        };
      }

      // Возврат value если верхние if несработали;
      return value;
    }

    // Действие если при переборе массива checkingOrderList order._id не равет value._id;
    return value;
  });

  // RETURN FUNCTION ------------------------------------
  return { checkingOrderList, thisOrderInOrderList };
};

export default checkingIsOrderInOrderList;
