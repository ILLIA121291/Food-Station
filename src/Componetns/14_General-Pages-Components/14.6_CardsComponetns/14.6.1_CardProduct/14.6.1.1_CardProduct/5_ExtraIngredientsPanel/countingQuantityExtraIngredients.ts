import { IAddExtraIngredient } from '../1_CardProduct/CardProduct';

type Arr = IAddExtraIngredient[];

const countingQuantityExtraIngredients = (extraIngredientsArr: Arr) => {
  let displayQty: number = 0;

  if (extraIngredientsArr.length != 0) {
    extraIngredientsArr.forEach((value: IAddExtraIngredient) => {
      displayQty += value.quantity;
    });
  }

  return displayQty;
};

export default countingQuantityExtraIngredients;
