import Cheesecake from './img/Cheesecake.jpg';
import DessertMango from './img/DessertMango.jpg';
import DessertRaspberries from './img/dessertraspberries.jpg';
import DessertTiramisu from './img/desserttiramisu.jpg';
import ChocolateIceCream from './img/chocolateicecream.jpg';
import VanillaIceCream from './img/vanillaicecream.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';

// Interfaces ------------------------------
export interface IDessert {
  name: string;
  img: string;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'dessert';
  ingredients: string[];
  tags: string[];
}

// Tags ------------------------------------------------
const tags: string[] = ['cake', 'ice cream', 'dessert'];

// Products -----------------------------------------------
const products: IDessert[] = [
  {
    name: 'cheesecake',
    img: Cheesecake,
    weight: 130,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['shortbread', 'curd cheese', 'cream'],
    tags: ['cake'],
  },
  {
    name: 'dessert "mango"',
    img: DessertMango,
    weight: 120,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['mango', 'passion fruit', 'cream', 'white chocolate icing', 'cream cheese', 'gelatin', 'cocoa'],
    tags: ['dessert'],
  },
  {
    name: 'dessert "raspberries"',
    img: DessertRaspberries,
    weight: 120,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['raspberries', 'cream', 'white chocolate icing', 'cream cheese', 'gelatin', 'cocoa'],
    tags: ['dessert'],
  },
  {
    name: 'dessert "tiramisu"',
    img: DessertTiramisu,
    weight: 125,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['cream', 'liqueur', 'cookies', 'coffee'],
    tags: ['dessert'],
  },
  {
    name: 'chocolate ice cream',
    img: ChocolateIceCream,
    weight: 120,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['chocolate ice cream', 'salted caramel', 'peanuts'],
    tags: ['ice cream'],
  },
  {
    name: 'vanilla ice cream',
    img: VanillaIceCream,
    weight: 110,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['vanilla ice cream', 'salted caramel', 'peanuts', 'chocolate'],
    tags: ['ice cream'],
  },
];

const dataDessert: IDataProduct = {
  name: 'dessert',
  products,
  tags,
};

export default dataDessert;
