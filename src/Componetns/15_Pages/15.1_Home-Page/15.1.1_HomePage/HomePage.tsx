import CardProduct from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';
import './HomePage.scss';
import dataPizza from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';

import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="gbs__border f_jc_sb f__wrap fg10">
      {
        dataPizza.map((value, index) => {
          return <CardProduct  key={index} data={value} />
        })
      }

      {/* <CardProduct data={dataPizza[0]} />
      <CardProduct data={dataPizza[1]} />
      <CardProduct data={dataPizza[2]} />
      <CardProduct data={dataPizza[14]} />
      <CardProduct data={dataPizza[13]} />
      <CardProduct data={dataPizza[12]} />
      <CardProduct data={dataPizza[11]} />
      <CardProduct data={dataPizza[10]} /> */}
    </div>
  );
};

export default HomePage;
