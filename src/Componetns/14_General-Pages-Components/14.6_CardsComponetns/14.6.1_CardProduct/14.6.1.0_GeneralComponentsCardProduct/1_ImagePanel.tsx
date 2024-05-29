import { FC } from 'react';

import Spicy from './img/spicy.svg';
import Vegetarian from './img/vegetarian.svg';

// Interface -----------------------------------
interface IProps {
  image: string;
  alt: string;
  tags: string[];
}

const ImagePanel: FC<IProps> = ({ image, alt, tags }) => {
  const spicy = tags.includes('spicy') ? <img className="wt50 ht50 mr5" src={Spicy} alt="spicy" /> : null;
  const vegetarian = tags.includes('vegetarian') ? <img className="wt50 ht50 mr5" src={Vegetarian} alt="vegetarian" /> : null;

  return (
    <div className="wt270 ht230 f_jc-ac pos_rel">
      <img className="card-product__img" src={image} alt={alt} />

      <div className="card-product__info f">
        {spicy}
        {vegetarian}
      </div>
    </div>
  );
};

export default ImagePanel;
