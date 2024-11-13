import IOrder from '../../../../interfaces/IOrder';
import IProduct from '../../../../interfaces/IProduct';

const orderInitialState = (data: IProduct) => {
  let basis = data.basis[0] ? data.basis[0] : { name: '', price: 0 };
  let size: number = data.size[0].size;
  let units: string = data.size[0].units;
  let price: number = data.size[0].price;
  let weight: number = data.size[0].weight;
  let quantity: number = data.size[0].quantity;

  // Pizza Order Inisial State --------------------------------

  if (data.dishType == 'pizza') {
    for (let i = 0; i < data.size.length; i++) {
      if (data.size[i].size == 30) {
        size = 30;
        weight = data.size[i].weight;
        price = data.size[i].price;
        break;
      } else {
        size = data.size[0].size;
        weight = data.size[0].weight;
        price = data.size[0].price;
      }
    }
  }

  // Order Inisial State ---------------------------------------------
  const inisialOrder: IOrder = {
    id: data._id,
    name: data.name,
    data,
    price,
    priceExtra: 0,
    quantity: 1,
    dishType: data.dishType,

    parameters: {
      extraIngredients: [],
      basis,
      size,
      units,
      weight,
      quantity,
    },
  };

  return inisialOrder;
};

export default orderInitialState;
