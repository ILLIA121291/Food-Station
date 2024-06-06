import California from './img/California.jpg';
import TampurCheese from './img/tampur_cheese.jpg';
import KuppuMake from './img/Kuppumake.jpg';
import Philadelphia from './img/Philadelphia.jpg';
import CaliforniaCheese from './img/Californiacheese.jpg';
import BeefTumpur from './img/beeftumpur.jpg';
import PhiladelphiaWithEel from './img/philadelphiawitheel.jpg';
import NewYork from './img/newyork.jpg';
import Kyoto from './img/kyoto.jpg';
import Hokkaido from './img/hokkaido.jpg';
import YasaiMaki from './img/yasaimaki.jpg';
import SpicyEel from './img/spicyeel.jpg';
import Chile from './img/chile.jpg';
import LuxuryShrimp from './img/luxuryshrimp.jpg';
import Tuna from './img/tuna.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['salmon roll', 'vegetarian', 'spicy', 'baked', 'beef roll'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'california',
    img: California,
    size: [
      {
        size: 6,
        units: 'qty',
        weight: 182,
        price: 3.69,
        quantity: 6,
      },
    ],

    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fresh cucumbers', 'snow crab', 'masago caviar', 'hot sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'tampur cheese',
    img: TampurCheese,
    size: [
      {
        size: 8,
        units: 'qty',
        weight: 205,
        price: 2.79,
        quantity: 8,
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'breadcrumbs'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'Kuppu make',
    img: KuppuMake,
    size: [
      {
        weight: 98,
        price: 1.59,
        quantity: 6,
        size: 6,
        units: 'qty',
      },
    ],

    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fresh cucumbers', 'sesame'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'philadelphia',
    img: Philadelphia,

    size: [
      {
        quantity: 6,
        weight: 228,
        price: 7.99,
        size: 6,
        units: 'qty',
      },
    ],

    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'fresh cucumbers', 'salmon'],
    tags: ['salmon roll'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'California cheese',
    img: CaliforniaCheese,

    size: [
      {
        quantity: 6,
        weight: 182,
        price: 3.49,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'masago caviar'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'beef tumpur',
    img: BeefTumpur,

    size: [
      {
        quantity: 8,
        weight: 210,
        price: 3.49,
        size: 8,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'bacon', 'spicy sauce', 'cream cheese', 'fresh cucumbers', 'breadcrumbs'],
    tags: ['beef roll', 'spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'philadelphia with eel',
    img: PhiladelphiaWithEel,

    size: [
      {
        quantity: 6,
        weight: 182,
        price: 4.59,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'smoked eel', 'unagi sauce', 'sesame'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'new york',
    img: NewYork,

    size: [
      {
        quantity: 6,
        weight: 168,
        price: 2.39,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'mayonnaise', 'fresh cucumbers', 'fried salmon skin', 'sesame'],
    tags: ['salmon roll'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'kyoto',
    img: Kyoto,

    size: [
      {
        quantity: 6,
        weight: 101,
        price: 1.99,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fried salmon skin', 'fresh cucumbers'],
    tags: ['salmon roll'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'hokkaido',
    img: Hokkaido,

    size: [
      {
        quantity: 6,
        weight: 168,
        price: 3.59,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'snow crab', 'smoked salmon', 'sesame'],
    tags: ['salmon roll'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'yasai maki',
    img: YasaiMaki,

    size: [
      {
        quantity: 8,
        weight: 163,
        price: 2.39,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fresh cucumbers', 'tomatoes', 'bell pepper', 'iceberg lettuce', 'sesame'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'spicy eel',
    img: SpicyEel,

    size: [
      {
        quantity: 6,
        weight: 96,
        price: 2.99,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'spice sauce', 'smoked eel'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'chile',
    img: Chile,

    size: [
      {
        quantity: 6,
        weight: 189,
        price: 2.69,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'tomatoes', 'snow crab', 'spice sauce'],
    tags: ['spicy', 'baked'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'luxury shrimp',
    img: LuxuryShrimp,

    size: [
      {
        quantity: 8,
        weight: 173,
        price: 4.29,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'shrimp', 'mayonnaise', 'batter', 'breadcrumbs', 'sesame'],
    tags: ['baked'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'tuna',
    img: Tuna,

    size: [
      {
        quantity: 6,
        weight: 96,
        price: 2.49,
        size: 6,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'tuna'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
];

const dataRolls: IDataProduct = {
  name: 'rolls',
  products,
  tags,
};

export default dataRolls;
