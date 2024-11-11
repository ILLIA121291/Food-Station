import './ImagePanel.scss';
import { FC } from 'react';

import InfoImages from '../3.2_InfoImages/3.2_InfoImages';
import InfoIngredients from '../3.3_InfoIngredients/3.3_InfoIngredients';
import { DOMAIN_NAME } from '../../../../../../../variables/variables';
import IProduct from '../../../../../../../Interfaces/IProduct';
import IOrder from '../../../../../../../Interfaces/IOrder';

// Interface -----------------------------------
interface IProps {
  data: IProduct;
  order: IOrder;
}

// COMPONENT ------------------------------------
const ImagePanel: FC<IProps> = ({ data, order }) => {
  const { dishType, img, name, tags, ingredients } = data;
  const basis = order.parameters.basis;
  const size = order.parameters.size;

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

  // Pizza IMGE size -----------------------------------
  if (size) {
    switch (size) {
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

  // RENDERING COMPONENT ----------------------------------
  return (
    <div className="wt270 ht230 f_jc-ac pos_rel">
      <img className={`card-product__img ${pizzaBasis} ${typeDish} ${pizzaSiza}`} src={`${DOMAIN_NAME}${img}`} alt={name} />
      {infoImagesComponent}
      {infoIngredientsComponent}
    </div>
  );
};

export default ImagePanel;
