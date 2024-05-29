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

// Interfaces ------------------------------
export interface ISnack {
  name: string;
  img: string;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'snacks';
  ingredients: string[];
  tages: string[];
}

// Tags ------------------------------------------------
const tags: string[] = ['spicy', 'vegetarian', 'deep-frying'];

// Products -----------------------------------------------
const products: ISnack[] = [
  {
    name: 'chicken nuggets',
    img: ChickenNuggets,
    weight: 110,
    price: 1.69,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken nuggets'],
    tages: ['deep-frying'],
  },
  {
    name: 'nuggets with country-style potatoes',
    img: CountryStylePotatoes,
    weight: 285,
    price: 3.59,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken nuggets', 'potato wedges', 'pickled cucumbers'],
    tages: ['deep-frying'],
  },
  {
    name: 'nuggets with potatoes',
    img: Potatoes,
    weight: 285,
    price: 3.59,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken nuggets', 'french fries', 'pickled cucumbers'],
    tages: ['deep-frying'],
  },
  {
    name: 'french fries',
    img: FrenchFries,
    weight: 150,
    price: 1.99,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['french fries'],
    tages: ['deep-frying', 'vegetarian'],
  },
  {
    name: 'chicken teriyaki with rice',
    img: ChickenTeriyaki,
    weight: 320,
    price: 3.49,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['vegetable oil', 'chicken breast', 'teriyaki sauce', 'rice', 'sesame'],
    tages: [],
  },
  {
    name: 'country style potatoes',
    img: CountryPotatoes,
    weight: 170,
    price: 1.99,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['deep-frying potato'],
    tages: ['deep-frying'],
  },
  {
    name: 'buffalo wings',
    img: BuffaloWings,
    weight: 400,
    price: 6.99,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['chicken wings', 'bbq sauce'],
    tages: [],
  },
  {
    name: 'shrimp "lux"',
    img: ShrimpLux,
    weight: 125,
    price: 4.69,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['shrimp', 'batter', 'breadcrumbs'],
    tages: ['deep-frying'],
  },
  {
    name: 'beef with potatoes and mushrooms',
    img: BeefPotatoes,
    weight: 300,
    price: 4.29,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['beef', 'champignons', 'potato', 'garlic sauce'],
    tages: [],
  },
  {
    name: 'sausages with French fries',
    img: SausagesFrenchFries,
    weight: 300,
    price: 4.59,
    isPopular: false,
    dishType: 'snacks',
    ingredients: ['pork sausages', 'french fries', 'pickled cucumbers'],
    tages: ['deep-frying'],
  },
];

const dataSnacks: IDataProduct = {
  name: 'snacks',
  products,
  tags,
};

export default dataSnacks;
