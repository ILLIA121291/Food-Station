import IAddExtraIngredient from '../../../interfaces/IAddExtraIngredient';

const arraysComparisonExtraIngredients = (orderEI: IAddExtraIngredient[], valueEI: IAddExtraIngredient[]): boolean => {
  // Результат сравнеия массивов orderEI и valueEI;
  let checkResult: boolean = false;

  // Массив для вычислений;
  const chekingArr = [];

  // Процес перебора мыссивов;
  valueEI.forEach((value: IAddExtraIngredient) => {
    for (let i = 0; i < orderEI.length; i++) {
      const name = value.name == orderEI[i].name;
      const qty = value.quantity == orderEI[i].quantity;

      if (name && qty) chekingArr.push(true);
    }
  });

  // Процес вычисления результатов;
  if (chekingArr.length == orderEI.length && chekingArr.length == valueEI.length) {
    checkResult = true;
  }

  // RETURN FUNCTION ---------------------------------
  return checkResult;
};

export default arraysComparisonExtraIngredients;
