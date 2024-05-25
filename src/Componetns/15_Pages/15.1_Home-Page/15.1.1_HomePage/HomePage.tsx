import CardProduct from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import './HomePage.scss';
import dataPizza from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="gbs__border">
      <CardProduct data={dataPizza[0]} />
    </div>
  );
};

export default HomePage;
