import { FC, useEffect, useState } from 'react';
import classes from './ProductListDynamicPage.module.css';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { useParams } from 'react-router-dom';
import { DOMAIN_NAME } from '../../../10_Utilities/variables';
import CardProduct from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import { IProduct } from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

// Props Interfase ----------------------------
interface IProps {
  langugeApp: typeof english;
}

const ProductListDynamicPage: FC<IProps> = ({ langugeApp }) => {
  // Получение названия продукта и URL;
  const { productListName } = useParams();

  const [list, setList] = useState<IProduct>();

  // Получение списка продуктов из базы данных;
  useEffect(() => {
    fetch(`${DOMAIN_NAME}products`)
      .then(response => response.json())
      .then(getData => {setList(getData), console.log(getData)});
  }, []);

  return <div className={classes.div}>

  </div>;
};

export default ProductListDynamicPage;
