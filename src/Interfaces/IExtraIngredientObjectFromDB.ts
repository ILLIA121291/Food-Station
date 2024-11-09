import IExtraIngredient from './IExtraIngredient';

export default interface IExtraIngredientObjectFormDB {
  _id: string;
  dishType: string;
  listExtraIngredients: IExtraIngredient[];
}
