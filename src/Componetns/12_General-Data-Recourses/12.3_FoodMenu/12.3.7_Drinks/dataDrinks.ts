import CocaCala from './img/coca-cala.jpg';
import Cranberrysaft from './img/Cranberrysaft.jpg';
import OrangeDrink from './img/orangedrink.jpg';
import GreenTeaMango from './img/Greenteamango.jpg';
import CherryJuice from './img/cherryjuice.jpg';
import BlackTeaLemon from './img/Blacktealemon.jpg';
import OrangeJuice from './img/orangejuice.jpg';
import DrinkingWater from './img/drinkingwater.jpg';
import AppleJuice from './img/Applejuice.jpg';
import BeerBud from './img/beerBud.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['juices', 'soft drinks', 'tea', 'alcohol', 'water'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'coca-cala',
    img: CocaCala,

    size: [
      {
        volume: 1,
        price: 2.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['soft drinks'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'cranberrysaft',
    img: Cranberrysaft,

    size: [
      {
        volume: 0.5,
        price: 1.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['juices'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'orange drink',
    img: OrangeDrink,

    size: [
      {
        volume: 0.45,
        price: 0.99,
        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['soft drinks'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'green tea mango',
    img: GreenTeaMango,

    size: [
      {
        volume: 0.5,
        price: 1.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['tea'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'cherry juice',
    img: CherryJuice,

    size: [
      {
        volume: 1,
        price: 2.69,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: ['cherry juice'],
    tags: ['juices'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'black tea lemon',
    img: BlackTeaLemon,

    size: [
      {
        volume: 0.5,
        price: 1.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['tea'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'orange juice',
    img: OrangeJuice,

    size: [
      {
        volume: 1,
        price: 2.69,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: ['orange juice'],
    tags: ['juices'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'drinking water',
    img: DrinkingWater,

    size: [
      {
        volume: 0.5,
        price: 0.59,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: ['drinking water'],
    tags: ['soft drinks', 'water'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'apple juice',
    img: AppleJuice,

    size: [
      {
        volume: 1,
        price: 2.69,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: ['apple juice'],
    tags: ['juices'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'beer "Bud"',
    img: BeerBud,

    size: [
      {
        volume: 0.45,
        price: 1.79,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'drink',
    ingredients: ['nonalcoholic beer'],
    tags: ['beer'],
    extraIngredients: [],
    basis: [],
  },
];

const dataDrinks: IDataProduct = {
  name: 'drinks',
  products,
  tags,
};

export default dataDrinks;
