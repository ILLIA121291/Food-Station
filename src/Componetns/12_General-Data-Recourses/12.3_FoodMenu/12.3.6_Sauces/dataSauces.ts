import Spicy from './img/spicy.jpg';
import SweetSour from './img/SweetSour.jpg';
import Hot from './img/Hot.jpg';
import Chef from './img/Chef.jpg';
import Caesar from './img/Caesar.jpg';
import Teriyaki from './img/Teriyaki.jpg';
import Cheesy from './img/Cheesy.jpg';
import BBQ from './img/bbq.jpg';
import SushiSaucesSet from './img/sushisaucesset.jpg';
import Garlic from './img/Garlic.jpg';
import Ginger from './img/Ginger.jpg';
import SoySauce from './img/Soysauce.jpg';
import Wasabi from './img/Wasabi.jpg';
import Walnut from './img/Walnut.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['spicy', 'vegetarian'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'spicy',
    img: Spicy,

    size: [
      {
        weight: 50,
        price: 0.99,

        quantity: 1,
      },
    ],

    isPopular: false,
    dishType: 'sauce',
    ingredients: ['spicy sauces'],
    tags: ['spicy', 'vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'Sweet & sour',
    img: SweetSour,

    size: [
      {
        weight: 25,
        price: 0.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['sweet-sour sauce'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'Hot',
    img: Hot,

    size: [
      {
        weight: 50,
        price: 0.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['hot sauce'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'Chef',
    img: Chef,

    size: [
      {
        weight: 50,
        price: 0.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['garlic', 'mayonnaise', 'soy sauce', 'greens'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'Caesar',
    img: Caesar,

    size: [
      {
        weight: 50,
        price: 0.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['caesar sauce'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'teriyaki',
    img: Teriyaki,

    size: [
      {
        weight: 50,
        price: 0.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['teriyaki sauce'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'cheesy',
    img: Cheesy,

    size: [
      {
        weight: 25,
        price: 0.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['cheesy sauce'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'bbq',
    img: BBQ,

    size: [
      {
        weight: 25,
        price: 0.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['bbq sauce'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'sushi sauces set',
    img: SushiSaucesSet,

    size: [
      {
        weight: 90,
        price: 0.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['ginger', 'soy sauce', 'wasabi'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'garlic',
    img: Garlic,

    size: [
      {
        weight: 25,
        price: 0.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['garlic sauce'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'ginger',
    img: Ginger,

    size: [
      {
        weight: 30,
        price: 0.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['ginger'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'soy sauce',
    img: SoySauce,

    size: [
      {
        weight: 50,
        price: 0.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['soy sauce'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'wasabi',
    img: Wasabi,

    size: [
      {
        weight: 10,
        price: 0.29,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['wasabi'],
    tags: ['spicy', 'vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'walnut',
    img: Walnut,

    size: [
      {
        weight: 50,
        price: 1.39,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['walnut sauce'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
];

const dataSauces: IDataProduct = {
  name: 'sauces',
  products,
  tags,
};

export default dataSauces;
