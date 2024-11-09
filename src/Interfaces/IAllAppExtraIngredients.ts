import IExtraIngredient from './IExtraIngredient';

export default interface IAllAppExtraIngredients {
  _id: string;
  dishType: string;
  listExtraIngredients: IExtraIngredient[];
}
