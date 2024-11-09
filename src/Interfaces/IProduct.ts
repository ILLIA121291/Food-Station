import ISize from "./ISize";
import IBasis from "./IBasis";
import IExtraIngredient from "./IExtraIngredient";

export default interface IProduct {
  _id: string;
  name: string;
  img: string;
  size: ISize[];
  basis: IBasis[];
  ingredients: string[];
  extraIngredients: IExtraIngredient[];
  isPopular: boolean;
  dishType: string;
  tags: string[];
}
