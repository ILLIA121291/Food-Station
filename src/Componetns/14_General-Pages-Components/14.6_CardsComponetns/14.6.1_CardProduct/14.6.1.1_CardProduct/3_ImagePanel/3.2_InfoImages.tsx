import { FC } from 'react';
import Spicy from './img/spicy.svg';
import Vegetarian from './img/vegetarian.svg';

// Props Interface ---------------------------------

interface IProps {
  tags: string[];
}

const InfoImages: FC<IProps> = ({ tags }) => {
  const spicy = tags.includes('spicy') ? <img className="wt50 ht50 mr5" src={Spicy} alt="spicy" /> : null;
  const vegetarian = tags.includes('vegetarian') ? <img className="wt50 ht50 mr5" src={Vegetarian} alt="vegetarian" /> : null;

  return (
    <div className="card-product__img-info f">
      {spicy}
      {vegetarian}
    </div>
  );
};

export default InfoImages;
