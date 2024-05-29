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

// Interfaces ------------------------------
export interface ISushi {
  name: string;
  img: string;
  quantity: number;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'sushi';
  ingredients: string[];
  tags: string[];
}
// Tags ------------------------------------------------
const tags: string[] = ['spicy', 'vegetarian'];

// Products -----------------------------------------------
const products: ISushi[] = [
  {
    name: 'syake',
    img: Syake,
    quantity: 1,
    weight: 30,
    price: 1.49,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'lightly salted salmon'],
    tags: [],
  },
  {
    name: 'spicy syake',
    img: SpicySyake,
    quantity: 1,
    weight: 35,
    price: 1.49,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'lightly salted salmon', 'spice sauce'],
    tags: ['spicy'],
  },
  {
    name: 'chuka',
    img: Chuka,
    quantity: 1,
    weight: 30,
    price: 0.79,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'chuka salad'],
    tags: ['vegetarian'],
  },
  {
    name: 'unagi',
    img: Unagi,
    quantity: 1,
    weight: 32,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'unagi sauce', 'smoked eel', 'sesame'],
    tags: ['vegetarian'],
  },
  {
    name: 'Ebi',
    img: Ebi,
    quantity: 1,
    weight: 30,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'shrimp'],
    tags: [],
  },
  {
    name: 'tomago',
    img: Tomago,
    quantity: 1,
    weight: 32,
    price: 0.79,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'unagi sauce', 'omelette', 'sesame'],
    tags: ['vegetarian'],
  },
  {
    name: 'hot hotate',
    img: HotHotate,
    quantity: 1,
    weight: 32,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'scallop', 'spicy sauce'],
    tags: ['spicy'],
  },
  {
    name: 'hotate',
    img: Hotate,
    quantity: 1,
    weight: 30,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'scallop'],
    tags: [],
  },
  {
    name: 'hot koonsei',
    img: HotKoonsei,
    quantity: 1,
    weight: 32,
    price: 1.49,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'smoked salmon', 'spicy sauce'],
    tags: ['spicy'],
  },
  {
    name: 'hot maguro',
    img: HotMaguro,
    quantity: 1,
    weight: 32,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'tuna', 'spicy sauce'],
    tags: ['spicy'],
  },
  {
    name: 'hot syake',
    img: HotSyake,
    quantity: 1,
    weight: 32,
    price: 1.49,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'lightly salted salmon', 'spicy sauce'],
    tags: ['spicy'],
  },
  {
    name: 'hot unagi',
    img: HotUnagi,
    quantity: 1,
    weight: 32,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'lightly salted eel', 'spicy sauce'],
    tags: ['spicy'],
  },
  {
    name: 'spice kunsei',
    img: SpiceKunsei,
    quantity: 1,
    weight: 36,
    price: 1.49,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'smoked salmon', 'spicy sauce'],
    tags: ['spicy'],
  },
  {
    name: 'spice maguro',
    img: SpiceMaguro,
    quantity: 1,
    weight: 35,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'tuna', 'spicy sauce'],
    tags: ['spicy'],
  },
  {
    name: 'spice hotate',
    img: SpiceHotate,
    quantity: 1,
    weight: 35,
    price: 1.39,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'nori', 'scallop', 'spicy sauce'],
    tags: ['spicy'],
  },
];

const dataSushi: IDataProduct = {
  name: 'sushi',
  products,
  tags,
};

export default dataSushi;
