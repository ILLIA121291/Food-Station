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

interface ISushi {
  name: string;
  img: string;
  quantity: number;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'sushi';
  ingredients: string[];
  tages: string[];
}

const tagseSushi: string[] = ['spicy', 'vegetarian'];

const dataSushi: ISushi[] = [
  {
    name: 'syake',
    img: Syake,
    quantity: 1,
    weight: 30,
    price: 1.49,
    isPopular: false,
    dishType: 'sushi',
    ingredients: ['rice', 'lightly salted salmon'],
    tages: [],
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
    tages: ['spicy'],
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
    tages: ['vegetarian'],
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
    tages: ['vegetarian'],
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
    tages: [],
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
    tages: ['vegetarian'],
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
    tages: ['spicy'],
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
    tages: [],
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
    tages: ['spicy'],
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
    tages: ['spicy'],
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
    tages: ['spicy'],
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
    tages: ['spicy'],
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
    tages: ['spicy'],
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
    tages: ['spicy'],
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
    tages: ['spicy'],
  },
];

export default dataSushi;
