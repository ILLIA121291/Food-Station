import Pepperoni from './img/pepperoni.jpg';
import BBQ from './img/bbq.jpg';
import FourCheeses from './img/4_cheeses.jpg';
import MeatPlatter from './img/meat_platter.jpg';
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
  weight: number;
  price: number;
}

interface IPizza {
  name: string;
  img: string;
  size: {
    small: IPizzaSize;
    medium: IPizzaSize;
    large: IPizzaSize;
  };
  basis: {
    standard: boolean;
    thin: boolean;
  };
  ingredients: string[];
  isPopular: boolean;
  dishType: 'pizza';
  tages: string[];
}

const tagsPizza: string[] = ['chicken', 'pork', 'beef', 'vegetarian', 'sausages', 'seafood', 'spicy'];

const dataPizza: IPizza[] = [
  {
    name: 'pepperoni',
    img: Pepperoni,
    size: {
      small: {
        weight: 430,
        price: 4.69,
      },
      medium: {
        weight: 575,
        price: 6.59,
      },
      large: {
        weight: 800,
        price: 8.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'pepperoni sausage'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['sausages'],
  },
  {
    name: 'bbq',
    img: BBQ,
    size: {
      small: {
        weight: 520,
        price: 5.89,
      },
      medium: {
        weight: 690,
        price: 7.59,
      },
      large: {
        weight: 1010,
        price: 10.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['bbq sauce', 'mozzarella cheese', 'pepperoni sausage', 'ham', 'bacon', 'chicken'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['sausages', 'chicken', 'pork', 'beef'],
  },
  {
    name: 'Four cheeses',
    img: FourCheeses,
    size: {
      small: {
        weight: 470,
        price: 5.69,
      },
      medium: {
        weight: 630,
        price: 7.99,
      },
      large: {
        weight: 950,
        price: 10.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'dor blue cheese', 'cheddar cheese', 'emmental cheese'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['vegetarian'],
  },
  {
    name: 'meat platter',
    img: MeatPlatter,
    size: {
      small: {
        weight: 560,
        price: 5.99,
      },
      medium: {
        weight: 780,
        price: 8.59,
      },
      large: {
        weight: 1170,
        price: 10.99,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'tomatoes', 'beef', 'pork', 'chicken', 'bacon'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['sausages', 'chicken', 'pork', 'beef'],
  },
  {
    name: 'chicken',
    img: Chicken,
    size: {
      small: {
        weight: 530,
        price: 5.69,
      },
      medium: {
        weight: 710,
        price: 7.59,
      },
      large: {
        weight: 1080,
        price: 10.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'chicken'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['chicken'],
  },
  {
    name: 'margarita',
    img: Margarita,
    size: {
      small: {
        weight: 450,
        price: 4.29,
      },
      medium: {
        weight: 590,
        price: 5,
      },
      large: {
        weight: 880,
        price: 6.89,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['vegetarian'],
  },
  {
    name: 'beef',
    img: Beef,
    size: {
      small: {
        weight: 540,
        price: 5.89,
      },
      medium: {
        weight: 755,
        price: 8.29,
      },
      large: {
        weight: 1115,
        price: 11.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['bbq sauce', 'mozzarella cheese', 'beef', 'pickled cucumbers'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['beef'],
  },
  {
    name: 'pork',
    img: Pork,
    size: {
      small: {
        weight: 540,
        price: 5.59,
      },
      medium: {
        weight: 760,
        price: 7.99,
      },
      large: {
        weight: 1180,
        price: 10.99,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['spicy sauce', 'mozzarella cheese', 'pork', 'pickled cucumbers', 'jalapeno pepper', 'tomatoes'],
    isPopular: true,
    dishType: 'pizza',
    tages: ['pork', 'spicy'],
  },
  {
    name: 'hawaiian',
    img: Hawaiian,
    size: {
      small: {
        weight: 490,
        price: 4.29,
      },
      medium: {
        weight: 680,
        price: 5.79,
      },
      large: {
        weight: 1030,
        price: 8.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'ham', 'pineapples'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['pork', 'sausages'],
  },
  {
    name: 'mexican',
    img: Mexican,
    size: {
      small: {
        weight: 500,
        price: 4.69,
      },
      medium: {
        weight: 700,
        price: 6.59,
      },
      large: {
        weight: 1000,
        price: 9.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'spices', 'bell pepper', 'onion', 'chopped beef', 'beans', 'mozzarella cheese'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['beef', 'spicy'],
  },
  {
    name: 'seafood',
    img: Seafood,
    size: {
      small: {
        weight: 550,
        price: 8.99,
      },
      medium: {
        weight: 730,
        price: 11.99,
      },
      large: {
        weight: 1120,
        price: 16.99,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'garlic', 'octopus', 'tiger shrimp', 'cocktail shrimp', 'squid', 'lemon'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['seafood'],
  },
  {
    name: 'carbonara',
    img: Carbonara,
    size: {
      small: {
        weight: 0,
        price: 0,
      },
      medium: {
        weight: 635,
        price: 7.99,
      },
      large: {
        weight: 1025,
        price: 11.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'mushrooms', 'bacon', 'parmesan cheese'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['pork'],
  },
  {
    name: 'classical',
    img: Classical,
    size: {
      small: {
        weight: 490,
        price: 469,
      },
      medium: {
        weight: 670,
        price: 6.59,
      },
      large: {
        weight: 1040,
        price: 8.49,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'mushrooms', 'pepperoni sausage', 'ham'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['pork', 'sausages'],
  },
  {
    name: 'sausages',
    img: Sausages,
    size: {
      small: {
        weight: 430,
        price: 3.69,
      },
      medium: {
        weight: 0,
        price: 0,
      },
      large: {
        weight: 0,
        price: 0,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'pepperoni sausage', 'ham', 'pork sausages'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['sausages'],
  },
  {
    name: 'mushrooms',
    img: Mushrooms,
    size: {
      small: {
        weight: 450,
        price: 3.69,
      },
      medium: {
        weight: 0,
        price: 0,
      },
      large: {
        weight: 0,
        price: 0,
      },
    },
    basis: {
      standard: true,
      thin: true,
    },
    ingredients: ['pizza sauce', 'mozzarella cheese', 'mushrooms', 'red onion', 'ham'],
    isPopular: false,
    dishType: 'pizza',
    tages: ['sausages'],
  },
];

export default dataPizza;
