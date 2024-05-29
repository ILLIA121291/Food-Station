import './HomePage.scss';
import { FC } from 'react';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';

import SliderProduct from '../../../14_General-Pages-Components/14.7_SliderComponents/14.7.1_SliderProduct/SliderProduct';
import dataProducts from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

interface IProps {
  langugeApp: typeof english;
}

const HomePage: FC<IProps> = ({ langugeApp }) => {
  return (
    <div className="gbs__border">
      <SliderProduct titel="Pizza" products={dataProducts.pizza.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.rolls.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.sushi.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.soup.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.snacks.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.sauces.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.drinks.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.dessert.products} langugeApp={langugeApp} />
      <SliderProduct titel="Rols" products={dataProducts.sets.products} langugeApp={langugeApp} />
    </div>
  );
};

export default HomePage;
