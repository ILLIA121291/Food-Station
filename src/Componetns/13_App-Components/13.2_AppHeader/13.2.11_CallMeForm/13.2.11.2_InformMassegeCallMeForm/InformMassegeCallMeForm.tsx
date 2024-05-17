import './InformMassegeCallMeForm.scss';

import { FC } from 'react';

interface IProps {
  process: string;
}

const InformMassegeCallMeForm: FC<IProps> = ({ process }) => {
  let displayInformMessage;

  switch (process) {
    case 'loading':
      displayInformMessage = (
        <p className="callmefrom__info-message" style={{ color: 'orange' }}>
          Please wait, your information is being sent
          {/* {props.textContactForm.statusLoading} */}
        </p>
      );
      break;
    case 'success':
      displayInformMessage = (
        <p className="callmefrom__info-message" style={{ color: 'green' }}>
          We have successfully received your details and will call you back soon.
          {/* {props.textContactForm.statusSuccess} */}
        </p>
      );
      break;
    case 'error':
      displayInformMessage = (
        <p className="callmefrom__info-message" style={{ color: 'red' }}>
          Oops, something went wrong, please try again in a few minutes.
          {/* {props.textContactForm.statusError} */}
        </p>
      );
      break;
    default:
      displayInformMessage = (
        <p className="callmefrom__info-message">
          We will call you back soon
          {/* {props.formText.infoMassege} */}
        </p>
      );
      break;
  }

  return displayInformMessage;
};

export default InformMassegeCallMeForm;
