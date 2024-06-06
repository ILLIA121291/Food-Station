import ChickenNuggets from './img/Chickennuggets.jpg';
import CountryStylePotatoes from './img/country-stylepotatoes.jpg';
import Potatoes from './img/potatoes.jpg';
import FrenchFries from './img/frenchfries.jpg';
import ChickenTeriyaki from './img/chickenteriyaki.jpg';
import CountryPotatoes from './img/Countrystylepotatoes.jpg';
import BuffaloWings from './img/buffalowings.jpg';
import ShrimpLux from './img/ShrimpLux.jpg';
import BeefPotatoes from './img/beefpotatoes.jpg';
import SausagesFrenchFries from './img/SausagesFrenchfries.jpg';

import { IDataProduct } from '../12.3.0_Products/dataProducts';
import { IProduct } from '../12.3.0_Products/dataProducts';

// Tags ------------------------------------------------
const tags: string[] = ['spicy', 'vegetarian', 'deep-frying'];

// Products -----------------------------------------------
const products: IProduct[] = [
  {
    name: 'chicken nuggets',
    img: ChickenNuggets,

    size: [
      {
        weight: 110,
        price: 1.69,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken nuggets'],
    tags: ['deep-frying'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'nuggets with country-style potatoes',
    img: CountryStylePotatoes,

    size: [
      {
        weight: 285,
        price: 3.59,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken nuggets', 'potato wedges', 'pickled cucumbers'],
    tags: ['deep-frying'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'nuggets with potatoes',
    img: Potatoes,

    size: [
      {
        weight: 285,
        price: 3.59,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken nuggets', 'french fries', 'pickled cucumbers'],
    tags: ['deep-frying'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'french fries',
    img: FrenchFries,

    size: [
      {
        weight: 150,
        price: 1.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['french fries'],
    tags: ['deep-frying', 'vegetarian'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'chicken teriyaki with rice',
    img: ChickenTeriyaki,

    size: [
      {
        weight: 320,
        price: 3.49,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['vegetable oil', 'chicken breast', 'teriyaki sauce', 'rice', 'sesame'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'country style potatoes',
    img: CountryPotatoes,

    size: [
      {
        weight: 170,
        price: 1.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['deep-frying potato'],
    tags: ['deep-frying'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'buffalo wings',
    img: BuffaloWings,

    size: [
      {
        weight: 400,
        price: 6.99,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken wings', 'bbq sauce'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'shrimp "lux"',
    img: ShrimpLux,

    size: [
      {
        weight: 125,
        price: 4.69,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['shrimp', 'batter', 'breadcrumbs'],
    tags: ['deep-frying'],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'beef with potatoes and mushrooms',
    img: BeefPotatoes,

    size: [
      {
        weight: 300,
        price: 4.29,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['beef', 'champignons', 'potato', 'garlic sauce'],
    tags: [],
    extraIngredients: [],
    basis: [],
  },
  {
    name: 'sausages with French fries',
    img: SausagesFrenchFries,

    size: [
      {
        weight: 300,
        price: 4.59,

        quantity: 1,
        size: 1,
        units: 'qty',
      },
    ],
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['pork sausages', 'french fries', 'pickled cucumbers'],
    tags: ['deep-frying'],
    extraIngredients: [],
    basis: [],
  },
];

const dataSnacks: IDataProduct = {
  name: 'snacks',
  products,
  tags,
};

export default dataSnacks;
