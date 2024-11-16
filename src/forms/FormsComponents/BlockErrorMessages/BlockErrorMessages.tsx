import { FC } from 'react';
import { ErrorMessage } from 'formik';
import onOffBodyScroll from '../../../utilities/onOffBodyScroll';
import classes from './BlockErrorMessages.module.css';

// Interface --------------------------------------------------
interface IProps {
  name: string;
  className?: string;
  color?: string;
  httpMessage?: string | null;
  message?: string;
  display?: boolean;
}

// COMPONENT ---------------------------------------------------
const BlockErrorMessages: FC<IProps> = ({ className = '', color = 'rc', name, httpMessage, message, display }) => {
  let displayBlockErrorMessage: JSX.Element;
  let animationCalss: string;

  switch (name) {
    case 'extra-ingredient':
      animationCalss = display ? 'bd bkgr__yel dis-bloc-anim ' : 'dis-none-anim';
      displayBlockErrorMessage = (
        <div onClick={e => e.stopPropagation()} onMouseEnter={() => onOffBodyScroll('hidden')} onMouseLeave={() => onOffBodyScroll('auto')} className={`${classes.extraIngredientsInfoMessage} ${animationCalss}  ${className} ${color}`}>
          {message}
        </div>
      );
      break;

    default:
      displayBlockErrorMessage = (
        <div className={`f__info-message ${color} ${className}`}>
          <ErrorMessage name={name} component="p" />
          {httpMessage}
        </div>
      );
  }

  // RENDERING COMPONENT---------------------------------------
  return displayBlockErrorMessage;
};

export default BlockErrorMessages;
