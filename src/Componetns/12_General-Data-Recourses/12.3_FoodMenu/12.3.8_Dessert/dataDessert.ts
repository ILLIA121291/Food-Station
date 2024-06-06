import Cheesecake from './img/Cheesecake.jpg';
import DessertMango from './img/DessertMango.jpg';
import DessertRaspberries from './img/dessertraspberries.jpg';
import DessertTiramisu from './img/desserttiramisu.jpg';
import ChocolateIceCream from './img/chocolateicecream.jpg';
import VanillaIceCream from './img/vanillaicecream.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['cake', 'ice cream', 'dessert'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'cheesecake',
    img: Cheesecake,

    size: [
      {
        weight: 130,
        price: 2.99,
        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['shortbread', 'curd cheese', 'cream'],
    tags: ['cake'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'dessert "mango"',
    img: DessertMango,

    size: [
      {
        weight: 120,
        price: 2.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['mango', 'passion fruit', 'cream', 'white chocolate icing', 'cream cheese', 'gelatin', 'cocoa'],
    tags: ['dessert'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'dessert "raspberries"',
    img: DessertRaspberries,

    size: [
      {
        weight: 120,
        price: 2.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['raspberries', 'cream', 'white chocolate icing', 'cream cheese', 'gelatin', 'cocoa'],
    tags: ['dessert'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'dessert "tiramisu"',
    img: DessertTiramisu,

    size: [
      {
        weight: 125,
        price: 2.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['cream', 'liqueur', 'cookies', 'coffee'],
    tags: ['dessert'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'chocolate ice cream',
    img: ChocolateIceCream,

    size: [
      {
        weight: 120,
        price: 2.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['chocolate ice cream', 'salted caramel', 'peanuts'],
    tags: ['ice cream'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'vanilla ice cream',
    img: VanillaIceCream,

    size: [
      {
        weight: 110,
        price: 2.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['vanilla ice cream', 'salted caramel', 'peanuts', 'chocolate'],
    tags: ['ice cream'],
    extraIngredients: [],
    basis: [],
  },
];

const dataDessert: IDataProduct = {
  name: 'dessert',
  products,
  tags,
};

export default dataDessert;
