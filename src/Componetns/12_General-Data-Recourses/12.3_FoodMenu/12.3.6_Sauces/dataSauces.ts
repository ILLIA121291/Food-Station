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

interface ISauces {
  name: string;
  img: string;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'sauce';
  ingredients: string[];
  tages: string[];
}

const tagseSauces: string[] = ['spicy', 'vegetarian'];

const dataSauces: ISauces[] = [
  {
    name: 'spicy',
    img: Spicy,
    weight: 50,
    price: 0.99,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['spicy sauces'],
    tages: ['spicy', 'vegetarian'],
  },
  {
    name: 'Sweet & sour',
    img: SweetSour,
    weight: 25,
    price: 0.49,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['sweet-sour sauce'],
    tages: ['vegetarian'],
  },
  {
    name: 'Hot',
    img: Hot,
    weight: 50,
    price: 0.99,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['hot sauce'],
    tages: ['spicy'],
  },
  {
    name: 'Chef',
    img: Chef,
    weight: 50,
    price: 0.99,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['garlic', 'mayonnaise', 'soy sauce', 'greens'],
    tages: [],
  },
  {
    name: 'Caesar',
    img: Caesar,
    weight: 50,
    price: 0.99,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['caesar sauce'],
    tages: [],
  },
  {
    name: 'teriyaki',
    img: Teriyaki,
    weight: 50,
    price: 0.99,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['teriyaki sauce'],
    tages: [],
  },
  {
    name: 'cheesy',
    img: Cheesy,
    weight: 25,
    price: 0.49,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['cheesy sauce'],
    tages: ['vegetarian'],
  },
  {
    name: 'bbq',
    img: BBQ,
    weight: 25,
    price: 0.49,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['bbq sauce'],
    tages: ['vegetarian'],
  },
  {
    name: 'sushi sauces set',
    img: SushiSaucesSet,
    weight: 90,
    price: 0.99,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['ginger', 'soy sauce', 'wasabi'],
    tages: [],
  },
  {
    name: 'garlic',
    img: Garlic,
    weight: 25,
    price: 0.49,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['garlic sauce'],
    tages: ['vegetarian'],
  },
  {
    name: 'ginger',
    img: Ginger,
    weight: 30,
    price: 0.49,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['ginger'],
    tages: ['vegetarian'],
  },
  {
    name: 'soy sauce',
    img: SoySauce,
    weight: 50,
    price: 0.49,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['soy sauce'],
    tages: ['vegetarian'],
  },
  {
    name: 'wasabi',
    img: Wasabi,
    weight: 10,
    price: 0.29,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['wasabi'],
    tages: ['spicy', 'vegetarian'],
  },
  {
    name: 'walnut',
    img: Walnut,
    weight: 50,
    price: 1.39,
    isPopular: false,
    dishType: 'sauce',
    ingredients: ['walnut sauce'],
    tages: ['vegetarian'],
  },
];
