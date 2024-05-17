import Cheesecake from './img/Cheesecake.jpg';
import DessertMango from './img/DessertMango.jpg';
import DessertRaspberries from './img/dessertraspberries.jpg';
import DessertTiramisu from './img/desserttiramisu.jpg';
import ChocolateIceCream from './img/chocolateicecream.jpg';
import VanillaIceCream from './img/vanillaicecream.jpg';

interface IDessert {
  name: string;
  img: string;
  weight: number;
  price: number;
  isPopular: boolean;
  dishType: 'dessert';
  ingredients: string[];
  tages: string[];
}

export const tagseDessert: string[] = ['cake', 'ice cream', 'dessert'];

export const dataDessert: IDessert[] = [
  {
    name: 'cheesecake',
    img: Cheesecake,
    weight: 130,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['shortbread', 'curd cheese', 'cream'],
    tages: ['cake'],
  },
  {
    name: 'dessert "mango"',
    img: DessertMango,
    weight: 120,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['mango', 'passion fruit', 'cream', 'white chocolate icing', 'cream cheese', 'gelatin', 'cocoa'],
    tages: ['dessert'],
  },
  {
    name: 'dessert "raspberries"',
    img: DessertRaspberries,
    weight: 120,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['raspberries', 'cream', 'white chocolate icing', 'cream cheese', 'gelatin', 'cocoa'],
    tages: ['dessert'],
  },
  {
    name: 'dessert "tiramisu"',
    img: DessertTiramisu,
    weight: 125,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['cream', 'liqueur', 'cookies', 'coffee'],
    tages: ['dessert'],
  },
  {
    name: 'chocolate ice cream',
    img: ChocolateIceCream,
    weight: 120,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['chocolate ice cream', 'salted caramel', 'peanuts'],
    tages: ['ice cream'],
  },
  {
    name: 'vanilla ice cream',
    img: VanillaIceCream,
    weight: 110,
    price: 2.99,
    isPopular: false,
    dishType: 'dessert',
    ingredients: ['vanilla ice cream', 'salted caramel', 'peanuts', 'chocolate'],
    tages: ['ice cream'],
  },
];
