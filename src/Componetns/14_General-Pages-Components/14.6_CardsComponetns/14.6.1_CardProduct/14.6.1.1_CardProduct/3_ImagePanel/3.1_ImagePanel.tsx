import { FC } from 'react';

import { IProduct } from '../../../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';
import { IOrder } from '../1_CardProduct/CardProduct';
import InfoImages from './3.2_InfoImages';
import InfoIngredients from './3.3_InfoIngredients';

// Interface -----------------------------------
interface IProps {
  data: IProduct;
  order: IOrder;
}

const ImagePanel: FC<IProps> = ({ data, order }) => {
  const { dishType, img, name, tags, ingredients } = data;
  const basis = order.parameters.basis;
  const diameter = order.parameters.diameter;

  const infoImagesComponent = tags.includes('spicy') || tags.includes('vegetarian') ? <InfoImages tags={tags} /> : null;
  const infoIngredientsComponent = ingredients.length != 0 ? <InfoIngredients ingredients={ingredients} /> : null;

  // Product Type Display ---------------------------------
  let typeDish = dishType == 'pizza' ? 'card-product__img-pizza' : '';

  // Display Pizza Basis ----------------------------------
  let pizzaBasis: string = '';
  if (basis && basis.name == 'thin') {
    pizzaBasis = 'pizza-thin';
  }

  // Display Pizza Size -----------------------------------
  let pizzaSiza: string = '';

  if (diameter) {
    switch (diameter) {
      case 26:
        pizzaSiza = 'pizza-size26';
        break;
      case 40:
        pizzaSiza = 'pizza-size40';
        break;
      default:
        pizzaSiza = 'pizza-size30';
    }
  }

  return (
    <div className="wt270 ht230 f_jc-ac pos_rel">
      <img className={`card-product__img ${pizzaBasis} ${typeDish} ${pizzaSiza}`} src={img} alt={name} />
      {infoImagesComponent}
      {infoIngredientsComponent}
    </div>
  );
};

export default ImagePanel;
