import dataPizza from '../12.3.1_Pizza/dataPizza';
import dataRolls from '../12.3.2_Rolls/dataRolls';
import dataSushi from '../12.3.3_Sushi/dataSushi';
import dataSoup from '../12.3.4_Soup/dataSoup';
import dataSnacks from '../12.3.5_Snacks/dataSnacks';
import dataSauces from '../12.3.6_Sauces/dataSauces';
import dataDrinks from '../12.3.7_Drinks/dataDrinks';
import dataDessert from '../12.3.8_Dessert/dataDessert';
import dataSets from '../12.3.9_Sets/dataSets';

import { IRoll } from '../12.3.2_Rolls/dataRolls';
import { ISushi } from '../12.3.3_Sushi/dataSushi';
import { ISoup } from '../12.3.4_Soup/dataSoup';
import { ISnack } from '../12.3.5_Snacks/dataSnacks';
import { ISauce } from '../12.3.6_Sauces/dataSauces';
import { IDrink } from '../12.3.7_Drinks/dataDrinks';
import { IDessert } from '../12.3.8_Dessert/dataDessert';
import { ISet } from '../12.3.9_Sets/dataSets';

// Types ------------------------------------

export type TAllProducts = IRoll | ISushi | ISoup | ISnack | ISauce | IDrink | IDessert | ISet;

// Interfaces ------------------------------
export interface IDataProduct {
  name: string;
  products: any[];
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
