import IProduct from './IProduct';
import IBasis from './IBasis';
import IAddExtraIngredient from './IAddExtraIngredient';

export default interface IOrder {
  _id: string;
  name: string;
  price: number;
  data: IProduct;
  priceExtra: number;
  quantity: number;
  dishType: string;
  parameters: {
    extraIngredients: IAddExtraIngredient[];
    basis: IBasis;
    quantity: number;
    weight: number;
    size: number;
    units: string;
    [key: string]: any;
  };
}
