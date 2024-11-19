import classes from './TitleTextDescriptionOrder.module.css';
import { FC } from 'react';

// Interface ------------------------------------
interface IProps {
  name: string;
}

// COMPONENT -----------------------------------
const TitelTextDescriptionOrder: FC<IProps> = ({ name }) => {
  // RENDERING COMPONENT ---------------------------------
  return <h5 className={classes.title}>{name}</h5>;
};

export default TitelTextDescriptionOrder;
