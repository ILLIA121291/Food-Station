import { nanoid } from '@reduxjs/toolkit';
import { IOrderItem } from '../1_CardProduct/CardProduct';
import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

const basicInitialState = (data: IProduct) => {
  // Order Inisial State ---------------------------------------------
  const volume: number | 0 = data.size[0].volume ? data.size[0].volume : 0;
  const weight: number | 0 = data.size[0].weight ? data.size[0].weight : 0;
  const quantity: number | 0 = data.size[0].quantity ? data.size[0].quantity : 0;

  const inisialOrder: IOrderItem = {
    id: nanoid(),
    name: data.name,
    data,
    price: data.size[0].price,
    priceExtra: 0,
    quantity: 1,
    dishType: data.dishType,

    parameters: {
      basis: { name: '', price: 0 },
      extraIngredients: [],
      weight,
      volume,
      quantity,
      diameter: 0,
    },
  };

  return inisialOrder;
};

export default basicInitialState;
