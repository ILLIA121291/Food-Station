import dataPizza from '../12.3.1_Pizza/dataPizza';
import dataRolls from '../12.3.2_Rolls/dataRolls';
import dataSushi from '../12.3.3_Sushi/dataSushi';
import dataSoup from '../12.3.4_Soup/dataSoup';
import dataSnacks from '../12.3.5_Snacks/dataSnacks';
import dataSauces from '../12.3.6_Sauces/dataSauces';
import dataDrinks from '../12.3.7_Drinks/dataDrinks';
import dataDessert from '../12.3.8_Dessert/dataDessert';
import dataSets from '../12.3.9_Sets/dataSets';

// Basis Interface ------------------------------------
export interface IBasis {
  name: string;
  price: number;
}

// Size Interface ------------------------------------
export interface ISize {
  size: number;
  units: string;
  price: number;
  weight: number;
  quantity: number;
}

// Extra Ingredients Interface -------------------------
export interface IExtraIngredient {
  name: string;
  price: number;
}

// Product Interfaces ------------------------------
export interface IProduct {
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

// Data Products Interface --------------------------
export interface IDataProduct {
  name: string;
  products: IProduct[];
  tags: string[];
}

// Data Products -------------------------
const dataProducts = {
  pizza: dataPizza,
  rolls: dataRolls,
  sushi: dataSushi,
  soup: dataSoup,
  snacks: dataSnacks,
  sauces: dataSauces,
  drinks: dataDrinks,
  dessert: dataDessert,
  sets: dataSets,
};

export default dataProducts;
