import { FC } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import classes from './BtnBackInCart.module.css';

// Interface ----------------------------------

interface IProps {
  backTo: string;
  setDisplayCartPageComponent: React.Dispatch<React.SetStateAction<string>>;
}

// COMPONENT -----------------------------------
const BtnBackInCart: FC<IProps> = ({ backTo, setDisplayCartPageComponent }) => {
  // RENDERING COMPONENT -----------------------
  return (
    <button className={classes.btn} onClick={() => setDisplayCartPageComponent(backTo)}>
      {<MdOutlineArrowBackIosNew size={'50px'} color="white" style={{ transform: 'translateX(-4px)' }} />}
    </button>
  );
};

export default BtnBackInCart;
