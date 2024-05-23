import CardProduct from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import './HomePage.scss';

import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="gbs__border">
      <CardProduct productType="pizza" />
    </div>
  );
};

export default HomePage;
