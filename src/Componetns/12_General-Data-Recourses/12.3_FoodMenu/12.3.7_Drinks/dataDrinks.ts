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

// Interfaces ------------------------------
export interface IDrink {
  name: string;
  img: string;
  volume: number;
  price: number;
  isPopular: boolean;
  dishType: 'drink';
  ingredients: string[];
  tags: string[];
}

// Tags ------------------------------------------------
const tags: string[] = ['juices', 'soft drinks', 'tea', 'alcohol', 'water'];

// Products -----------------------------------------------
const products: IDrink[] = [
  {
    name: 'coca-cala',
    img: CocaCala,
    volume: 1,
    price: 2.49,
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['soft drinks'],
  },
  {
    name: 'cranberrysaft',
    img: Cranberrysaft,
    volume: 0.5,

    price: 1.99,
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['juices'],
  },
  {
    name: 'orange drink',
    img: OrangeDrink,
    volume: 0.45,

    price: 0.99,
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['soft drinks'],
  },
  {
    name: 'green tea mango',
    img: GreenTeaMango,
    volume: 0.5,

    price: 1.49,
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['tea'],
  },
  {
    name: 'cherry juice',
    img: CherryJuice,
    volume: 1,

    price: 2.69,
    isPopular: false,
    dishType: 'drink',
    ingredients: ['cherry juice'],
    tags: ['juices'],
  },
  {
    name: 'black tea lemon',
    img: BlackTeaLemon,
    volume: 0.5,

    price: 1.49,
    isPopular: false,
    dishType: 'drink',
    ingredients: [],
    tags: ['tea'],
  },
  {
    name: 'orange juice',
    img: OrangeJuice,
    volume: 1,

    price: 2.69,
    isPopular: false,
    dishType: 'drink',
    ingredients: ['orange juice'],
    tags: ['juices'],
  },
  {
    name: 'drinking water',
    img: DrinkingWater,
    volume: 0.5,

    price: 0.59,
    isPopular: false,
    dishType: 'drink',
    ingredients: ['drinking water'],
    tags: ['soft drinks', 'water'],
  },
  {
    name: 'apple juice',
    img: AppleJuice,
    volume: 1,

    price: 2.69,
    isPopular: false,
    dishType: 'drink',
    ingredients: ['apple juice'],
    tags: ['juices'],
  },
  {
    name: 'beer "Bud"',
    img: BeerBud,
    volume: 0.45,

    price: 1.79,
    isPopular: false,
    dishType: 'drink',
    ingredients: ['nonalcoholic beer'],
    tags: ['beer'],
  },
];

const dataDrinks: IDataProduct = {
  name: 'drinks',
  products,
  tags,
};

export default dataDrinks;
