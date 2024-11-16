import IProduct from './IProduct';
import IBasis from './IBasis';
import IAddExtraIngredient from './IAddExtraIngredient';

export default interface IOrder {
  _id: string;
  idOrderList: string;
  price: number;
  data: IProduct;
  priceExtra: number;
  quantity: number;

  extraIngredients: IAddExtraIngredient[];
  basis: IBasis;
  quantityPcsInOrder: number;
  weight: number;
  size: number;
  units: string;
}
