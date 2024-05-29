import './HomePage.scss';
import dataPizza from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.1_Pizza/dataPizza';
import dataRoll from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.2_Rolls/dataRolls';

import { FC } from 'react';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import SliderProduct from '../../../14_General-Pages-Components/14.7_SliderComponents/14.7.1_SliderProduct/SliderProduct';
import CardProduct from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/CardProduct';

interface IProps {
  langugeApp: typeof english;
}

const HomePage: FC<IProps> = ({ langugeApp }) => {
  return (
    <div className="gbs__border f f__wrap">
      {
        dataRoll.map((value, index) => {
          return (
            <CardProduct key={index} data={value} langugeApp={langugeApp} />
          )
        })
      }



      {/* <SliderProduct titel="Pizza" products={dataPizza} langugeApp={langugeApp} /> */}
    </div>
  );
};

export default HomePage;
