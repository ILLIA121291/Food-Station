import { FC } from 'react';

import Spicy from './img/spicy.svg';
import Vegetarian from './img/vegetarian.svg';

// Interface -----------------------------------
interface IProps {
  dishType: string;
  image: string;
  alt: string;
  tags: string[];
  ingredients: string[];
  basis?: 'standard' | 'thin';
  size?: 26 | 30 | 40;
}

const ImagePanel: FC<IProps> = ({ dishType, image, alt, tags, ingredients, basis, size }) => {
  const tagsComponent = tags.includes('spicy') || tags.includes('vegetarian') ? <InfoImages tags={tags} /> : null;
  const ingredientsComponent = ingredients.length != 0 ? <InfoIngredients ingredients={ingredients} /> : null;

  // Product Type Display ---------------------------------
  let typeDish = dishType == 'pizza' ? 'card-product__img-pizza' : '';

  // Display Pizza Basis ----------------------------------
  let pizzaBasis: string = '';
  if (basis && basis == 'thin') {
    pizzaBasis = 'pizza-thin';
  }

  // Display Pizza Size -----------------------------------
  let pizzaSiza: string = '';

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

  return (
    <div className="wt270 ht230 f_jc-ac pos_rel">
      <img className={`card-product__img ${pizzaBasis} ${typeDish} ${pizzaSiza}`} src={image} alt={alt} />
      {tagsComponent}
      {ingredientsComponent}
    </div>
  );
};

// Info Images ---------------------------------

interface IInfoImages {
  tags: string[];
}

const InfoImages: FC<IInfoImages> = ({ tags }) => {
  const spicy = tags.includes('spicy') ? <img className="wt50 ht50 mr5" src={Spicy} alt="spicy" /> : null;
  const vegetarian = tags.includes('vegetarian') ? <img className="wt50 ht50 mr5" src={Vegetarian} alt="vegetarian" /> : null;

  return (
    <div className="card-product__img-info f">
      {spicy}
      {vegetarian}
    </div>
  );
};

// Info Ingredients ----------------------------

interface IInfoIngredients {
  ingredients: string[];
}

const InfoIngredients: FC<IInfoIngredients> = ({ ingredients }) => {
  return (
    <ul className={`card-product__img-ingredients fw600 fs18 tx-tr-cap f_jc-ac fc asd `}>
      {ingredients.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
};

export default ImagePanel;
