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

export interface IRoll {
  name: string;
  img: string;
  quantity: number;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'roll';
  ingredients: string[];
  tages: string[];
}

export const tagesRoll: string[] = ['salmon roll', 'vegetarian', 'spicy', 'baked', 'beef roll'];

const dataRoll: IRoll[] = [
  {
    name: 'california',
    img: California,
    quantity: 6,
    weight: 182,
    price: 3.69,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fresh cucumbers', 'snow crab', 'masago caviar', 'hot sauce'],
    tages: ['spicy'],
  },
  {
    name: 'tampur cheese',
    img: TampurCheese,
    quantity: 8,
    weight: 205,
    price: 2.79,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'breadcrumbs'],
    tages: ['vegetarian'],
  },
  {
    name: 'Kuppu make',
    img: KuppuMake,
    quantity: 6,
    weight: 98,
    price: 1.59,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fresh cucumbers', 'sesame'],
    tages: ['vegetarian'],
  },
  {
    name: 'philadelphia',
    img: Philadelphia,
    quantity: 6,
    weight: 228,
    price: 7.99,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'fresh cucumbers', 'salmon'],
    tages: ['salmon roll'],
  },
  {
    name: 'California cheese',
    img: CaliforniaCheese,
    quantity: 6,
    weight: 182,
    price: 3.49,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'masago caviar'],
    tages: ['vegetarian'],
  },
  {
    name: 'beef tumpur',
    img: BeefTumpur,
    quantity: 8,
    weight: 210,
    price: 3.49,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'bacon', 'spicy sauce', 'cream cheese', 'fresh cucumbers', 'breadcrumbs'],
    tages: ['beef roll', 'spicy'],
  },
  {
    name: 'philadelphia with eel',
    img: PhiladelphiaWithEel,
    quantity: 6,
    weight: 182,
    price: 4.59,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'smoked eel', 'unagi sauce', 'sesame'],
    tages: [],
  },
  {
    name: 'new york',
    img: NewYork,
    quantity: 6,
    weight: 168,
    price: 2.39,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'mayonnaise', 'fresh cucumbers', 'fried salmon skin', 'sesame'],
    tages: ['salmon roll'],
  },
  {
    name: 'kyoto',
    img: Kyoto,
    quantity: 6,
    weight: 101,
    price: 1.99,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fried salmon skin', 'fresh cucumbers'],
    tages: ['salmon roll'],
  },
  {
    name: 'hokkaido',
    img: Hokkaido,
    quantity: 6,
    weight: 168,
    price: 3.59,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'cream cheese', 'snow crab', 'smoked salmon', 'sesame'],
    tages: ['salmon roll'],
  },
  {
    name: 'yasai maki',
    img: YasaiMaki,
    quantity: 8,
    weight: 163,
    price: 2.39,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'fresh cucumbers', 'tomatoes', 'bell pepper', 'iceberg lettuce', 'sesame'],
    tages: ['vegetarian'],
  },
  {
    name: 'spicy eel',
    img: SpicyEel,
    quantity: 6,
    weight: 96,
    price: 2.99,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'spice sauce', 'smoked eel'],
    tages: ['spicy'],
  },
  {
    name: 'chile',
    img: Chile,
    quantity: 6,
    weight: 189,
    price: 2.69,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'tomatoes', 'snow crab', 'spice sauce'],
    tages: ['spicy', 'baked'],
  },
  {
    name: 'luxury shrimp',
    img: LuxuryShrimp,
    quantity: 8,
    weight: 173,
    price: 4.29,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'shrimp', 'mayonnaise', 'batter', 'breadcrumbs', 'sesame'],
    tages: ['baked'],
  },
  {
    name: 'tuna',
    img: Tuna,
    quantity: 6,
    weight: 96,
    price: 2.49,
    isPopular: false,
    dishType: 'roll',
    ingredients: ['rice', 'nori', 'tuna'],
    tages: [],
  },
];

export default dataRoll;
