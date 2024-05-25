import Pepperoni from './img/pepperoni.jpg';
import BBQ from './img/bbq.jpg';
import FourCheeses from './img/4_cheeses.jpg';
import MeatPlatter from './img/Meat_platter.jpg';
import Chicken from './img/chicken.jpg';
import Margarita from './img/margarita.jpg';
import Beef from './img/beef.jpg';
import Pork from './img/pork.jpg';
import Hawaiian from './img/hawaiian.jpg';
import Mexican from './img/mexican.jpg';
import Seafood from './img/seafood.jpg';
import Carbonara from './img/carbonara.jpg';
import Classical from './img/classical.jpg';
import Sausages from './img/sausages.jpg';
import Mushrooms from './img/mushrooms.jpg';

interface IPizzaSize {
  size: number;
  weight: number;
  price: number;
}

export interface IPizza {
  name: string;
  img: string;
  size: IPizzaSize[];
  basis: string[];
  ingredients: string[];
  isPopular: boolean;
  dishType: 'pizza';
  tages: string[];
}

export const tagsPizza: string[] = ['chicken', 'pork', 'beef', 'vegetarian', 'sausages', 'seafood', 'spicy'];

const data: IPizza[] = [
  {
    name: 'pizza pepperoni',
    img: Pepperoni,
    size: [
      {
        size: 26,
        weight: 430,
        price: 4.69,
      },
      {
        size: 30,
        weight: 575,
        price: 6.59,
      },
      {
        size: 40,
        weight: 800,
        price: 8.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'pepperoni sausage'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['sausages'],
  },
  {
    name: 'pizza bbq',
    img: BBQ,
    size: [
      {
        size: 26,
        weight: 520,
        price: 5.89,
      },
      {
        size: 30,
        weight: 690,
        price: 7.59,
      },
      {
        size: 40,
        weight: 1010,
        price: 10.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['bbq sauce', 'mozzarella cheese', 'pepperoni sausage', 'ham', 'bacon', 'chicken'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['sausages', 'chicken', 'pork', 'beef'],
  },
  {
    name: 'pizza four cheeses',
    img: FourCheeses,
    size: [
      {
        size: 26,
        weight: 470,
        price: 5.69,
      },
      {
        size: 30,
        weight: 630,
        price: 7.99,
      },
      {
        size: 40,
        weight: 950,
        price: 10.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'dor blue cheese', 'cheddar cheese', 'emmental cheese'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['vegetarian'],
  },
  {
    name: 'pizza meat platter',
    img: MeatPlatter,
    size: [
      {
        size: 26,
        weight: 560,
        price: 5.99,
      },
      {
        size: 30,
        weight: 780,
        price: 8.59,
      },
      {
        size: 40,
        weight: 1170,
        price: 10.99,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'tomatoes', 'beef', 'pork', 'chicken', 'bacon'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['sausages', 'chicken', 'pork', 'beef'],
  },
  {
    name: 'pizza chicken',
    img: Chicken,
    size: [
      {
        size: 26,
        weight: 530,
        price: 5.69,
      },
      {
        size: 30,
        weight: 710,
        price: 7.59,
      },
      {
        size: 40,
        weight: 1080,
        price: 10.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'chicken'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['chicken'],
  },
  {
    name: 'pizza margarita',
    img: Margarita,
    size: [
      {
        size: 26,
        weight: 450,
        price: 4.29,
      },
      {
        size: 30,
        weight: 590,
        price: 5,
      },
      {
        size: 40,
        weight: 880,
        price: 6.89,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['vegetarian'],
  },
  {
    name: 'pizza beef',
    img: Beef,
    size: [
      {
        size: 26,
        weight: 540,
        price: 5.89,
      },
      {
        size: 30,
        weight: 755,
        price: 8.29,
      },
      {
        size: 40,
        weight: 1115,
        price: 11.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['bbq sauce', 'mozzarella cheese', 'beef', 'pickled cucumbers'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['beef'],
  },
  {
    name: 'pizza pork',
    img: Pork,
    size: [
      {
        size: 26,
        weight: 540,
        price: 5.59,
      },
      {
        size: 30,
        weight: 760,
        price: 7.99,
      },
      {
        size: 40,
        weight: 1180,
        price: 10.99,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['spicy sauce', 'mozzarella cheese', 'pork', 'pickled cucumbers', 'jalapeno pepper', 'tomatoes'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['pork', 'spicy'],
  },
  {
    name: 'pizza hawaiian',
    img: Hawaiian,
    size: [
      {
        size: 26,
        weight: 490,
        price: 4.29,
      },
      {
        size: 30,
        weight: 680,
        price: 5.79,
      },
      {
        size: 40,
        weight: 1030,
        price: 8.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'ham', 'pineapples'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['pork', 'sausages'],
  },
  {
    name: 'pizza mexican',
    img: Mexican,
    size: [
      {
        size: 26,
        weight: 500,
        price: 4.69,
      },
      {
        size: 30,
        weight: 700,
        price: 6.59,
      },
      {
        size: 40,
        weight: 1000,
        price: 9.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'spices', 'bell pepper', 'onion', 'chopped beef', 'beans', 'mozzarella cheese'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['beef', 'spicy'],
  },
  {
    name: 'pizza seafood',
    img: Seafood,
    size: [
      {
        size: 26,
        weight: 550,
        price: 8.99,
      },
      {
        size: 30,
        weight: 730,
        price: 11.99,
      },
      {
        size: 40,
        weight: 1120,
        price: 16.99,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'garlic', 'octopus', 'tiger shrimp', 'cocktail shrimp', 'squid', 'lemon'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['seafood'],
  },
  {
    name: 'pizza carbonara',
    img: Carbonara,
    size: [
      {
        size: 26,
        weight: 0,
        price: 0,
      },
      {
        size: 30,
        weight: 635,
        price: 7.99,
      },
      {
        size: 40,
        weight: 1025,
        price: 11.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'mushrooms', 'bacon', 'parmesan cheese'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['pork'],
  },
  {
    name: 'pizza classical',
    img: Classical,
    size: [
      {
        size: 26,
        weight: 490,
        price: 469,
      },
      {
        size: 30,
        weight: 670,
        price: 6.59,
      },
      {
        size: 40,
        weight: 1040,
        price: 8.49,
      },
    ],
    basis: ['standard', 'thin'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'mushrooms', 'pepperoni sausage', 'ham'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['pork', 'sausages'],
  },
  {
    name: 'pizza sausages',
    img: Sausages,
    size: [
      {
        size: 26,
        weight: 430,
        price: 3.69,
      },
    ],
    basis: ['standard'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'pepperoni sausage', 'ham', 'pork sausages'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['sausages'],
  },
  {
    name: 'pizza mushrooms',
    img: Mushrooms,
    size: [
      {
        size: 26,
        weight: 450,
        price: 3.69,
      },
    ],
    basis: ['standard'],
    ingredients: ['pizza sauce', 'mozzarella cheese', 'mushrooms', 'red onion', 'ham'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['sausages'],
  },
];

export interface IExtraIngredientsPizza {
  name: string;
  price: number;
}

export const extraIngredientsPizza: IExtraIngredientsPizza[] = [
  {
    name: 'Onion fries',
    price: 0.69,
  },
  {
    name: 'Country style potatoes',
    price: 0.49,
  },
  {
    name: 'Pineapple',
    price: 0.49,
  },
  {
    name: 'Champignon',
    price: 0.49,
  },
  {
    name: 'Olives',
    price: 0.49,
  },
  {
    name: 'Pickled cucumbers',
    price: 0.49,
  },
  {
    name: 'Bell pepper',
    price: 0.49,
  },
  {
    name: 'Jalopeno',
    price: 0.49,
  },
  {
    name: 'Tomatoes',
    price: 0.49,
  },
  {
    name: 'Mozzarella cheese',
    price: 0.86,
  },
  {
    name: 'Parmesan cheese',
    price: 0.59,
  },
  {
    name: 'Beef',
    price: 0.89,
  },
  {
    name: 'Pork',
    price: 0.69,
  },
  {
    name: 'Ham',
    price: 0.59,
  },
  {
    name: 'Bacon',
    price: 0.69,
  },
  {
    name: 'Pepperoni sausage',
    price: 0.69,
  },
  {
    name: 'Chicken',
    price: 0.69,
  },
  {
    name: 'Salmon',
    price: 2.69,
  },
  {
    name: 'Red onion',
    price: 156.29,
  },
];

export default data;
