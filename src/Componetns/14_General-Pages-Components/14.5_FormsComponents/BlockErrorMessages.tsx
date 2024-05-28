import { FC } from 'react';
import { ErrorMessage } from 'formik';

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
  let animation: string;

  switch (name) {
    case 'extra-ingredient':
      animation = display ? 'dis-bloc-anim' : 'dis-none-anim';
      displayBlockErrorMessage = <div className={`extra-ingre__info-message bd bkgr__yel fw600 pr10 pl10 pt5 pb5 bdr15 tx-al-c us-se ${animation}  ${className} ${color}`}>{message}</div>;
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
