import { FC } from 'react';
import classe from './TitleBlockComponentInCart.module.css';

// Interface ------------------------------------
interface IProps {
  title: string;
}

// COMPONENT -------------------------------------
const TitleBlockComponentInCart: FC<IProps> = ({ title }) => {
  // RENDERING COMPONENT -------------------------
  return <h3 className={classe.title}>{title}</h3>;
};

export default TitleBlockComponentInCart;
