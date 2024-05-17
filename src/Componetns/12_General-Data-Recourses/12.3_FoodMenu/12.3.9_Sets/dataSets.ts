import PizzaSet1 from './img/pizzaset1.jpg';
import PizzaSet2 from './img/pizzaset2.jpg';
import PizzaSet3 from './img/pizzaset3.jpg';
import PizzaSet4 from './img/pizzaset4.jpg';
import PizzaSet5 from './img/pizzaset5.jpg';
import PizzaSet6 from './img/pizzaset6.jpg';
import PizzaSet7 from './img/pizzaset7.jpg';
import PizzaSet8 from './img/pizzaset8.jpg';
import LunchSet1 from './img/LunchSet1.jpg';
import LunchSet2 from './img/LunchSet2.jpg';
import LunchSet3 from './img/LunchSet3.jpg';
import LunchSet4 from './img/LunchSet4.jpg';

interface ISet {
  name: string;
  img: string;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'set';
  ingredients: string[];
  tages: string[];
}

export const tagseSets: string[] = ['pizza-set', 'sushi-set', 'lunch-set'];

export const dataSets: ISet[] = [
  {
    name: 'pizza set 1',
    img: PizzaSet1,
    weight: 1608,
    price: 12.19,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza medium 2 ps', 'poll 6ps', 'coca-cola 0.5l'],
    tages: ['pizza-set', 'sushi-set'],
  },
  {
    name: 'pizza set 2',
    img: PizzaSet2,
    weight: 960,
    price: 11.39,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza lage 1 ps', 'poll 16ps'],
    tages: ['pizza-set', 'sushi-set'],
  },
  {
    name: 'pizza set 3',
    img: PizzaSet3,
    weight: 2575,
    price: 19.79,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza medium 6 ps'],
    tages: ['pizza-set'],
  },
  {
    name: 'pizza set 4',
    img: PizzaSet4,
    weight: 1680,
    price: 14.19,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza medium 3 ps'],
    tages: ['pizza-set'],
  },
  {
    name: 'pizza set 5',
    img: PizzaSet5,
    weight: 1265,
    price: 17.59,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 1 ps', 'rolls 28pz'],
    tages: ['pizza-set', 'sushi-set'],
  },
  {
    name: 'pizza set 6',
    img: PizzaSet6,
    weight: 1091,
    price: 17.0,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 1 ps', 'rolls 26pz'],
    tages: ['pizza-set', 'sushi-set'],
  },
  {
    name: 'pizza set 7',
    img: PizzaSet7,
    weight: 886,
    price: 10.99,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 1 ps', 'rolls 12pz'],
    tages: ['pizza-set', 'sushi-set'],
  },
  {
    name: 'pizza set 8',
    img: PizzaSet8,
    weight: 965,
    price: 10.99,
    isPopular: false,
    dishType: 'set',
    ingredients: ['pizza small 2 ps'],
    tages: ['pizza-set'],
  },
  {
    name: 'lunch set 1',
    img: LunchSet1,
    weight: 475,
    price: 5.69,
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'rolls 8px'],
    tages: ['sushi-set', 'lunch-set'],
  },
  {
    name: 'lunch set 2',
    img: LunchSet2,
    weight: 530,
    price: 5.39,
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'rolls 8px'],
    tages: ['sushi-set', 'lunch-set'],
  },
  {
    name: 'lunch set 3',
    img: LunchSet3,
    weight: 590,
    price: 4.89,
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'chicken noodles 1 ps'],
    tages: ['lunch-set'],
  },
  {
    name: 'lunch set 4',
    img: LunchSet4,
    weight: 590,
    price: 4.49,
    isPopular: false,
    dishType: 'set',
    ingredients: ['soup 1 ps', 'chicken teriyaki rice 1 ps'],
    tages: ['lunch-set'],
  },
];
