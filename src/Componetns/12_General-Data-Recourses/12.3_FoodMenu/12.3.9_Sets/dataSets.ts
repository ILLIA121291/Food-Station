import PizzaSet1 from './img/pizzaset1.jpg';
import PizzaSet2 from './img/PizzaSet2.jpg';
import PizzaSet3 from './img/PizzaSet3.jpg';
import PizzaSet4 from './img/PizzaSet4.jpg';
import PizzaSet5 from './img/PizzaSet5.jpg';
import PizzaSet6 from './img/PizzaSet6.jpg';
import PizzaSet7 from './img/PizzaSet7.jpg';
import PizzaSet8 from './img/PizzaSet8.jpg';
import LunchSet1 from './img/LunchSet1.jpg';
import LunchSet2 from './img/LunchSet2.jpg';
import LunchSet3 from './img/LunchSet3.jpg';
import LunchSet4 from './img/LunchSet4.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['pizza-set', 'sushi-set', 'lunch-set'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'pizza set 1',
    img: PizzaSet1,

    size: [
      {
        weight: 1608,
        price: 12.19,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza medium 2 ps', 'poll 6ps', 'coca-cola 0.5l'],
    tags: ['pizza-set', 'sushi-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'pizza set 2',
    img: PizzaSet2,

    size: [
      {
        weight: 960,
        price: 11.39,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza lage 1 ps', 'poll 16ps'],
    tags: ['pizza-set', 'sushi-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'pizza set 3',
    img: PizzaSet3,

    size: [
      {
        weight: 2575,
        price: 19.79,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza medium 6 ps'],
    tags: ['pizza-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'pizza set 4',
    img: PizzaSet4,

    size: [
      {
        weight: 1680,
        price: 14.19,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza medium 3 ps'],
    tags: ['pizza-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'pizza set 5',
    img: PizzaSet5,

    size: [
      {
        weight: 1265,
        price: 17.59,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 1 ps', 'rolls 28pz'],
    tags: ['pizza-set', 'sushi-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'pizza set 6',
    img: PizzaSet6,

    size: [
      {
        weight: 1091,
        price: 17.0,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 1 ps', 'rolls 26pz'],
    tags: ['pizza-set', 'sushi-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'pizza set 7',
    img: PizzaSet7,

    size: [
      {
        weight: 886,
        price: 10.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 1 ps', 'rolls 12pz'],
    tags: ['pizza-set', 'sushi-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'pizza set 8',
    img: PizzaSet8,

    size: [
      {
        weight: 965,
        price: 10.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 2 ps'],
    tags: ['pizza-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'lunch set 1',
    img: LunchSet1,

    size: [
      {
        weight: 475,
        price: 5.69,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'rolls 8px'],
    tags: ['sushi-set', 'lunch-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'lunch set 2',
    img: LunchSet2,

    size: [
      {
        weight: 530,
        price: 5.39,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'rolls 8px'],
    tags: ['sushi-set', 'lunch-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'lunch set 3',
    img: LunchSet3,

    size: [
      {
        weight: 590,
        price: 4.89,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'chicken noodles 1 ps'],
    tags: ['lunch-set'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'lunch set 4',
    img: LunchSet4,

    size: [
      {
        weight: 590,
        price: 4.49,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'chicken teriyaki rice 1 ps'],
    tags: ['lunch-set'],
    extraIngredients: [],
    basis: [],
  },
];

const dataSets: IDataProduct = {
  name: 'sets',
  products,
  tags,
};

export default dataSets;
