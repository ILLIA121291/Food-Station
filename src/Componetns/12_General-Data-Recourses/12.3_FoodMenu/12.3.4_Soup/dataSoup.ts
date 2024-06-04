import TomYum from './img/TomYum.jpg';
import MisoShiro from './img/Miso-shiro.jpg';
import TomKha from './img/TomKha.jpg';
import ChickenBroth from './img/chickenbroth.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['spicy', 'vegetarian'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'tom yum',
    img: TomYum,

    size: [
      {
        weight: 260,
        price: 3.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'soup',
    ingredients: ['cream', 'lemongrass', 'coconut milk', 'chili pepper', 'garlic', 'shrimp', 'rice'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'miso-shiro',
    img: MisoShiro,

    size: [
      {
        weight: 250,
        price: 2.2,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'soup',
    ingredients: ['wakame seaweed', 'soybeans', 'shiitake mushrooms', 'bean curd'],
    tags: ['vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'tom kha',
    img: TomKha,

    size: [
      {
        weight: 320,
        price: 3.99,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'soup',
    ingredients: ['vegetable oil', 'chili pepper', 'lemongrass', 'chicken broth', 'coconut milk', 'galangal'],
    tags: ['spicy'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'chicken broth',
    img: ChickenBroth,

    size: [
      {
        weight: 260,
        price: 2,

        quantity: 1,
      },
    ],
    isPopular: false,
    dishType: 'soup',
    ingredients: ['chicken', 'broth', 'wheat croutons'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
];

const dataSoup: IDataProduct = {
  name: 'soup',
  products,
  tags,
};

export default dataSoup;
