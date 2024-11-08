import { FC, useEffect, useState } from 'react';
import classes from './DishListDynamicPage.module.css';
import english from '../../../12_General-Data-Recourses/12.1_Text/12.1.1_English/1_english';
import { useParams } from 'react-router-dom';
import { DOMAIN_NAME } from '../../../10_Utilities/variables';
import CardProduct from '../../../14_General-Pages-Components/14.6_CardsComponetns/14.6.1_CardProduct/14.6.1.1_CardProduct/1_CardProduct/CardProduct';
import { IProduct } from '../../../12_General-Data-Recourses/12.3_FoodMenu/12.3.0_Products/dataProducts';

// Props Interfase ----------------------------
interface IProps {
  langugeApp: typeof english;
}

const DishListDynamicPage: FC<IProps> = ({ langugeApp }) => {
  // Получение названия типа болюда из URL;
  const { dishListName } = useParams();

  // Сохранение полученых продуквто из базы данных в состояние;
  const [productList, setProductList] = useState<IProduct[]>();

  // Получение списка  из базы данных;
  useEffect(() => {
    fetch(`${DOMAIN_NAME}menu/${dishListName}`)
      .then(response => response.json())
      .then(getProductList => {
        setProductList(getProductList);
      });
  }, [dishListName]);

  return (
    <>
      <p className={classes.page_title}>Hello I am page: {dishListName}</p>
      <div className={classes.div}>
        {productList?.map(product => {
          return <CardProduct data={product} key={product.name} langugeApp={langugeApp} />;
        })}
      </div>
      ;
    </>
  );
};

export default DishListDynamicPage;





