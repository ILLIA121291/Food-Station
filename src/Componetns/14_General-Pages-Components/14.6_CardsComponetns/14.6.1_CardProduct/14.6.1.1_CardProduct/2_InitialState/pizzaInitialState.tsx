import { nanoid } from '@reduxjs/toolkit';
import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IOrderItem } from '../1_CardProduct/CardProduct';

const pizzaInisialState = (data: IProduct) => {
  // Bassis Pizza Inisial -------------------------------------
  let basis = { name: 'standard', price: 0 };

  for (let i = 0; i < data.basis.length; i++) {
    if (data.basis[i].name == basis.name) {
      basis = data.basis[i];
      break;
    } else {
      basis = data.basis[0];
    }
  }

  // Size Weight Price Pizza Inisial ---------------------------
  let diameter: 26 | 30 | 40 = 30;
  let weight: number = 0;
  let price: number = 0;

  for (let i = 0; i < data.size.length; i++) {
    if (data.size[i].diameter == 30) {
      diameter = 30;
      weight = data.size[i].weight;
      price = data.size[i].price;
      break;
    } else {
      diameter = data.size[0].diameter as 26 | 30 | 40;
      weight = data.size[0].weight;
      price = data.size[0].price;
    }
  }

  // Order Initial State ---------------------------------------------
  const inisialOrderPizza: IOrderItem = {
    id: nanoid(),
    name: data.name,
    data,
    price,
    priceExtra: 0,
    quantity: 1,
    dishType: data.dishType,
    parameters: {
      extraIngredients: [],
      basis: basis,
      diameter,
      weight,
      volume: 0,
      quantity: 1,
    },
  };

  return inisialOrderPizza;
};

export default pizzaInisialState;
