import { FC } from 'react';
import { ErrorMessage } from 'formik';
import onOffBodyScroll from '../../10_Utilities/onOffBodyScroll';

interface IProps {
  name: string;
  className?: string;
  color?: string;
  httpMessage?: string | null;
  message?: string;
  display?: boolean;
}

const BlockErrorMessages: FC<IProps> = ({ className = '', color = 'rc', name, httpMessage, message, display }) => {
  let displayBlockErrorMessage: JSX.Element;
  let animationCalss: string;

  switch (name) {
    case 'extra-ingredient':
      animationCalss = display ? 'bd bkgr__yel dis-bloc-anim ' : 'dis-none-anim';
      displayBlockErrorMessage = (
        <div onClick={e => e.stopPropagation()} onMouseEnter={() => onOffBodyScroll('hidden')} onMouseLeave={() => onOffBodyScroll('auto')} className={`extra-ingre__info-message   fw600 pr10 pl10 pt5 pb5 bdr15 tx-al-c us-se ${animationCalss}  ${className} ${color}`}>
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

  return displayBlockErrorMessage;
};

export default BlockErrorMessages;
