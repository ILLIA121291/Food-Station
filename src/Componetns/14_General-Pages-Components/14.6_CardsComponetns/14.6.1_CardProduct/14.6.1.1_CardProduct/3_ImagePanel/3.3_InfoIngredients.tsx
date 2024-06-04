import { FC } from 'react';

//Props Interface ----------------------------

interface IProps {
  ingredients: string[];
}

const InfoIngredients: FC<IProps> = ({ ingredients }) => {
  return (
    <ul className={`card-product__img-ingredients fw600 fs18 tx-tr-cap f_jc-ac fc asd `}>
      {ingredients.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
};

export default InfoIngredients;
