import Syake from './img/Syake.jpg';
import SpicySyake from './img/spicysyake.jpg';
import Chuka from './img/Chuka.jpg';
import Unagi from './img/Unagi.jpg';
import Ebi from './img/Ebi.jpg';
import Tomago from './img/Tomago.jpg';
import HotHotate from './img/HotHotate.jpg';
import Hotate from './img/Hotate.jpg';
import HotKoonsei from './img/HotKoonsei.jpg';
import HotMaguro from './img/HotMaguro.jpg';
import HotSyake from './img/HotSyake.jpg';
import HotUnagi from './img/HotUnagi.jpg';
import SpiceKunsei from './img/SpiceKunsei.jpg';
import SpiceMaguro from './img/Spicemaguro.jpg';
import SpiceHotate from './img/Spicehotate.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['spicy', 'vegetarian'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'syake',
    img: Syake,

    size: [
      {
        quantity: 1,
        weight: 30,
        price: 1.49,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'lightly salted salmon'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'spicy syake',
    img: SpicySyake,

    size: [
      {
        quantity: 1,
        weight: 35,
        price: 1.49,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'lightly salted salmon', 'spice sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'chuka',
    img: Chuka,

    size: [
      {
        quantity: 1,
        weight: 30,
        price: 0.79,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'chuka salad'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'unagi',
    img: Unagi,

    size: [
      {
        quantity: 1,
        weight: 32,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'unagi sauce', 'smoked eel', 'sesame'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'Ebi',
    img: Ebi,

    size: [
      {
        quantity: 1,
        weight: 30,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'shrimp'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'tomago',
    img: Tomago,

    size: [
      {
        quantity: 1,
        weight: 32,
        price: 0.79,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'unagi sauce', 'omelette', 'sesame'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'hot hotate',
    img: HotHotate,

    size: [
      {
        quantity: 1,
        weight: 32,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'scallop', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'hotate',
    img: Hotate,

    size: [
      {
        quantity: 1,
        weight: 30,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'scallop'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'hot koonsei',
    img: HotKoonsei,

    size: [
      {
        quantity: 1,
        weight: 32,
        price: 1.49,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'smoked salmon', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'hot maguro',
    img: HotMaguro,

    size: [
      {
        quantity: 1,
        weight: 32,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'tuna', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'hot syake',
    img: HotSyake,

    size: [
      {
        quantity: 1,
        weight: 32,
        price: 1.49,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'lightly salted salmon', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'hot unagi',
    img: HotUnagi,

    size: [
      {
        quantity: 1,
        weight: 32,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'lightly salted eel', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'spice kunsei',
    img: SpiceKunsei,

    size: [
      {
        quantity: 1,
        weight: 36,
        price: 1.49,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'smoked salmon', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'spice maguro',
    img: SpiceMaguro,

    size: [
      {
        quantity: 1,
        weight: 35,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'tuna', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'spice hotate',
    img: SpiceHotate,

    size: [
      {
        quantity: 1,
        weight: 35,
        price: 1.39,
      },
    ],
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'scallop', 'spicy sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
];

const dataSushi: IDataProduct = {
  name: 'sushi',
  products,
  tags,
};

export default dataSushi;
