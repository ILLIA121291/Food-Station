import TomYum from './img/TomYum.jpg';
import MisoShiro from './img/Miso-shiro.jpg';
import TomKha from './img/TomKha.jpg';
import ChickenBroth from './img/chickenbroth.jpg';

interface ISoup {
  name: string;
  img: string;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'soup';
  ingredients: string[];
  tages: string[];
}

const tagseSoup: string[] = ['spicy', 'vegetarian'];

const dataSoup: ISoup[] = [
  {
    name: 'tom yum',
    img: TomYum,
    weight: 260,
    price: 3.99,
    isPopular: false,
    dishType: 'soup',
    ingredients: ['cream', 'lemongrass', 'coconut milk', 'chili pepper', 'garlic', 'shrimp', 'rice'],
    tages: ['spicy'],
  },
  {
    name: 'miso-shiro',
    img: MisoShiro,
    weight: 250,
    price: 2.2,
    isPopular: false,
    dishType: 'soup',
    ingredients: ['wakame seaweed', 'soybeans', 'shiitake mushrooms', 'bean curd'],
    tages: ['vegetarian'],
  },
  {
    name: 'tom kha',
    img: TomKha,
    weight: 320,
    price: 3.99,
    isPopular: false,
    dishType: 'soup',
    ingredients: ['vegetable oil', 'chili pepper', 'lemongrass', 'chicken broth', 'coconut milk', 'galangal'],
    tages: ['spicy'],
  },
  {
    name: 'chicken broth',
    img: ChickenBroth,
    weight: 260,
    price: 2,
    isPopular: false,
    dishType: 'soup',
    ingredients: ['chicken', 'broth', 'wheat croutons'],
    tages: [],
  },
  {
    name: 'chicken broth',
    img: ChickenBroth,
    weight: 260,
    price: 2,
    isPopular: false,
    dishType: 'soup',
    ingredients: ['chicken', 'broth', 'wheat croutons'],
    tages: [],
  },
];

export default dataSoup;
